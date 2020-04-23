import React, { useEffect, useRef, useState } from 'react';
import './story.scss'
import M from 'materialize-css/dist/js/materialize'
import firestore from '../firebase';

const Story = (nani) => {
    const [pause, setPause] = useState(false);
    const [widthstate, setWidthState] = useState(0);
    const [number, setNumber] = useState(0);
    let [instance, setInstance] = useState(null);
    const carouselRef = useRef(null);
    var ID = nani.ID;

    const [story_data, setStory_data] = useState({
        img: [''],
        pro: '',
        name: ''
    });

    const getStories = () => {
        firestore.collection('stories').onSnapshot((shot) => {
            const allStories = [];
            shot.forEach((cur) => allStories.push(cur.data()));

            setStory_data(allStories[ID]);
        }, (error) => console.error(error))
    }

    const plus_image = (index) => {
        if (index !== story_data.img.length)
            setNumber(number + 1)
    }
    const minus_image = (index) => {
        if (index === 0 && ID === 0)
            console.log('hi')
        else
            setNumber(number - 1)
    }

    const getComplete = (i) => {
        if (number < 0) {
            setNumber(0);
            window.location = Number(ID) - 1;
        }
        if (number === story_data.img.length) {
            instance.set(0);
            setNumber(0);
            window.location = Number(ID) + 1;
        }
        if (i == number) {
            if (widthstate == 100) {
                setNumber(number + 1);
                setWidthState(0);
                instance.next();
            }
            return widthstate;
        }
        if (i < number)
            return 100;

        return 0;
    }

    useEffect(() => {
        setInstance(M.Carousel.init(carouselRef.current, {
            fullWidth: true,
            noWrap: true,
            duration: 90
        }))

        return () => {
            // instance.destroy();
        }
    }, [story_data])

    useEffect(() => {
        const load = () => {
            if (pause === false)
                setWidthState((old) => {
                    return Math.min(old + 1, 100)
                })
        }

        const timer = setInterval(load, 100)

        return () => {
            clearInterval(timer);
        }
    })

    useEffect(() => {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, {
            endingTop: '45%'
        });
    }, [])


    useEffect(() => {
        getStories();
    }, []);

    if (story_data.img.length > 1) {
        var slide = story_data.img.map((cur, i) => (<a className="carousel-item" key={i}><img className="image" src={cur} /></a>))
        slide = (
            <div ref={carouselRef} className="carousel carousel-slider" onMouseDown={() => { setPause(true); }} onMouseUp={() => { setPause(false); }} onTouchStart={() => { setPause(true) }} ontouchEnd={() => { setPause(false) }}>
                {slide}
                <a className="button btn arrow transparent" onClick={() => { instance.prev(); minus_image(number); setWidthState(0) }}></a>
                <a className="btn arrow transparent button_right" onClick={() => { instance.next(); plus_image(number); setWidthState(0) }}></a>
            </div>
        )
    } else
        var slide = (
            <div style={{ height: "87vh" }} onTouchStart={() => { setPause(true) }} ontouchEnd={() => { setPause(false) }}>
                <a className="button_img btn arrow transparent" onClick={() => { minus_image(number); setWidthState(0) }}></a>
                <a className="img" onMouseDown={() => { setPause(true); }} onMouseUp={() => { setPause(false); }}><img className="image" src={story_data.img} /></a>
                <a className="btn arrow transparent button_right_img" onClick={() => { plus_image(number); setWidthState(0) }}></a>
            </div>
        )

    return (
        <div>
            <div className='story_back row'>
                <div className='story'>
                    <ul className="collection with-header">
                        <li className="collection-item avatar">
                            <img className='circle profile' src={story_data.pro}></img>
                            <div className="text">
                                <h6 className='h5'>{story_data.name}</h6>
                                <h6>1h</h6>
                                {
                                    pause ? <div className="btn paused">paused</div> : <div />
                                }

                            </div>
                            <a data-target="options" className="secondary-content modal-trigger"><i className="material-icons white-text" style={{ fontSize: "30px" }}>more_horizs</i></a>
                        </li>
                    </ul>
                    <div className="progress_container">
                        {
                            story_data.img.map((cur, i) => (
                                <div className="progress" key={i}>
                                    <div className="determinate" key={i} id={"loader" + i} style={{ width: getComplete(i) + '%' }}></div>
                                </div>
                            ))
                        }
                    </div>
                    {slide}
                </div>
                <div id="options" className="modal">
                    <div className="modal-content">
                        <div className="btn">
                            Report inappropriate
                    </div>
                        <div className="btn">
                            Cancel
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story;
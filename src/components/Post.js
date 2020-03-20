import React, { useState, useEffect, useRef } from 'react';
import M from 'materialize-css/dist/js/materialize'
import './Post.scss'

const Post = (nani) => {
    let [instance, setInstance] = useState(null);
    const [bookmark, setBookmark] = useState(true)
    const [like, setLike] = useState(false)
    const carouselRef = useRef(null);
    const avatar = nani.avatar;
    const name = nani.name;
    const image = nani.image;
    const time = nani.time;
    var today = new Date();
    var date = '';

    useEffect(() => {
        setInstance(M.Carousel.init(carouselRef.current, {
            fullWidth: true,
            noWrap: true,
            indicators: true,
            duration: 90
        }))

        return () => {
            instance.destroy();
        }
    }, [])

    useEffect(() => {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, {
            endingTop: '35%'
        });
    }, [])

    if (image.length > 1) {
        var slide = image.map((cur, i) => (<a className="carousel-item" key={i}><img src={cur} /></a>))
        slide = (
            <div ref={carouselRef} className="carousel carousel-slider">
                {slide}
                <a className="btn arrow transparent button" tabIndex="1" onClick={() => { instance.prev() }}></a>
                <a className="btn arrow transparent button_right" tabIndex="-1" onClick={() => { instance.next() }}></a>
            </div>
        )
    } else
        var slide = (<a className="img" href=""><img src={image} /></a>)

    if (today.getFullYear() - Number(time[0]) === 0) {
        if (today.getMonth() + 1 - Number(time[1]) === 0) {
            if (today.getDate() - Number(time[2]) === 0) {
                if (today.getHours() - Number(time[3]) === 0) {
                    if (today.getMinutes() - Number(time[4]) === 0)
                        date = 'few seconds ago';
                    else
                        date = (today.getMinutes() - Number(time[4])) + ' minutes ago'
                } else
                    date = (today.getHours() - Number(time[3])) + ' hours ago'
            } else
                date = (today.getDate() - Number(time[2])) + ' days ago'
        } else
            date = (today.getMonth() + 1 - Number(time[1])) + ' monts ago'
    } else
        date = (today.getFullYear() - Number(time[0])) + ' years ago'

    return (
        <div className='post col l6 offset-l2 s12 m10 offset-m1'>
            <nav>
                <div className="nav-wrapper white">
                    <a className="brand-logo show-on-small left">
                        <img className='circle profile' src={avatar} />
                        <h6 className='black-text'>{name}</h6>
                    </a>
                    <ul id="nav-mobile" className="right black-text">
                        <li>
                            <a data-target="options" className="waves-effect waves-light black-text modal-trigger">
                                <i className='material-icons'>more_horizs</i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="card">
                <div className="card-image">
                    {slide}
                </div>
                <div className="card-content">
                    <div>
                        <a onClick={() => { setLike(v => !v) }}>
                            {like ? <svg className='image' aria-label="Unlike" fill="#ed4956" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M35.3 35.6c-9.2 8.2-9.8 8.9-11.3 8.9s-2.1-.7-11.3-8.9C6.5 30.1.5 25.6.5 17.8.5 9.9 6.4 3.5 13.7 3.5 20.8 3.5 24 8.8 24 8.8s3.2-5.3 10.3-5.3c7.3 0 13.2 6.4 13.2 14.3 0 7.8-6.1 12.3-12.2 17.8z" fillRule="evenodd"></path></svg> : <svg className='image' aria-label="Like" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z" fillRule="evenodd"></path></svg>}
                        </a>
                        <a>
                            <svg className='image' aria-label="Comment" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></svg>
                        </a>
                        <a>
                            <svg className='image' aria-label="Share Post" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l16 15.8 5.5 22.8c.2.9 1.4 1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5zm-40.1 3h33.5L19.1 18c-.4.2-.9.1-1.2-.2L6.4 6.5zm17.7 31.8l-4-16.6c-.1-.4.1-.9.5-1.1L41.5 9 24.1 38.3z"></path><path d="M14.7 48.4l2.9-.7"></path></svg>
                        </a>
                        <a onClick={() => { setBookmark(v => !v) }}>
                            {bookmark ? <svg className='image_right right' aria-label="Save" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg> : <svg className='image_right right' aria-label="Remove" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 28.9 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1z"></path></svg>}
                        </a>
                    </div>
                    <h6>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                    </h6>
                    <p className='date grey-text' id='date'>
                        {date}
                    </p>
                </div>
                <div className="card-action">
                    <nav>
                        <div className="nav-wrapper">
                            <form>
                                <div className="input-field">
                                    <input id="comment" type="search" required />
                                    <label htmlFor="comment">Add a comment</label>
                                    <i className="material-icons close">send</i>
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
            <div id="options" className="modal modal1">
                <div className="modal-content modal2">
                    <div className="btn red-text">
                        Report inappropriate
                    </div>
                    <div className="btn red-text">
                        Unfollow
                    </div>
                    <div className="btn">
                        Go to post
                    </div>
                    <div className="btn">
                        Share
                    </div>
                    <div className="btn">
                        Copy Link
                    </div>
                    <div className="btn">
                        Embed
                    </div>
                    <div className="btn">
                        Cancel
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
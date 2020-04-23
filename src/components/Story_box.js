import React from 'react';

const StoryBoxSmall = () => {
    return (
        <div className='row soty_bar_mid col m10 s12 offset-m1 hide-on-large-only'>
            <div className='story_box_mid'>
                <a href="/story/0" className="stories">
                    <img className='circle profile' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1200px-DC_Comics_logo.svg.png'></img>
                    <p className='black-text center'>BatMan</p>
                </a>
                <a href="/story/0" className="stories">
                    <img className='circle profile' src='https://anikod.mn//img/ogimage.jpg'></img>
                    <p className='black-text center'>aniKod</p>
                </a>
                <a href="/story/0" className="stories">
                    <img className='circle profile' src='https://i.pinimg.com/originals/f2/a8/3b/f2a83b69dad12688b47dbf2bb12b8932.jpg'></img>
                    <p className='black-text center'>Marshmello</p>
                </a>
            </div>
        </div>
    )
}

const StoryBoxBig = () => {
    const name = localStorage.getItem('name')
    return (
        <div className='row col l4 side hide-on-med-and-down fixed'>
            <nav className='z-depth-0'>
                <div className="nav-wrapper white box">
                    <a className="brand-logo show-on-small left">
                        <img className='circle profile' src='https://previews.123rf.com/images/urfandadashov/urfandadashov1808/urfandadashov180818343/108180118-user-vector-icon-isolated-on-transparent-background-user-logo-concept.jpg'></img>
                        <h6 className='black-text'>{name}</h6>
                    </a>
                </div>
                <div className='story_box'>
                    <h6 className="grey-text">stories</h6>
                    <a href="/story/0" className="stories">
                        <img className='circle profile' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1200px-DC_Comics_logo.svg.png'></img>
                        <p className='black-text'>BatMan</p>
                    </a>
                    <a href="/story/1" className="stories">
                        <img className='circle profile' src='https://anikod.mn//img/ogimage.jpg'></img>
                        <p className='black-text'>aniKod</p>
                    </a>
                    <a href="/story/2" className="stories">
                        <img className='circle profile' src='https://i.pinimg.com/originals/f2/a8/3b/f2a83b69dad12688b47dbf2bb12b8932.jpg'></img>
                        <p className='black-text'>Marshmello</p>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export {StoryBoxSmall};
export {StoryBoxBig};
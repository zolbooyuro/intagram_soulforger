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
                    <img className='circle profile' src='https://instagram.fuln2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/76844870_2735946593133365_7586026101554544640_n.jpg?_nc_ht=instagram.fuln2-1.fna.fbcdn.net&_nc_ohc=AkHYh2kTbpUAX9EOlvH&oh=b55ee92cab6f1bcc74dd5f39a66a668b&oe=5EBDABCA'></img>
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
    return (
        <div className='row col l4 side hide-on-med-and-down fixed'>
            <nav className='z-depth-0'>
                <div className="nav-wrapper white box">
                    <a className="brand-logo show-on-small left">
                        <img className='circle profile' src='https://instagram.fuln2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/76844870_2735946593133365_7586026101554544640_n.jpg?_nc_ht=instagram.fuln2-1.fna.fbcdn.net&_nc_ohc=AkHYh2kTbpUAX9EOlvH&oh=b55ee92cab6f1bcc74dd5f39a66a668b&oe=5EBDABCA'></img>
                        <h6 className='black-text'>Soulforger</h6>
                    </a>
                </div>
                <div className='story_box'>
                    <h6 className="grey-text">stories</h6>
                    <a href="/story/0" className="stories">
                        <img className='circle profile' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1200px-DC_Comics_logo.svg.png'></img>
                        <p className='black-text'>BatMan</p>
                    </a>
                    <a href="/story/1" className="stories">
                        <img className='circle profile' src='https://instagram.fuln2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/76844870_2735946593133365_7586026101554544640_n.jpg?_nc_ht=instagram.fuln2-1.fna.fbcdn.net&_nc_ohc=AkHYh2kTbpUAX9EOlvH&oh=b55ee92cab6f1bcc74dd5f39a66a668b&oe=5EBDABCA'></img>
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
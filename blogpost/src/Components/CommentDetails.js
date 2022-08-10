import React from 'react';


const CommentDetails = (props) => {
    return(
        <div className="comment">
            <a className="avatar" href='/'>
                <img alt="avatar" src={props.avatar}></img>
            </a>
            <div className="content">
                <a className="author" href="/">{props.author}</a>
                <div className="metadata">
                    <span className="date">{props.time}</span>
                </div>
                <div className="text">
                    Excellent work..!
                </div>
            </div>
        </div>
    )
}

export default CommentDetails;
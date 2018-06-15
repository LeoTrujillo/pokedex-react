import React, { Component } from 'react';
import './CommentList.css';

class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: props.comments
    };
  }

  render() {
    const list = this.state.comments.map((comment, index) => {
      return (
        <div key={index} className="box comment">
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="https://source.unsplash.com/user/erondu/128x128" alt="avatar"/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{comment.name}</strong> <small>{comment.email}</small>
                  <br />
                  {comment.message}
                </p>
              </div>
              <div className="level is-mobile">
                <div className="level-left">
                  <div className="level-item">
                    <div className="icon heart">
                      <i className="fas fa fa-heart"></i>
                      <span> 0 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })
    return (
      <div className="comments">
        {list}
      </div>
    );
  }
}

export default CommentList;
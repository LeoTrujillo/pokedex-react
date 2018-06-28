import React from 'react';
import { connect } from 'react-redux';
import './CommentList.css';

const mapStateToProps = state => {
  return { comments: state.comments};
}

const ConectedList = ({comments}) => (
  <div>
  {comments.map((comment, index) => (
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
  ))
  }
  </div>
);

const CommentList = connect(mapStateToProps)(ConectedList);

export default CommentList;
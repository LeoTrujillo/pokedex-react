import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return(
      <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-content">
          <h1>Modal</h1>
        </div>
        <button className="modal-close is-large" aria-label="close"></button>
      </div>
    );
  }
}

export default Modal;
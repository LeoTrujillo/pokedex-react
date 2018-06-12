import React, { Component } from 'react';
import './Comment.css';
// import Modal from './Modal/Modal';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      error: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  closeModal() {
    this.setState({error: false});
  }

  handleChangeInput(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name !== '' && this.state.email !== '' && this.state.message) {
      console.log('Data of form', this.state);
      this.setState({
        name: '',
        email: '',
        message: ''
      });
    } else {
      this.setState({error: true});
    }
  }

  render() {
    let className = 'modal';
    if (this.state.error) {
      className += ' is-active';
    }
    return(
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Nombre</label>
            <div className="control">
              <input name="name" type="text" className="input" value={this.state.name} onChange={this.handleChangeInput}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Correo</label>
            <div className="control">
              <input name="email" type="email" className="input" value={this.state.email} onChange={this.handleChangeInput}/>
            </div>
          </div>
          <div className="field">
            <label htmlFor="" className="label">Mensaje</label>
            <div className="control">
              <textarea name="message" className="textarea" value={this.state.message} onChange={this.handleChangeInput}></textarea>
            </div>
          </div>
          <div className="field is-grouped">
            <button type="submit" className="button is-link" >
              Comentar
            </button>
          </div>
        </form>

        <div className={className}>
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="box">
              <h1>Debes llenar todos los campos</h1>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={this.closeModal}></button>
        </div>
      </div>
    );
  }
}

export default Comment;
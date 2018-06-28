import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Comment.css';
import { addComment } from '../../actions/index';

const mapDispatchToProps = dispatch => {
  return {
    addComment: comment => dispatch(addComment(comment))
  }
}


function Modal(props) {
  return (
    <div className={props.styles}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">
          <h1>Debes llenar todos los campos</h1>
        </div>
      </div>
    </div>
  );
}

class FormComment extends Component {
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
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const comment = this.state;
    if (comment.name !== '' && comment.email !== '' && comment.message) {
      const c = {
        name: comment.name,
        email: comment.email,
        message: comment.message
      };
      console.log('Data of form', c);
      this.props.addComment(c);
      // this.state.comments.push(c);
      // this.setState({comments: this.state.comments});
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
      setTimeout(() => {
        this.closeModal();
      }, 3000);
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
        <Modal styles={className} />
      </div>
    );
  }
}

const Comment = connect(null, mapDispatchToProps)(FormComment);

export default Comment;
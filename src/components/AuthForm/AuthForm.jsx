/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import styles from './AuthForm.module.css';
import { DisabledBtn } from '../Button/Button';
import Selector from '../Selector/Selector';
import Icon from '../Icon/Icon';

const INITIAL_STATE = {
  nickname: '',
  email: '',
  phone: ''
};

class AuthForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
  };

  render() {
    const { nickname, email, phone } = this.state;

    return (
      <div className={styles.wrapper}>
        <a name="signUp"></a>
        <h2 className={styles.title}>Register to get a work</h2>
        <p className={styles.desc}>
          Attention! After successful registration and alert, update the list of users in the block from the top
        </p>
        <form
          encType="multipart/form-data"
          method="post"
          className={styles.registrationForm}
          onSubmit={this.handleSubmit}
        >
          <div className={styles.fieldset}>
            <label htmlFor="nickname" className={styles.label}>
              Name
            </label>
            <input
              className={styles.input}
              value={nickname}
              id="nickname"
              placeholder="Your name"
              name="nickname"
              onChange={this.handleChange}
            ></input>
          </div>

          <div className={styles.fieldset}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              className={styles.input}
              type="email"
              id="nickname"
              placeholder="Your email"
              size="12"
              onChange={this.handleChange}
              value={email}
              name="email"
            ></input>
          </div>

          <div className={styles.fieldset}>
            <label htmlFor="phone" className={styles.label}>
              Phone
            </label>
            <input
              className={styles.input}
              type="tel"
              id="phone"
              placeholder="+38 (__)___ __ __"
              size="12"
              onChange={this.handleChange}
              value={phone}
              name="phone"
            ></input>
          </div>
          <Selector />
          <div className={styles.fileUpload}>
            <label htmlFor="file" className={styles.uploadBtn}>
              <Icon icon="Upload" className={styles.uploadIcon} />
            </label>
            <input
              className={styles.input}
              type="file"
              size="12"
              name="photo"
              id="file"
              multiple
              accept="image/*,image/jpeg"
            ></input>
            <span className={styles.fileUploadText}>Upload your photo</span>
          </div>
          <DisabledBtn name="Sign Up" />
        </form>
      </div>
    );
  }
}

export default AuthForm;

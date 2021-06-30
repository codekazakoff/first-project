import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/signUp/joiSignIn.css";

class JoiBrowser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signIn: {
        email: "",
        password: "",
      },
      errors: {},
    };
  }

  render() {
    return (
      <div className="wrapper">
        <form className="form">
          <div className="form__inner">
            <div className="form__title">Sign In</div>
            <div className="form__control">
              <label htmlFor="email">Email</label>
              <div className="form__input-group">
                <button className="form__button-btn">
                  <i className="fal fa-envelope"></i>
                </button>
                <input
                  id="email"
                  type="email"
                  className="form__input-email"
                  placeholder="enter your email"
                />
              </div>
            </div>
            <div className="form__control">
              <label htmlFor="password">Password</label>
              <div className="form__input-group">
                <button className="form__button-btn">
                  <i className="fal fa-envelope"></i>
                </button>
                <input
                  id="password"
                  type="password"
                  className="form__input-email"
                  placeholder="enter your password"
                />
              </div>
            </div>
            <div className="form__control">
              <div className="form__button-sign-in">
                <Link to="/sign-in" className="link-sign-in">
                  Sign In
                </Link>
              </div>
            </div>
            <div className="form__control-footer">
              <div className="form__control-footer-title">
                Do not have an account ?
                <Link className="link" to="/sign-up">
                  SignUp now
                </Link>
              </div>
              <div className="form__control-footer-text">
                <Link to="/privacy-policy" className="link">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default JoiBrowser;

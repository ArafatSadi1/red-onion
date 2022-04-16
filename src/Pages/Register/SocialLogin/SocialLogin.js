import React from "react";
import google from '../../../images/Social/google.png'
import facebook from '../../../images/Social/facebook.png'
import github from '../../../images/Social/github.png'

const SocialLogin = () => {
  return (
    <div className="mt-2">
      <div className="d-flex align-items-center">
        <div style={{ height: 1 }} className="w-50 bg-dark"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: 1 }} className="w-50 bg-dark"></div>
      </div>
      <div>
          <button className="btn btn-danger d-block w-75 mx-auto">
              <img className="me-2" height={30} src={google} alt="" />
              Google Log in
              </button>
          <button className="btn btn-danger d-block w-75 mx-auto my-2">
              <img className="me-2" height={30} src={facebook} alt="" />
              Facebook Log in</button>
          <button className="btn btn-danger d-block w-75 mx-auto">
              <img className="me-2" height={30} src={github} alt="" />
              Github Log in</button>
      </div>
    </div>
  );
};

export default SocialLogin;

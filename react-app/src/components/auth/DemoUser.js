import React from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import '../SplashPage/SplashPage.css'
import { useHistory } from 'react-router-dom'

export default function DemoUser() {
    const history = useHistory()
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user)

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = "demo@aa.io";
    const password = "password";
    return dispatch(login( email, password ));
  };

  if (user) {
    history.push('/home')
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" className="LoginAsDemo_2397" >
        <div className="DemoText_2397">Demo user</div>
      </button>
    </form>
  );
}

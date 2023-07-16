import React, { useEffect, useState } from "react";
import { Logo } from "../components";
import { FormInput } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "../features/user/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../utils";

let initialState = {
  Name: "",
  Email: "",
  Password: "",
  isMember: true,
};

const Register = () => {
  const [value, setValue] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(getLocalStorage());

  const { Name, Email, Password, isMember } = value;

  useEffect(() => {
    if (user) {
      console.log("in");
      navigate("/");
    }
  }, [user]);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log(value);
    if (!Email || !Password || (!isMember && !Name)) {
      toast.error("Fill all creds...");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: Email, password: Password }));
      return;
    }
    dispatch(registerUser({ name: Name, email: Email, password: Password }));
  };

  const toggle = () => {
    setValue((prevState) => {
      return {
        ...prevState,
        isMember: !prevState.isMember,
      };
    });
  };

  return (
    <main className="register">
      <Logo />
      <h3>{isMember ? "Login" : "Register"}</h3>
      <form onSubmit={handelSubmit}>
        {!isMember && (
          <FormInput
            type="text"
            name="Name"
            value={Name}
            handelChange={handelChange}
          />
        )}
        <FormInput
          type="text"
          name="Email"
          value={Email}
          handelChange={handelChange}
        />
        <FormInput
          type="password"
          name="Password"
          value={Password}
          handelChange={handelChange}
        />
        <button type="submit">{isLoading ? "Submitting..." : "Submit"}</button>
      </form>
      <p>
        {isMember ? "Not a member" : "Sign In here"}{" "}
        <span onClick={toggle}>{isMember ? "Register" : "Sign In"}</span>
      </p>
    </main>
  );
};

export default Register;

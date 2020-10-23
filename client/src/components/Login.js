import React from "react";
import { Link, useHistory } from "react-router-dom";
import { LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/types";
import "../stylesheets/login.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";

const Login = () => {
  // Dispatch
  const dispatch = useDispatch();
  const history = useHistory();
  const authUser = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Handling input
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Login a user
  const getLogin = (data) => {
    return async (dispatch) => {
      try {
        const response = await axios.post("/auth/users/login", {
          email: data.email,
          password: data.password,
        });
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data,
        });

        // Get token from localStorage
        const token = localStorage.getItem("token") || response.data.token;

        // Requesting for Secret page
        const result = await axios.get("auth/users/dashboard", {
          headers: {
            authorization: token,
          },
        });
        if (result.status === 200) history.push("/dashboard");
      } catch (error) {
        dispatch({
          type: LOGIN_ERROR,
          payload: error.response.data.error,
        });
      }
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getLogin(user));
  };

  return (
    <div className="login">
      <div className="login__box">
        <form className="form__control" onSubmit={handleSubmit}>
          <div className="login__header">
            <h2>Login</h2>
          </div>
          {authUser.error && <ErrorMessage message={authUser.error} />}
          <div className="login__body">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleInput}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleInput}
            />
            <button type="submit">Login</button>
          </div>
          <p>
            Don't have an account ? <Link to="/register">Create One</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

// import React from "react";
// import { Link } from "react-router-dom";
// import "../stylesheets/login.css";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../actions/action";
// import ErrorMessage from "./ErrorMessage";

// const Login = () => {
//   // console.log("Current User: ", currentUser);

//   // Dispatch
//   const dispatch = useDispatch();

//   // Local user object
//   const [error, setError] = useState("");
//   setError(useSelector((state) => state.auth.error));

//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   // Handling input
//   const handleInput = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   // Handel Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await dispatch(login(user));
//     // console.log(currentUser);
//   };

//   return (
//     <div className="login">
//       <div className="login__box">
//         <form className="form__control" onSubmit={handleSubmit}>
//           <div className="login__header">
//             <h2>Login</h2>
//           </div>
//           {/* {error && <ErrorMessage message={error} />} */}
//           <div className="login__body">
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               value={user.email}
//               onChange={handleInput}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={user.password}
//               onChange={handleInput}
//             />
//             <button type="submit">Login</button>
//           </div>
//           <p>
//             Don't have an account ? <Link to="/register">Create One</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

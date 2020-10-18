import React, { useState } from "react";

const Home = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", user);
  };
  return (
    <div className="home">
      <form onSubmit={onSubmit}>
        <label htmlFor="">Email: </label>
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br />
        <label htmlFor="">Password: </label>
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;

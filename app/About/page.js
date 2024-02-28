"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const About = () => {
  const [users, setusers] = useState(["No users Available"]);

  
    const getUsers = async () => {
      /* const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setusers(res.data); */
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
      setusers(data);
    };

    // whene we want to get users already and no need to click on button to get data
    useEffect(() => {
      getUsers();
    }, []);
  
  return (
    <>
      <button
        className="bg-red-500 m-10 rounded text-white font-bold px-5 py-3"
        onClick={getUsers}
      >
        Get Users from API
      </button>
      <hr className="bg-yellow-600 px-5 h-5" />
      <div className="bg-slate-200 p-8">
        <h1 className="text-3xl font-bold text-center">List of Fetched Users from API</h1>
        <p className="text-xl text-center">
          {users.map((u, i) => (
            <ul key={i}>
              <li>{u.name} --- <a href={`/${u.id}`}>{u.id}</a></li>
            </ul>
          ))}
        </p>
        <h2>Dynamic Routing</h2>
        <h2>Life Cycle</h2>
        <h2>Get Data from API</h2>
      </div>
    </>
  );
};

export default About;

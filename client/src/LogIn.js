import React from "react";
import { useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import styled from '@emotion/styled'
import "./App.css"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [_,setCookies]=useCookies(["access-token"])
    const navigate=useNavigate()
  
  
    const onSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post("http://localhost:5000/auth/login", {
          username,
          password,
        });
       setCookies("access-token",response.data.token)
       window.localStorage.setItem("userID",response.data.userID)
       navigate("/books")
      } catch (error) {
        console.log(error);
      }
    };
    const Tittle = styled.h1`
    text-align:center;
    margin-top:40px`
    return (
       <>
         <Tittle>LogIn</Tittle>
         <Form
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            label="Login"
            onSubmit={onSubmit}
      />
       </> 
     
    );
  };

export default Login
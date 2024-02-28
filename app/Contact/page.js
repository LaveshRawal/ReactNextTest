'use client'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const notify = () => {
    toast.info('Login successful');
  };
  return (
    <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
  )
}

export default Contact
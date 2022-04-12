import React from "react";
import {ProgressBar} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function Progress() {

  return (
    <>
    <ProgressBar now={60} />    
    </>
    
  );
}

export default Progress;

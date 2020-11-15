import React from 'react';
import {
  MDBEdgeHeader,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBIcon,
  MDBAnimation,
  MDBBtn
} from 'mdbreact';

import logo from "../assets/logo.png";
//import MenuLink from '../components/menuLink';

const CSSPage = () => {
  return (
    <>
    <MDBEdgeHeader color='indigo' className='sectionPage' />
      <MDBAnimation type='zoomIn' duration='500ms'>
      <MDBContainer>
	  	<h1>Activities Coming Soon!</h1>
      </MDBContainer>
      </MDBAnimation>
    </>
  );
};

export default CSSPage;



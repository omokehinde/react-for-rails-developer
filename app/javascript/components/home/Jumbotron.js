import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

const Section = styled.section`
  background-color: #d74234;
  min-height: 550px;
  padding: 100px 0;
  color:#fff;
`
const Header = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
`

const Subhead = styled.p`
  font-size: 18px;
  font-weight: 500;
`

const Jumbotron = () => {
  return (
    <Section className='home-section--1'>
      <div className='container'>
        <div className='row'>
          <div className='col col-sm-12 col-md-5'>
            <div className='pt-4 mt-4'>
              <Header>React for Rails Developer</Header>
              <Subhead>Make your Ruby on Rails App Reactive with React.js</Subhead>
            </div>
          </div>
          <div className='col col-sm-12 col-md-7'>
            <div className='pt-4 mt-4 text-center'>
              <iframe width='560' height='315' src='https://www.youtube.com/embed/B0SxxHAImhc' frameBorder='0' allow='accelerometer; autoplay; encripted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Jumbotron;
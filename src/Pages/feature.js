import React from 'react';
import Navbar from './Navbar';
import * as MdIconCon from 'react-icons/lib/md';
import {Form} from 'formsy-react';
const Features = () => (<div className="inner-page features">
  <header className="fixed-nav" id="main-header">
    <Navbar/>
    <div id="banner">
      <img src="/img/bg-particles.png" alt=""/>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Solve business problems using AI</h1>
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <p>SherlockML is today's tool of choice for data scientists to solve problems using artificial intelligence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="hidden-sms hidden-xs">
        <ul className="container">
          <li className="col-sm-2">
            <a href="#environments">
              <span className="icon">
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <g>
                    <path d="M0 1.8C0 0.8 0.8 0 1.8 0L3.7 0 3.7 3.7 0 3.7 0 1.8ZM6.2 0L9.8 0 9.8 3.7 6.2 3.7 6.2 0ZM12.3 0L14.2 0C15.2 0 16 0.8 16 1.8L16 3.7 12.3 3.7 12.3 0ZM0 6.2L3.7 6.2 3.7 9.8 0 9.8 0 6.2ZM6.2 6.2L9.8 6.2 9.8 9.8 6.2 9.8 6.2 6.2ZM12.3 6.2L16 6.2 16 9.8 12.3 9.8 12.3 6.2ZM0 12.3L3.7 12.3 3.7 16 1.8 16C0.8 16 0 15.2 0 14.2L0 12.3ZM6.2 12.3L9.8 12.3 9.8 16 6.2 16 6.2 12.3ZM12.3 12.3L16 12.3 16 14.2C16 15.2 15.2 16 14.2 16L12.3 16 12.3 12.3Z"/>
                  </g>
                </svg>
              </span>
              <span className="caption">Environments</span>
            </a>
          </li>
          <li className="col-sm-2">
            <a href="#data-management">
              <span className="icon">
                <svg width="16" height="20" viewBox="0 0 16 20">
                  <g>
                    <path d="M14.5 0C15.3 0 16 0.7 16 1.6L16 13.5C16 14.3 15.4 15 14.7 15.1L14.7 4.1C14.7 3.5 14.5 3 14.2 2.6 14.1 2.4 14 2.3 13.9 2.2 13.8 2.1 13.7 2 13.5 1.9 13.1 1.6 12.6 1.4 12.1 1.4L4.7 1.4C4.8 0.6 5.5 0 6.2 0L14.5 0ZM12.1 2.5C13 2.5 13.7 3.2 13.7 4.1 13.7 4.1 13.6 16.1 13.6 16.1 13.5 16.9 13 17.4 12.3 17.5L12.3 6.5C12.3 5.1 11.2 3.9 9.8 3.9L2.4 3.9C2.5 3.1 3 2.6 3.7 2.5 3.8 2.5 12.1 2.5 12.1 2.5ZM9.8 4.9C10.6 4.9 11.3 5.6 11.3 6.5 11.3 6.5 11.3 18.5 11.3 18.6 11.2 19.4 10.5 20 9.8 20L1.5 20C0.7 20 0 19.3 0 18.4L0 6.5C0 5.7 0.6 5 1.3 4.9 1.4 4.9 9.8 4.9 9.8 4.9Z"/>
                  </g>
                </svg>
              </span>
              <span className="caption">Data Management</span>
            </a>
          </li>
          <li className="col-sm-2">
            <a href="#security">
              <span className="icon">
                <svg width="14" height="20" viewBox="0 0 14 20">
                  <g>
                    <path d="M5.8 13.9L5.8 15.8C5.8 16.3 6.2 16.7 6.7 16.7 7.2 16.7 7.5 16.3 7.5 15.8L7.5 13.9C8 13.7 8.3 13.1 8.3 12.5 8.3 11.6 7.6 10.8 6.7 10.8 5.7 10.8 5 11.6 5 12.5 5 13.1 5.3 13.7 5.8 13.9ZM10 20L3.3 20C1.5 20 0 18.5 0 16.7L0 10.8C0 9 1.5 7.5 3.3 7.5L10 7.5C11.8 7.5 13.3 9 13.3 10.8L13.3 16.7C13.3 18.5 11.8 20 10 20Z"/>
                    <path d="M10.8 9.2L2.5 9.2C2 9.2 1.7 8.8 1.7 8.3L1.7 5C1.7 2.3 3.9 0 6.7 0 9.5 0 11.7 2.3 11.7 5L11.7 8.3C11.7 8.8 11.3 9.2 10.8 9.2L10.8 9.2ZM3.3 7.5L10 7.5 10 5C10 3.2 8.5 1.7 6.7 1.7 4.8 1.7 3.3 3.2 3.3 5L3.3 7.5 3.3 7.5Z"/>
                  </g>
                </svg>
              </span>
              <span className="caption">Security</span>
            </a>
          </li>
          <li className="col-sm-2">
            <a href="#productionisation">
              <span className="icon">
                <svg width="20" height="16" viewBox="0 0 20 16">
                  <g>
                    <path d="M16.9 7.7C16.5 7.4 16.2 7.1 16.2 6.9 15.9 6.2 15.8 5.6 15.4 4.6L15.4 3.1C15.8 2.5 15.7 2.3 15.4 2.3 15.4 2 15.2 1.9 14.6 1.5 14.5 1.8 14.2 1.7 13.8 1.5 13.9 1.5 13.8 1.2 13.8 0.8 13.8 0.6 13.9 0.4 13.8 0 14.3 0.1 14.5 0 14.6 0 15.3 0 15.7 0.1 16.2 0 16.4 0.3 16.7 0.5 16.9 0.8 17.2 1 17.4 1.3 17.7 1.5 17.6 2.1 17.7 2.8 17.7 3.8L17.7 4.6C17.7 5.9 18.1 6.5 19.2 6.9 19.1 6.7 19.2 6.7 19.2 6.9 19.5 6.8 19.7 6.9 20 6.9 19.9 7.2 20 7.4 20 7.7 20 8 19.9 8.2 20 8.5 19.7 8.5 19.5 8.6 19.2 8.5 19.2 8.7 19.1 8.7 19.2 8.5 18.1 8.9 17.7 9.5 17.7 10.8L17.7 11.5C17.7 12.5 17.7 13.1 17.7 13.8 17.5 13.9 17.3 14.2 16.9 14.6 16.9 14.7 16.6 14.9 16.2 15.4 15.8 15.3 15.3 15.4 14.6 15.4 14.5 15.4 14.3 15.3 13.8 15.4 13.9 15 13.8 14.7 13.8 14.6 13.8 14.1 13.9 13.9 13.8 13.8 14.2 13.6 14.5 13.5 14.6 13.8 15.2 13.4 15.5 13.3 15.4 13.1 15.7 13 15.8 12.8 15.4 12.3L15.4 10.8C15.8 9.8 15.8 9.1 16.2 8.5 16.2 8.3 16.5 8 16.9 7.7ZM3.1 7.7C3.5 8 3.8 8.3 3.8 8.5 4.2 9.1 4.2 9.8 4.6 10.8L4.6 12.3C4.2 12.6 4.3 13 4.6 13.1 4.5 13.3 4.6 13.4 4.6 13.1 5 13.5 5.1 13.5 5.4 13.8 5.8 13.6 6.2 13.9 6.2 14.6 6.2 14.7 6.1 15 6.2 15.4 5.7 15.3 5.4 15.4 5.4 15.4 4.7 15.4 4.3 15.3 3.8 15.4 3.6 15 3.3 14.9 3.1 14.6 2.8 14.4 2.6 14 2.3 13.8 2.4 13.2 2.3 12.5 2.3 11.5L2.3 10.8C2.3 9.5 1.8 8.8 0.8 8.5 0.8 8.7 0.8 8.7 0.8 8.5 0.5 8.6 0.3 8.5 0 8.5 0.1 8.2 0 8 0 7.7 0 7.4 0.1 7.2 0 6.9 0.3 6.9 0.5 6.8 0.8 6.9 0.8 6.7 1 6.7 1.5 6.9 1.9 6.5 2.3 5.9 2.3 4.6L2.3 3.8C2.3 2.9 2.3 2.3 2.3 1.5 2.5 1.6 2.7 1.2 3.1 0.8 3.1 0.7 3.4 0.4 3.8 0 4.2 0.1 4.7 0 5.4 0 5.5 0 5.7 0.1 6.2 0 6.1 0.4 6.2 0.6 6.2 0.8 6.2 1.4 5.8 1.8 5.4 1.5 5.1 1.9 5 1.9 4.6 1.5 4.7 2 4.5 2.1 4.6 2.3 4.3 2.4 4.2 2.8 4.6 3.1L4.6 4.6C4.2 5.6 4.1 6.2 3.8 6.9 3.8 7.1 3.5 7.4 3.1 7.7ZM13.1 8.5C12.7 8.5 12.3 8.1 12.3 7.7 12.3 7.3 12.7 6.9 13.1 6.9 13.5 6.9 13.8 7.3 13.8 7.7 13.8 8.1 13.5 8.5 13.1 8.5ZM10 8.5C9.6 8.5 9.2 8.1 9.2 7.7 9.2 7.3 9.6 6.9 10 6.9 10.4 6.9 10.8 7.3 10.8 7.7 10.8 8.1 10.4 8.5 10 8.5ZM6.9 8.5C6.5 8.5 6.2 8.1 6.2 7.7 6.2 7.3 6.5 6.9 6.9 6.9 7.3 6.9 7.7 7.3 7.7 7.7 7.7 8.1 7.3 8.5 6.9 8.5Z"/>
                  </g>
                </svg>
              </span>
              <span className="caption">Productionisation</span>
            </a>
          </li>
          <li className="col-sm-2">
            <a href="#collaboration">
              <span className="icon">
                <svg width="20" height="14" viewBox="0 0 20 14">
                  <g>
                    <path d="M10.9 10.5C11.4 10.7 11.7 11.1 11.8 11.7L11.8 13.5 6.9 13.5 5.9 13.5 5.9 13.5 1 13.5C0.4 13.5 0 13.1 0 12.6L0 11.7C0.1 11.1 0.4 10.7 0.8 10.5 1.2 10.3 1.7 10.1 2.1 10 2.1 10 3.4 9.6 4 9.3L4.1 9.3C4.2 9.2 4.2 9.2 4.2 9.1 4.3 9.1 4.3 9.1 4.3 9.1 4.3 9 4.3 9 4.3 8.9L4.3 8.1 4.2 8.1C4.2 8.1 4.1 8.1 4.1 8.1 4 8.1 4 8.1 3.9 8.1 3.8 8.1 3.8 8.1 3.7 8.1 3.7 8.1 3.6 8.1 3.6 8.1 3.5 8.1 3.5 8.1 3.4 8.1 3.4 8.1 3.3 8 3.3 8 3.2 8 3.2 8 3.1 8 3.1 8 3 8 3 8 2.9 8 2.9 8 2.9 8 2.8 7.9 2.8 7.9 2.7 7.9 2.7 7.9 2.7 7.9 2.6 7.9 2.6 7.9 2.6 7.9 2.5 7.8 2.5 7.8 2.5 7.8 2.4 7.8 2.4 7.8 2.4 7.8 2.3 7.8 2.3 7.8 2.3 7.7 2.2 7.7 2.2 7.7 2.2 7.7 2.2 7.7 2.1 7.7 2.1 7.7 2.1 7.6 2.1 7.6 2 7.6 2 7.6 2 7.6 2 7.6 2 7.6 1.9 7.5 1.9 7.5 1.9 7.5 1.9 7.5 1.9 7.5 1.9 7.5 1.8 7.5 1.8 7.5 1.8 7.4 1.8 7.4 1.8 7.4 1.8 7.4 1.8 7.4 1.7 7.4 1.7 7.4 1.7 7.4 1.7 7.4 1.7 7.4 1.7 7.3 1.7 7.3 1.7 7.3 1.7 7.3 1.7 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.2 1.6 7.2 1.6 7.2 2.8 7.2 2.7 4.1 2.6 0.9 4.1 0.4 4.6 0.2 4.7 0.2 4.8 0.1 4.9 0.1 5 0.1 5 0.1 5 0.1 5.1 0.1 5.1 0.1 5.2 0 5.2 0 5.3 0 5.3 0 5.3 0 5.4 0 5.4 0 5.5 0 5.5 0 5.5 0 5.6 0 5.6 0 5.6 0 5.6 0 5.6 0 5.7 0 5.8 0 5.8 0 5.9 0 6 0 6 0 6 0 6.1 0 6.1 0.1 6.2 0.1 6.2 0.1 6.2 0.1 6.2 0.1 6.3 0.1 6.4 0.1 6.5 0.2 6.5 0.2 6.5 0.2 6.5 0.2 6.6 0.2 6.6 0.2 6.7 0.3 6.7 0.3 6.7 0.3 6.7 0.3 6.7 0.3 6.8 0.3 6.8 0.4 6.8 0.4 6.8 0.4 6.8 0.4 6.9 0.4 6.9 0.4 6.9 0.5 6.9 0.5 6.9 0.5 6.9 0.5 7 0.5 7 0.5 7 0.5 7 0.5 7 0.5 7 0.5 7 0.5 7 0.6 7 0.6 7.1 0.5 7.2 0.5 7.2 0.5 7.2 0.5 7.3 0.5 7.3 0.5 7.3 0.5 7.4 0.6 7.4 0.6 7.5 0.6 7.5 0.6 7.6 0.6 7.6 0.6 7.7 0.6 7.7 0.6 7.8 0.6 7.8 0.6 7.8 0.7 7.9 0.7 7.9 0.7 8 0.7 8 0.7 8 0.7 8.1 0.8 8.1 0.8 8.2 0.8 8.2 0.8 8.2 0.9 8.3 0.9 8.3 0.9 8.3 1 8.4 1 8.4 1 8.4 1 8.5 1.1 8.5 1.1 8.5 1.1 8.5 1.2 8.6 1.2 8.6 1.3 8.6 1.3 8.7 1.3 8.7 1.4 8.7 1.4 8.7 1.5 8.7 1.5 8.8 1.6 8.8 1.6 8.8 1.6 8.8 1.7 8.9 1.7 8.9 1.8 8.9 1.8 8.9 1.9 8.9 1.9 8.9 2 9 2 9 2.1 9 2.1 9 2.2 9 2.2 9 2.3 9 2.3 9.1 2.4 9.1 2.5 9.1 2.5 9.1 2.6 9.1 2.6 9.1 2.7 9.1 2.8 9.1 2.8 9.1 2.9 9.1 2.9 9.1 3 9.1 3.1 9.1 3.1 9.2 3.2 9.2 3.3 9.2 3.3 9.2 3.4 9.2 3.4 9.2 3.5 9.2 3.6 9.2 3.7 9.2 3.7 9.2 3.8 9.2 3.8 9.2 3.9 9.2 4 9.2 4.1 9.2 4.1 9.2 4.2 9.2 4.2 9.1 4.4 9.1 4.5 9.1 4.6 8.9 6.9 10.1 7.3 10.1 7.3 10.1 7.3 10 7.4 10 7.4 10 7.4 9.9 7.4 9.9 7.5 9.9 7.5 9.8 7.5 9.8 7.5 9.8 7.6 9.7 7.6 9.7 7.6 9.7 7.6 9.6 7.6 9.6 7.7 9.6 7.7 9.6 7.7 9.5 7.7 9.5 7.7 9.4 7.7 9.4 7.8 9.4 7.8 9.3 7.8 9.3 7.8 9.3 7.8 9.2 7.8 9.2 7.8 9.2 7.8 9.1 7.9 9.1 7.9 9.1 7.9 9 7.9 9 7.9 9 7.9 8.9 7.9 8.9 7.9 8.8 7.9 8.8 7.9 8.8 8 8.7 8 8.7 8 8.7 8 8.6 8 8.6 8 8.5 8 8.5 8 8.5 8 8.5 8 8.4 8 8.3 8 8.3 8 8.3 8 8.3 8 8.2 8 8.2 8.1 8.2 8.1 8.1 8.1 8.1 8.1 8.1 8.1 8 8.1 8 8.1 8 8.1 7.9 8.1 7.9 8.1 7.9 8.1 7.9 8.1 7.9 8.1 7.8 8.1 7.8 8.1 7.8 8.1 7.8 8.1 7.7 8.1 7.7 8.1 7.7 8.1 7.7 8.1 7.7 8.1 7.6 8.1 7.6 8.1 7.6 8.1 7.6 8.1 7.6 8.1 7.6 8.1 7.6 8.1 7.5 8.1L7.5 8.1C7.5 8.1 7.5 8.1 7.5 8.1L7.5 8.1C7.5 8.1 7.5 8.1 7.5 8.1L7.5 8.9C7.5 8.9 7.5 8.9 7.5 8.9L7.5 8.9C7.5 9 7.5 9 7.5 9.1 7.5 9.1 7.5 9.1 7.5 9.1 7.6 9.2 7.6 9.2 7.7 9.3L7.7 9.3C8 9.5 8.4 9.6 8.7 9.7 9.2 9.9 9.7 10 9.7 10 10.1 10.1 10.5 10.3 10.9 10.5ZM19.5 10.7C19.8 10.9 20 11.3 20 11.7L20 12.6C20 13.1 19.6 13.5 19 13.5L13.1 13.5 13.1 13.5 13.1 11.7 13.1 11.6 13.1 11.5C13 10.6 12.4 9.7 11.5 9.3 11.3 9.2 11 9.1 10.8 9 10.6 8.9 10.5 8.6 10.7 8.5 10.8 8.4 10.9 8.3 11 8.2 11 8.2 11.1 8.2 11.1 8.2L11.3 8 11.3 6.9C11.1 6.6 11 6.4 11 6.2L10.6 6.1C10.5 6 10.4 5.7 10.4 5 10.4 4.9 10.4 4.9 10.4 4.8 10.4 4.5 10.4 4.2 10.5 3.8 10.5 3.8 10.5 3.8 10.6 3.8 10.5 3.3 10.1 1.4 11.5 0.6 11.4 0.4 11.3 0.2 11.3 0 11.3 0 12.8 0.2 13.6 0 14.4-0.1 15.2 0.5 15.3 1 15.3 1 16.9 1 16.3 3.8 16.5 3.8 16.8 4 16.5 4.9 16.3 5.6 16.1 5.8 16 5.8 15.9 6.2 15.8 6.5 15.6 6.9L15.6 8C15.6 8 18.5 9.8 19.5 10.7Z"/>
                  </g>
                </svg>
              </span>
              <span className="caption">Collaboration</span>
            </a>
          </li>
          <li className="col-sm-2">
            <a href="#applications">
              <span className="icon">
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <g>
                    <path d="M10 18.7C5.2 18.7 1.3 14.8 1.3 10 1.3 5.2 5.2 1.3 10 1.3 14.8 1.3 18.7 5.2 18.7 10 18.7 14.8 14.8 18.7 10 18.7M10 0C4.5 0 0 4.5 0 10 0 15.5 4.5 20 10 20 15.5 20 20 15.5 20 10 20 4.5 15.5 0 10 0M13 13C12.8 13.2 12.5 13.2 12.3 13 12.1 12.8 12.1 12.5 12.3 12.3 12.5 12.1 12.8 12.1 13 12.3 13.2 12.5 13.2 12.8 13 13M10 11.7C9.1 11.7 8.3 10.9 8.3 10 8.3 9.1 9.1 8.3 10 8.3 10.9 8.3 11.7 9.1 11.7 10 11.7 10.9 10.9 11.7 10 11.7M6.5 9.4C6.5 9.8 6.2 10 5.9 10 5.5 10 5.3 9.8 5.3 9.4 5.3 7.1 7.1 5.3 9.4 5.3 9.8 5.3 10 5.5 10 5.9 10 6.2 9.8 6.5 9.4 6.5 7.7 6.5 6.5 7.8 6.5 9.4M10 2.7C6 2.7 2.7 6 2.7 10 2.7 14 6 17.3 10 17.3 14 17.3 17.3 14 17.3 10 17.3 6 14 2.7 10 2.7"/>
                  </g>
                </svg>
              </span>
              <span className="caption">Applications</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="dropdown case-studies" >
      <div className = "row">
      <div className = "col-md-4">
          <div className="dropdownBody">
          <div className="row">

              <section className="case-studies-container">
                      <div className = "col-md-6">
                          <h3>Business impact</h3>
                          <div className="leftliststyle col-md-12">
                              <a className="case-study" href="/case-study/predictive-staffing">
                                  <img alt="" src="/img/homepage/case-studies/header-predictive-staffing.jpg"/>
                                  <div className="content">
                                      <span className="title">
                                          Predictive staff scheduling
                                      </span>
                                      <span className="link">
                                          Read case study<span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
                                      </span>
                                  </div>
                              </a>
                          </div>
                          <div className="leftliststyle col-md-12">
                              <a className="case-study" href="/case-study/fraud-detection">
                                  <img alt="" src="/img/homepage/case-studies/header-fraud-detection.jpg"/>
                                  <div className="content">
                                      <span className="title">
                                          Fraud detection
                                      </span>
                                      <span className="link">
                                          Read case study<span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
                                      </span>
                                  </div>
                              </a>
                          </div>
                          <div className="leftliststyle col-md-12">
                              <a className="case-study" href="/case-study/predictive-maintenance">
                                  <img alt="" src="/img/homepage/case-studies/header-predictive-maintenance.jpg"/>
                                  <div className="content">
                                      <span className="title">
                                          Predictive Maintenance
                                      </span>
                                      <span className="link">
                                          Read case study<span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
                                      </span>
                                  </div>
                              </a>
                          </div>
                      </div>
              </section>

              <section className="sherlock-in-action">
              <div className="col-md-6">
                  <h3>SherlockML in Action</h3>
                  <a href="/in-action/powerful-compute">
                      <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                              <g>
                                  <polygon points="6.5 0 12.1 3.3 12.1 9.8 6.5 13 0.9 9.8 0.9 3.3"></polygon>
                              </g>
                          </svg>
                      </span>
                      <span className="title">Powerful Compute</span>
                  </a>
                  <a href="/in-action/fast-configuration">
                      <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                              <g>
                                  <path d="M0 1.8C0 0.8 0.8 0 1.8 0L3.7 0 3.7 3.7 0 3.7 0 1.8ZM6.2 0L9.8 0 9.8 3.7 6.2 3.7 6.2 0ZM12.3 0L14.2 0C15.2 0 16 0.8 16 1.8L16 3.7 12.3 3.7 12.3 0ZM0 6.2L3.7 6.2 3.7 9.8 0 9.8 0 6.2ZM6.2 6.2L9.8 6.2 9.8 9.8 6.2 9.8 6.2 6.2ZM12.3 6.2L16 6.2 16 9.8 12.3 9.8 12.3 6.2ZM0 12.3L3.7 12.3 3.7 16 1.8 16C0.8 16 0 15.2 0 14.2L0 12.3ZM6.2 12.3L9.8 12.3 9.8 16 6.2 16 6.2 12.3ZM12.3 12.3L16 12.3 16 14.2C16 15.2 15.2 16 14.2 16L12.3 16 12.3 12.3Z"></path>
                              </g>
                          </svg>
                      </span>
                      <span className="title">Fast Configuration</span>
                  </a>
                  <a href="/in-action/secure-collaboration">
                      <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14">
                              <g>
                                  <path d="M10.9 10.5C11.4 10.7 11.7 11.1 11.8 11.7L11.8 13.5 6.9 13.5 5.9 13.5 5.9 13.5 1 13.5C0.4 13.5 0 13.1 0 12.6L0 11.7C0.1 11.1 0.4 10.7 0.8 10.5 1.2 10.3 1.7 10.1 2.1 10 2.1 10 3.4 9.6 4 9.3L4.1 9.3C4.2 9.2 4.2 9.2 4.2 9.1 4.3 9.1 4.3 9.1 4.3 9.1 4.3 9 4.3 9 4.3 8.9L4.3 8.1 4.2 8.1C4.2 8.1 4.1 8.1 4.1 8.1 4 8.1 4 8.1 3.9 8.1 3.8 8.1 3.8 8.1 3.7 8.1 3.7 8.1 3.6 8.1 3.6 8.1 3.5 8.1 3.5 8.1 3.4 8.1 3.4 8.1 3.3 8 3.3 8 3.2 8 3.2 8 3.1 8 3.1 8 3 8 3 8 2.9 8 2.9 8 2.9 8 2.8 7.9 2.8 7.9 2.7 7.9 2.7 7.9 2.7 7.9 2.6 7.9 2.6 7.9 2.6 7.9 2.5 7.8 2.5 7.8 2.5 7.8 2.4 7.8 2.4 7.8 2.4 7.8 2.3 7.8 2.3 7.8 2.3 7.7 2.2 7.7 2.2 7.7 2.2 7.7 2.2 7.7 2.1 7.7 2.1 7.7 2.1 7.6 2.1 7.6 2 7.6 2 7.6 2 7.6 2 7.6 2 7.6 1.9 7.5 1.9 7.5 1.9 7.5 1.9 7.5 1.9 7.5 1.9 7.5 1.8 7.5 1.8 7.5 1.8 7.4 1.8 7.4 1.8 7.4 1.8 7.4 1.8 7.4 1.7 7.4 1.7 7.4 1.7 7.4 1.7 7.4 1.7 7.4 1.7 7.3 1.7 7.3 1.7 7.3 1.7 7.3 1.7 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.2 1.6 7.2 1.6 7.2 2.8 7.2 2.7 4.1 2.6 0.9 4.1 0.4 4.6 0.2 4.7 0.2 4.8 0.1 4.9 0.1 5 0.1 5 0.1 5 0.1 5.1 0.1 5.1 0.1 5.2 0 5.2 0 5.3 0 5.3 0 5.3 0 5.4 0 5.4 0 5.5 0 5.5 0 5.5 0 5.6 0 5.6 0 5.6 0 5.6 0 5.6 0 5.7 0 5.8 0 5.8 0 5.9 0 6 0 6 0 6 0 6.1 0 6.1 0.1 6.2 0.1 6.2 0.1 6.2 0.1 6.2 0.1 6.3 0.1 6.4 0.1 6.5 0.2 6.5 0.2 6.5 0.2 6.5 0.2 6.6 0.2 6.6 0.2 6.7 0.3 6.7 0.3 6.7 0.3 6.7 0.3 6.7 0.3 6.8 0.3 6.8 0.4 6.8 0.4 6.8 0.4 6.8 0.4 6.9 0.4 6.9 0.4 6.9 0.5 6.9 0.5 6.9 0.5 6.9 0.5 7 0.5 7 0.5 7 0.5 7 0.5 7 0.5 7 0.5 7 0.5 7 0.6 7 0.6 7.1 0.5 7.2 0.5 7.2 0.5 7.2 0.5 7.3 0.5 7.3 0.5 7.3 0.5 7.4 0.6 7.4 0.6 7.5 0.6 7.5 0.6 7.6 0.6 7.6 0.6 7.7 0.6 7.7 0.6 7.8 0.6 7.8 0.6 7.8 0.7 7.9 0.7 7.9 0.7 8 0.7 8 0.7 8 0.7 8.1 0.8 8.1 0.8 8.2 0.8 8.2 0.8 8.2 0.9 8.3 0.9 8.3 0.9 8.3 1 8.4 1 8.4 1 8.4 1 8.5 1.1 8.5 1.1 8.5 1.1 8.5 1.2 8.6 1.2 8.6 1.3 8.6 1.3 8.7 1.3 8.7 1.4 8.7 1.4 8.7 1.5 8.7 1.5 8.8 1.6 8.8 1.6 8.8 1.6 8.8 1.7 8.9 1.7 8.9 1.8 8.9 1.8 8.9 1.9 8.9 1.9 8.9 2 9 2 9 2.1 9 2.1 9 2.2 9 2.2 9 2.3 9 2.3 9.1 2.4 9.1 2.5 9.1 2.5 9.1 2.6 9.1 2.6 9.1 2.7 9.1 2.8 9.1 2.8 9.1 2.9 9.1 2.9 9.1 3 9.1 3.1 9.1 3.1 9.2 3.2 9.2 3.3 9.2 3.3 9.2 3.4 9.2 3.4 9.2 3.5 9.2 3.6 9.2 3.7 9.2 3.7 9.2 3.8 9.2 3.8 9.2 3.9 9.2 4 9.2 4.1 9.2 4.1 9.2 4.2 9.2 4.2 9.1 4.4 9.1 4.5 9.1 4.6 8.9 6.9 10.1 7.3 10.1 7.3 10.1 7.3 10 7.4 10 7.4 10 7.4 9.9 7.4 9.9 7.5 9.9 7.5 9.8 7.5 9.8 7.5 9.8 7.6 9.7 7.6 9.7 7.6 9.7 7.6 9.6 7.6 9.6 7.7 9.6 7.7 9.6 7.7 9.5 7.7 9.5 7.7 9.4 7.7 9.4 7.8 9.4 7.8 9.3 7.8 9.3 7.8 9.3 7.8 9.2 7.8 9.2 7.8 9.2 7.8 9.1 7.9 9.1 7.9 9.1 7.9 9 7.9 9 7.9 9 7.9 8.9 7.9 8.9 7.9 8.8 7.9 8.8 7.9 8.8 8 8.7 8 8.7 8 8.7 8 8.6 8 8.6 8 8.5 8 8.5 8 8.5 8 8.5 8 8.4 8 8.3 8 8.3 8 8.3 8 8.3 8 8.2 8 8.2 8.1 8.2 8.1 8.1 8.1 8.1 8.1 8.1 8.1 8 8.1 8 8.1 8 8.1 7.9 8.1 7.9 8.1 7.9 8.1 7.9 8.1 7.9 8.1 7.8 8.1 7.8 8.1 7.8 8.1 7.8 8.1 7.7 8.1 7.7 8.1 7.7 8.1 7.7 8.1 7.7 8.1 7.6 8.1 7.6 8.1 7.6 8.1 7.6 8.1 7.6 8.1 7.6 8.1 7.6 8.1 7.5 8.1L7.5 8.1C7.5 8.1 7.5 8.1 7.5 8.1L7.5 8.1C7.5 8.1 7.5 8.1 7.5 8.1L7.5 8.9C7.5 8.9 7.5 8.9 7.5 8.9L7.5 8.9C7.5 9 7.5 9 7.5 9.1 7.5 9.1 7.5 9.1 7.5 9.1 7.6 9.2 7.6 9.2 7.7 9.3L7.7 9.3C8 9.5 8.4 9.6 8.7 9.7 9.2 9.9 9.7 10 9.7 10 10.1 10.1 10.5 10.3 10.9 10.5ZM19.5 10.7C19.8 10.9 20 11.3 20 11.7L20 12.6C20 13.1 19.6 13.5 19 13.5L13.1 13.5 13.1 13.5 13.1 11.7 13.1 11.6 13.1 11.5C13 10.6 12.4 9.7 11.5 9.3 11.3 9.2 11 9.1 10.8 9 10.6 8.9 10.5 8.6 10.7 8.5 10.8 8.4 10.9 8.3 11 8.2 11 8.2 11.1 8.2 11.1 8.2L11.3 8 11.3 6.9C11.1 6.6 11 6.4 11 6.2L10.6 6.1C10.5 6 10.4 5.7 10.4 5 10.4 4.9 10.4 4.9 10.4 4.8 10.4 4.5 10.4 4.2 10.5 3.8 10.5 3.8 10.5 3.8 10.6 3.8 10.5 3.3 10.1 1.4 11.5 0.6 11.4 0.4 11.3 0.2 11.3 0 11.3 0 12.8 0.2 13.6 0 14.4-0.1 15.2 0.5 15.3 1 15.3 1 16.9 1 16.3 3.8 16.5 3.8 16.8 4 16.5 4.9 16.3 5.6 16.1 5.8 16 5.8 15.9 6.2 15.8 6.5 15.6 6.9L15.6 8C15.6 8 18.5 9.8 19.5 10.7Z"></path>
                              </g>
                          </svg>
                      </span>
                      <span className="title">Secure Collaboration</span>
                  </a>
                  <a href="/in-action/easy-deployment">
                      <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16">
                              <g>
                                  <path d="M16.9 7.7C16.5 7.4 16.2 7.1 16.2 6.9 15.9 6.2 15.8 5.6 15.4 4.6L15.4 3.1C15.8 2.5 15.7 2.3 15.4 2.3 15.4 2 15.2 1.9 14.6 1.5 14.5 1.8 14.2 1.7 13.8 1.5 13.9 1.5 13.8 1.2 13.8 0.8 13.8 0.6 13.9 0.4 13.8 0 14.3 0.1 14.5 0 14.6 0 15.3 0 15.7 0.1 16.2 0 16.4 0.3 16.7 0.5 16.9 0.8 17.2 1 17.4 1.3 17.7 1.5 17.6 2.1 17.7 2.8 17.7 3.8L17.7 4.6C17.7 5.9 18.1 6.5 19.2 6.9 19.1 6.7 19.2 6.7 19.2 6.9 19.5 6.8 19.7 6.9 20 6.9 19.9 7.2 20 7.4 20 7.7 20 8 19.9 8.2 20 8.5 19.7 8.5 19.5 8.6 19.2 8.5 19.2 8.7 19.1 8.7 19.2 8.5 18.1 8.9 17.7 9.5 17.7 10.8L17.7 11.5C17.7 12.5 17.7 13.1 17.7 13.8 17.5 13.9 17.3 14.2 16.9 14.6 16.9 14.7 16.6 14.9 16.2 15.4 15.8 15.3 15.3 15.4 14.6 15.4 14.5 15.4 14.3 15.3 13.8 15.4 13.9 15 13.8 14.7 13.8 14.6 13.8 14.1 13.9 13.9 13.8 13.8 14.2 13.6 14.5 13.5 14.6 13.8 15.2 13.4 15.5 13.3 15.4 13.1 15.7 13 15.8 12.8 15.4 12.3L15.4 10.8C15.8 9.8 15.8 9.1 16.2 8.5 16.2 8.3 16.5 8 16.9 7.7ZM3.1 7.7C3.5 8 3.8 8.3 3.8 8.5 4.2 9.1 4.2 9.8 4.6 10.8L4.6 12.3C4.2 12.6 4.3 13 4.6 13.1 4.5 13.3 4.6 13.4 4.6 13.1 5 13.5 5.1 13.5 5.4 13.8 5.8 13.6 6.2 13.9 6.2 14.6 6.2 14.7 6.1 15 6.2 15.4 5.7 15.3 5.4 15.4 5.4 15.4 4.7 15.4 4.3 15.3 3.8 15.4 3.6 15 3.3 14.9 3.1 14.6 2.8 14.4 2.6 14 2.3 13.8 2.4 13.2 2.3 12.5 2.3 11.5L2.3 10.8C2.3 9.5 1.8 8.8 0.8 8.5 0.8 8.7 0.8 8.7 0.8 8.5 0.5 8.6 0.3 8.5 0 8.5 0.1 8.2 0 8 0 7.7 0 7.4 0.1 7.2 0 6.9 0.3 6.9 0.5 6.8 0.8 6.9 0.8 6.7 1 6.7 1.5 6.9 1.9 6.5 2.3 5.9 2.3 4.6L2.3 3.8C2.3 2.9 2.3 2.3 2.3 1.5 2.5 1.6 2.7 1.2 3.1 0.8 3.1 0.7 3.4 0.4 3.8 0 4.2 0.1 4.7 0 5.4 0 5.5 0 5.7 0.1 6.2 0 6.1 0.4 6.2 0.6 6.2 0.8 6.2 1.4 5.8 1.8 5.4 1.5 5.1 1.9 5 1.9 4.6 1.5 4.7 2 4.5 2.1 4.6 2.3 4.3 2.4 4.2 2.8 4.6 3.1L4.6 4.6C4.2 5.6 4.1 6.2 3.8 6.9 3.8 7.1 3.5 7.4 3.1 7.7ZM13.1 8.5C12.7 8.5 12.3 8.1 12.3 7.7 12.3 7.3 12.7 6.9 13.1 6.9 13.5 6.9 13.8 7.3 13.8 7.7 13.8 8.1 13.5 8.5 13.1 8.5ZM10 8.5C9.6 8.5 9.2 8.1 9.2 7.7 9.2 7.3 9.6 6.9 10 6.9 10.4 6.9 10.8 7.3 10.8 7.7 10.8 8.1 10.4 8.5 10 8.5ZM6.9 8.5C6.5 8.5 6.2 8.1 6.2 7.7 6.2 7.3 6.5 6.9 6.9 6.9 7.3 6.9 7.7 7.3 7.7 7.7 7.7 8.1 7.3 8.5 6.9 8.5Z"></path>
                              </g>
                          </svg>
                      </span>
                      <span className="title">Easy Deployment</span>
                  </a>
                  </div>
              </section>
              </div>
          </div>
          <div className="dropdownFooter">
              <span>
                  Interested in <b>SherlockML</b>
                  ?
              </span>
              <a className="btn green" href="/demo">Start your Free Trial</a>
          </div>
          </div>
          </div>
      </div>
  </header>
  <div className="wrapper">
    <section className="feature text-block" id="environments">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-10 col-lg-offset-1">
            <header>
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <g>
                    <path d="M0 1.8C0 0.8 0.8 0 1.8 0L3.7 0 3.7 3.7 0 3.7 0 1.8ZM6.2 0L9.8 0 9.8 3.7 6.2 3.7 6.2 0ZM12.3 0L14.2 0C15.2 0 16 0.8 16 1.8L16 3.7 12.3 3.7 12.3 0ZM0 6.2L3.7 6.2 3.7 9.8 0 9.8 0 6.2ZM6.2 6.2L9.8 6.2 9.8 9.8 6.2 9.8 6.2 6.2ZM12.3 6.2L16 6.2 16 9.8 12.3 9.8 12.3 6.2ZM0 12.3L3.7 12.3 3.7 16 1.8 16C0.8 16 0 15.2 0 14.2L0 12.3ZM6.2 12.3L9.8 12.3 9.8 16 6.2 16 6.2 12.3ZM12.3 12.3L16 12.3 16 14.2C16 15.2 15.2 16 14.2 16L12.3 16 12.3 12.3Z"/>
                  </g>
                </svg>
              </div>
              <h1>Environments</h1>
              <p className="col-md-6 col-md-offset-3">SherlockML offers a powerful and secure cloud environment for accessing and manipulating enormous amounts of data, designing and testing AI models, and deploying those models to be used in live business environments.</p>
            </header>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="built-with">
              <h2>Use your favourite Open Source tools</h2>
              <ul>
                <li>Jupyter</li>
                <li>RStudio</li>
                <li>TensorFlow</li>
                <li>Keras</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="macbook">
        <div className="mask">
          <img className="img-jupyter" src="/img/homepage/features/screenshots/jupyter.jpg" alt="Jupyter"/>
          <img className="img-rstudio" src="/img/homepage/features/screenshots/rstudio.jpg" alt="RStudio"/>
        </div>
      </div>
      <div className="highlight-icons container">
        <div className="row">
          <div className="col-md-2 col-sm-3 col-xs-6 col-md-offset-2">
            <span className="icon">
              <img alt="" src="/img/homepage/features/icons/terminal.svg"/>
            </span>
            <span className="text">Full Linux terminal</span>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-6">
            <span className="icon">
              <img alt="" src="/img/homepage/features/icons/anaconda.svg"/>
            </span>
            <span className="text">Pre-installed with Anaconda and scientific stack</span>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-6">
            <span className="icon">
              <img alt="" src="/img/homepage/features/icons/browser.svg"/>
            </span>
            <span className="text">Work in browser or locally via SSHFS</span>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-6">
            <span className="icon">
              <img alt="" src="/img/homepage/features/icons/shareable-envs.svg"/>
            </span>
            <span className="text">Shareable environments</span>
          </div>
        </div>
      </div>
    </section>
    <section className="feature text-block" id="data-management">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-10 col-lg-offset-1">
            <header>
              <div className="icon">
                <svg width="16" height="20" viewBox="0 0 16 20">
                  <g>
                    <path d="M14.5 0C15.3 0 16 0.7 16 1.6L16 13.5C16 14.3 15.4 15 14.7 15.1L14.7 4.1C14.7 3.5 14.5 3 14.2 2.6 14.1 2.4 14 2.3 13.9 2.2 13.8 2.1 13.7 2 13.5 1.9 13.1 1.6 12.6 1.4 12.1 1.4L4.7 1.4C4.8 0.6 5.5 0 6.2 0L14.5 0ZM12.1 2.5C13 2.5 13.7 3.2 13.7 4.1 13.7 4.1 13.6 16.1 13.6 16.1 13.5 16.9 13 17.4 12.3 17.5L12.3 6.5C12.3 5.1 11.2 3.9 9.8 3.9L2.4 3.9C2.5 3.1 3 2.6 3.7 2.5 3.8 2.5 12.1 2.5 12.1 2.5ZM9.8 4.9C10.6 4.9 11.3 5.6 11.3 6.5 11.3 6.5 11.3 18.5 11.3 18.6 11.2 19.4 10.5 20 9.8 20L1.5 20C0.7 20 0 19.3 0 18.4L0 6.5C0 5.7 0.6 5 1.3 4.9 1.4 4.9 9.8 4.9 9.8 4.9Z"/>
                  </g>
                </svg>
              </div>
              <h1>Data Management</h1>
            </header>
          </div>
        </div>
        <div className="row feature-selector">
          <ul className="col-sm-5">
            <li>
              <a className="active">
                <h3>Lens</h3>
                <p>Automatically assess data quality and explore your data. Lens can fix common data format errors, infer column types, and calculate and visualise correlations between features. You can explore the results through a web UI or directly in a Jupyter Notebook.</p>
              </a>
            </li>
            <li>
              <a>
                <h3>Unlimited Data Storage</h3>
                <p>Never have to worry about data storage. With the elasticity of the cloud, SherlockML is capable of handling petabyte scale datasets.</p>
              </a>
            </li>
            <li>
              <a>
                <h3>Data and Code Version Control</h3>
                <p>With data and code versioning, SherlockML allows the creation of a fully reproducible data processing pipeline.</p>
              </a>
            </li>
          </ul>
          <div className="col-sm-7 col-xs-12">
            <img alt="" src="/img/homepage/features/screenshots/datasets-lens.png" width="704"/>
            <img alt="" src="/img/homepage/features/screenshots/datasets-files.png" width="704"/>
            <img alt="" src="/img/homepage/features/screenshots/datasets-versions.png" width="704"/>
          </div>
        </div>
      </div>
    </section>
    <section className="feature text-block" id="security">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-10 col-lg-offset-1">
            <header>
              <div className="icon">
                <svg width="14" height="20" viewBox="0 0 14 20">
                  <g>
                    <path d="M5.8 13.9L5.8 15.8C5.8 16.3 6.2 16.7 6.7 16.7 7.2 16.7 7.5 16.3 7.5 15.8L7.5 13.9C8 13.7 8.3 13.1 8.3 12.5 8.3 11.6 7.6 10.8 6.7 10.8 5.7 10.8 5 11.6 5 12.5 5 13.1 5.3 13.7 5.8 13.9ZM10 20L3.3 20C1.5 20 0 18.5 0 16.7L0 10.8C0 9 1.5 7.5 3.3 7.5L10 7.5C11.8 7.5 13.3 9 13.3 10.8L13.3 16.7C13.3 18.5 11.8 20 10 20Z"/>
                    <path d="M10.8 9.2L2.5 9.2C2 9.2 1.7 8.8 1.7 8.3L1.7 5C1.7 2.3 3.9 0 6.7 0 9.5 0 11.7 2.3 11.7 5L11.7 8.3C11.7 8.8 11.3 9.2 10.8 9.2L10.8 9.2ZM3.3 7.5L10 7.5 10 5C10 3.2 8.5 1.7 6.7 1.7 4.8 1.7 3.3 3.2 3.3 5L3.3 7.5 3.3 7.5Z"/>
                  </g>
                </svg>
              </div>
              <h1>Security</h1>
              <p className="col-md-6 col-md-offset-3">Data security has been built as an integral part of each component within SherlockML.</p>
            </header>
          </div>
        </div>
        <div className="row highlight-icons">
          <div className="col-md-2 col-sm-3 col-xs-6 col-md-offset-2">
            <span className="icon">
              <img alt="" src="/img/homepage/features/icons/audit.svg"/>
            </span>
            <span className="text">Full access audit</span>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-6">
            <span className="icon">
              <img alt="" src="/img/homepage/features/icons/permissions.svg"/>
            </span>
            <span className="text">User access controls</span>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-6">
            <span className="icon">
              <img alt="" src="/img/homepage/features/icons/crest.svg"/>
            </span>
            <span className="text">CREST-certified security assessment</span>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-6">
            <span className="icon">
              <img alt="" src="/img/homepage/features/icons/government.svg"/>
            </span>
            <span className="text">Approved for usage within Government</span>
          </div>
        </div>
      </div>
    </section>
    <section className="feature text-block" id="productionisation">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-10 col-lg-offset-1">
            <header>
              <div className="icon">
                <svg width="20" height="16" viewBox="0 0 20 16">
                  <g>
                    <path d="M16.9 7.7C16.5 7.4 16.2 7.1 16.2 6.9 15.9 6.2 15.8 5.6 15.4 4.6L15.4 3.1C15.8 2.5 15.7 2.3 15.4 2.3 15.4 2 15.2 1.9 14.6 1.5 14.5 1.8 14.2 1.7 13.8 1.5 13.9 1.5 13.8 1.2 13.8 0.8 13.8 0.6 13.9 0.4 13.8 0 14.3 0.1 14.5 0 14.6 0 15.3 0 15.7 0.1 16.2 0 16.4 0.3 16.7 0.5 16.9 0.8 17.2 1 17.4 1.3 17.7 1.5 17.6 2.1 17.7 2.8 17.7 3.8L17.7 4.6C17.7 5.9 18.1 6.5 19.2 6.9 19.1 6.7 19.2 6.7 19.2 6.9 19.5 6.8 19.7 6.9 20 6.9 19.9 7.2 20 7.4 20 7.7 20 8 19.9 8.2 20 8.5 19.7 8.5 19.5 8.6 19.2 8.5 19.2 8.7 19.1 8.7 19.2 8.5 18.1 8.9 17.7 9.5 17.7 10.8L17.7 11.5C17.7 12.5 17.7 13.1 17.7 13.8 17.5 13.9 17.3 14.2 16.9 14.6 16.9 14.7 16.6 14.9 16.2 15.4 15.8 15.3 15.3 15.4 14.6 15.4 14.5 15.4 14.3 15.3 13.8 15.4 13.9 15 13.8 14.7 13.8 14.6 13.8 14.1 13.9 13.9 13.8 13.8 14.2 13.6 14.5 13.5 14.6 13.8 15.2 13.4 15.5 13.3 15.4 13.1 15.7 13 15.8 12.8 15.4 12.3L15.4 10.8C15.8 9.8 15.8 9.1 16.2 8.5 16.2 8.3 16.5 8 16.9 7.7ZM3.1 7.7C3.5 8 3.8 8.3 3.8 8.5 4.2 9.1 4.2 9.8 4.6 10.8L4.6 12.3C4.2 12.6 4.3 13 4.6 13.1 4.5 13.3 4.6 13.4 4.6 13.1 5 13.5 5.1 13.5 5.4 13.8 5.8 13.6 6.2 13.9 6.2 14.6 6.2 14.7 6.1 15 6.2 15.4 5.7 15.3 5.4 15.4 5.4 15.4 4.7 15.4 4.3 15.3 3.8 15.4 3.6 15 3.3 14.9 3.1 14.6 2.8 14.4 2.6 14 2.3 13.8 2.4 13.2 2.3 12.5 2.3 11.5L2.3 10.8C2.3 9.5 1.8 8.8 0.8 8.5 0.8 8.7 0.8 8.7 0.8 8.5 0.5 8.6 0.3 8.5 0 8.5 0.1 8.2 0 8 0 7.7 0 7.4 0.1 7.2 0 6.9 0.3 6.9 0.5 6.8 0.8 6.9 0.8 6.7 1 6.7 1.5 6.9 1.9 6.5 2.3 5.9 2.3 4.6L2.3 3.8C2.3 2.9 2.3 2.3 2.3 1.5 2.5 1.6 2.7 1.2 3.1 0.8 3.1 0.7 3.4 0.4 3.8 0 4.2 0.1 4.7 0 5.4 0 5.5 0 5.7 0.1 6.2 0 6.1 0.4 6.2 0.6 6.2 0.8 6.2 1.4 5.8 1.8 5.4 1.5 5.1 1.9 5 1.9 4.6 1.5 4.7 2 4.5 2.1 4.6 2.3 4.3 2.4 4.2 2.8 4.6 3.1L4.6 4.6C4.2 5.6 4.1 6.2 3.8 6.9 3.8 7.1 3.5 7.4 3.1 7.7ZM13.1 8.5C12.7 8.5 12.3 8.1 12.3 7.7 12.3 7.3 12.7 6.9 13.1 6.9 13.5 6.9 13.8 7.3 13.8 7.7 13.8 8.1 13.5 8.5 13.1 8.5ZM10 8.5C9.6 8.5 9.2 8.1 9.2 7.7 9.2 7.3 9.6 6.9 10 6.9 10.4 6.9 10.8 7.3 10.8 7.7 10.8 8.1 10.4 8.5 10 8.5ZM6.9 8.5C6.5 8.5 6.2 8.1 6.2 7.7 6.2 7.3 6.5 6.9 6.9 6.9 7.3 6.9 7.7 7.3 7.7 7.7 7.7 8.1 7.3 8.5 6.9 8.5Z"/>
                  </g>
                </svg>
              </div>
              <h1>Productionisation</h1>
            </header>
          </div>
        </div>
        <div className="row feature-selector">
          <ul className="col-sm-5 col-sm-push-7">
            <li>
              <a className="active">
                <h3>APIs</h3>
                <p>Deploy models and code in a single click and never worry about scaling your application.</p>
              </a>
            </li>
            <li>
              <a>
                <h3>Reports</h3>
                <p>Publish and share beautiful reports directly from SherlockML without having to leave your workflow.</p>
              </a>
            </li>
            <li>
              <a>
                <h3>Connect to production data stores</h3>
                <p>Ingest data from production databases such as PostgreSQL, SQL Server, or Redshift as well as processing data in real-time.</p>
              </a>
            </li>
          </ul>
          <div className="col-sm-7 col-xs-12 col-sm-pull-5">
            <img alt="" src="/img/homepage/features/screenshots/apis.jpg" width="704"/>
            <img alt="" src="/img/homepage/features/screenshots/reports.jpg" width="704"/>
            <div className="integration">
              <img alt="" src="/img/homepage/features/logos-integration.png" width="100%"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="feature text-block" id="collaboration">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-10 col-lg-offset-1">
            <header>
              <div className="icon">
                <svg width="20" height="14" viewBox="0 0 20 14">
                  <g>
                    <path d="M10.9 10.5C11.4 10.7 11.7 11.1 11.8 11.7L11.8 13.5 6.9 13.5 5.9 13.5 5.9 13.5 1 13.5C0.4 13.5 0 13.1 0 12.6L0 11.7C0.1 11.1 0.4 10.7 0.8 10.5 1.2 10.3 1.7 10.1 2.1 10 2.1 10 3.4 9.6 4 9.3L4.1 9.3C4.2 9.2 4.2 9.2 4.2 9.1 4.3 9.1 4.3 9.1 4.3 9.1 4.3 9 4.3 9 4.3 8.9L4.3 8.1 4.2 8.1C4.2 8.1 4.1 8.1 4.1 8.1 4 8.1 4 8.1 3.9 8.1 3.8 8.1 3.8 8.1 3.7 8.1 3.7 8.1 3.6 8.1 3.6 8.1 3.5 8.1 3.5 8.1 3.4 8.1 3.4 8.1 3.3 8 3.3 8 3.2 8 3.2 8 3.1 8 3.1 8 3 8 3 8 2.9 8 2.9 8 2.9 8 2.8 7.9 2.8 7.9 2.7 7.9 2.7 7.9 2.7 7.9 2.6 7.9 2.6 7.9 2.6 7.9 2.5 7.8 2.5 7.8 2.5 7.8 2.4 7.8 2.4 7.8 2.4 7.8 2.3 7.8 2.3 7.8 2.3 7.7 2.2 7.7 2.2 7.7 2.2 7.7 2.2 7.7 2.1 7.7 2.1 7.7 2.1 7.6 2.1 7.6 2 7.6 2 7.6 2 7.6 2 7.6 2 7.6 1.9 7.5 1.9 7.5 1.9 7.5 1.9 7.5 1.9 7.5 1.9 7.5 1.8 7.5 1.8 7.5 1.8 7.4 1.8 7.4 1.8 7.4 1.8 7.4 1.8 7.4 1.7 7.4 1.7 7.4 1.7 7.4 1.7 7.4 1.7 7.4 1.7 7.3 1.7 7.3 1.7 7.3 1.7 7.3 1.7 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.3 1.6 7.2 1.6 7.2 1.6 7.2 2.8 7.2 2.7 4.1 2.6 0.9 4.1 0.4 4.6 0.2 4.7 0.2 4.8 0.1 4.9 0.1 5 0.1 5 0.1 5 0.1 5.1 0.1 5.1 0.1 5.2 0 5.2 0 5.3 0 5.3 0 5.3 0 5.4 0 5.4 0 5.5 0 5.5 0 5.5 0 5.6 0 5.6 0 5.6 0 5.6 0 5.6 0 5.7 0 5.8 0 5.8 0 5.9 0 6 0 6 0 6 0 6.1 0 6.1 0.1 6.2 0.1 6.2 0.1 6.2 0.1 6.2 0.1 6.3 0.1 6.4 0.1 6.5 0.2 6.5 0.2 6.5 0.2 6.5 0.2 6.6 0.2 6.6 0.2 6.7 0.3 6.7 0.3 6.7 0.3 6.7 0.3 6.7 0.3 6.8 0.3 6.8 0.4 6.8 0.4 6.8 0.4 6.8 0.4 6.9 0.4 6.9 0.4 6.9 0.5 6.9 0.5 6.9 0.5 6.9 0.5 7 0.5 7 0.5 7 0.5 7 0.5 7 0.5 7 0.5 7 0.5 7 0.6 7 0.6 7.1 0.5 7.2 0.5 7.2 0.5 7.2 0.5 7.3 0.5 7.3 0.5 7.3 0.5 7.4 0.6 7.4 0.6 7.5 0.6 7.5 0.6 7.6 0.6 7.6 0.6 7.7 0.6 7.7 0.6 7.8 0.6 7.8 0.6 7.8 0.7 7.9 0.7 7.9 0.7 8 0.7 8 0.7 8 0.7 8.1 0.8 8.1 0.8 8.2 0.8 8.2 0.8 8.2 0.9 8.3 0.9 8.3 0.9 8.3 1 8.4 1 8.4 1 8.4 1 8.5 1.1 8.5 1.1 8.5 1.1 8.5 1.2 8.6 1.2 8.6 1.3 8.6 1.3 8.7 1.3 8.7 1.4 8.7 1.4 8.7 1.5 8.7 1.5 8.8 1.6 8.8 1.6 8.8 1.6 8.8 1.7 8.9 1.7 8.9 1.8 8.9 1.8 8.9 1.9 8.9 1.9 8.9 2 9 2 9 2.1 9 2.1 9 2.2 9 2.2 9 2.3 9 2.3 9.1 2.4 9.1 2.5 9.1 2.5 9.1 2.6 9.1 2.6 9.1 2.7 9.1 2.8 9.1 2.8 9.1 2.9 9.1 2.9 9.1 3 9.1 3.1 9.1 3.1 9.2 3.2 9.2 3.3 9.2 3.3 9.2 3.4 9.2 3.4 9.2 3.5 9.2 3.6 9.2 3.7 9.2 3.7 9.2 3.8 9.2 3.8 9.2 3.9 9.2 4 9.2 4.1 9.2 4.1 9.2 4.2 9.2 4.2 9.1 4.4 9.1 4.5 9.1 4.6 8.9 6.9 10.1 7.3 10.1 7.3 10.1 7.3 10 7.4 10 7.4 10 7.4 9.9 7.4 9.9 7.5 9.9 7.5 9.8 7.5 9.8 7.5 9.8 7.6 9.7 7.6 9.7 7.6 9.7 7.6 9.6 7.6 9.6 7.7 9.6 7.7 9.6 7.7 9.5 7.7 9.5 7.7 9.4 7.7 9.4 7.8 9.4 7.8 9.3 7.8 9.3 7.8 9.3 7.8 9.2 7.8 9.2 7.8 9.2 7.8 9.1 7.9 9.1 7.9 9.1 7.9 9 7.9 9 7.9 9 7.9 8.9 7.9 8.9 7.9 8.8 7.9 8.8 7.9 8.8 8 8.7 8 8.7 8 8.7 8 8.6 8 8.6 8 8.5 8 8.5 8 8.5 8 8.5 8 8.4 8 8.3 8 8.3 8 8.3 8 8.3 8 8.2 8 8.2 8.1 8.2 8.1 8.1 8.1 8.1 8.1 8.1 8.1 8 8.1 8 8.1 8 8.1 7.9 8.1 7.9 8.1 7.9 8.1 7.9 8.1 7.9 8.1 7.8 8.1 7.8 8.1 7.8 8.1 7.8 8.1 7.7 8.1 7.7 8.1 7.7 8.1 7.7 8.1 7.7 8.1 7.6 8.1 7.6 8.1 7.6 8.1 7.6 8.1 7.6 8.1 7.6 8.1 7.6 8.1 7.5 8.1L7.5 8.1C7.5 8.1 7.5 8.1 7.5 8.1L7.5 8.1C7.5 8.1 7.5 8.1 7.5 8.1L7.5 8.9C7.5 8.9 7.5 8.9 7.5 8.9L7.5 8.9C7.5 9 7.5 9 7.5 9.1 7.5 9.1 7.5 9.1 7.5 9.1 7.6 9.2 7.6 9.2 7.7 9.3L7.7 9.3C8 9.5 8.4 9.6 8.7 9.7 9.2 9.9 9.7 10 9.7 10 10.1 10.1 10.5 10.3 10.9 10.5ZM19.5 10.7C19.8 10.9 20 11.3 20 11.7L20 12.6C20 13.1 19.6 13.5 19 13.5L13.1 13.5 13.1 13.5 13.1 11.7 13.1 11.6 13.1 11.5C13 10.6 12.4 9.7 11.5 9.3 11.3 9.2 11 9.1 10.8 9 10.6 8.9 10.5 8.6 10.7 8.5 10.8 8.4 10.9 8.3 11 8.2 11 8.2 11.1 8.2 11.1 8.2L11.3 8 11.3 6.9C11.1 6.6 11 6.4 11 6.2L10.6 6.1C10.5 6 10.4 5.7 10.4 5 10.4 4.9 10.4 4.9 10.4 4.8 10.4 4.5 10.4 4.2 10.5 3.8 10.5 3.8 10.5 3.8 10.6 3.8 10.5 3.3 10.1 1.4 11.5 0.6 11.4 0.4 11.3 0.2 11.3 0 11.3 0 12.8 0.2 13.6 0 14.4-0.1 15.2 0.5 15.3 1 15.3 1 16.9 1 16.3 3.8 16.5 3.8 16.8 4 16.5 4.9 16.3 5.6 16.1 5.8 16 5.8 15.9 6.2 15.8 6.5 15.6 6.9L15.6 8C15.6 8 18.5 9.8 19.5 10.7Z"/>
                  </g>
                </svg>
              </div>
              <h1>Collaboration</h1>
              <p className="col-md-6 col-md-offset-3">Share work with colleagues, collaborate on analysis, and guarantee your working on the same version of the data.</p>
            </header>
          </div>
        </div>
        <div className="images parallax">
          <img alt="" src="/img/homepage/features/screenshots/team.png"/>
          <img alt="" src="/img/homepage/features/screenshots/workspace-filetree.png"/>
        </div>
      </div>
    </section>
    <section className="feature text-block" id="applications">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-10 col-lg-offset-1">
            <header>
              <div className="icon">
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <g>
                    <path d="M10 18.7C5.2 18.7 1.3 14.8 1.3 10 1.3 5.2 5.2 1.3 10 1.3 14.8 1.3 18.7 5.2 18.7 10 18.7 14.8 14.8 18.7 10 18.7M10 0C4.5 0 0 4.5 0 10 0 15.5 4.5 20 10 20 15.5 20 20 15.5 20 10 20 4.5 15.5 0 10 0M13 13C12.8 13.2 12.5 13.2 12.3 13 12.1 12.8 12.1 12.5 12.3 12.3 12.5 12.1 12.8 12.1 13 12.3 13.2 12.5 13.2 12.8 13 13M10 11.7C9.1 11.7 8.3 10.9 8.3 10 8.3 9.1 9.1 8.3 10 8.3 10.9 8.3 11.7 9.1 11.7 10 11.7 10.9 10.9 11.7 10 11.7M6.5 9.4C6.5 9.8 6.2 10 5.9 10 5.5 10 5.3 9.8 5.3 9.4 5.3 7.1 7.1 5.3 9.4 5.3 9.8 5.3 10 5.5 10 5.9 10 6.2 9.8 6.5 9.4 6.5 7.7 6.5 6.5 7.8 6.5 9.4M10 2.7C6 2.7 2.7 6 2.7 10 2.7 14 6 17.3 10 17.3 14 17.3 17.3 14 17.3 10 17.3 6 14 2.7 10 2.7"/>
                  </g>
                </svg>
              </div>
              <h1>Applications</h1>
              <p className="col-md-6 col-md-offset-3">Customer Intelligence allows you to get demographic insight about your customers purely from UK postcode data.</p>
            </header>
          </div>
        </div>
        <div className="images parallax">
          <img alt="" src="/img/homepage/features/screenshots/ci-1.png"/>
          <img alt="" src="/img/homepage/features/screenshots/ci-2.png"/>
        </div>
      </div>
    </section>
    <section className="case-studies-container" id="case-studies">
      <h2>
        Power your analysis with
        <strong>SherlockML</strong>
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <a className="case-study" href="/case-study/predictive-staffing">
              <img alt="" src="/img/homepage/case-studies/header-predictive-staffing.jpg"/>
              <div className="content">
                <span className="title">
                  Predictive staff scheduling<small>Aviation</small>
                </span>
                <span className="link">
                  Read case study<span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
                </span>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-md-4">
            <a className="case-study" href="/case-study/fraud-detection">
              <img alt="" src="/img/homepage/case-studies/header-fraud-detection.jpg"/>
              <div className="content">
                <span className="title">
                  Fraud detection<small>Financial Services</small>
                </span>
                <span className="link">
                  Read case study<span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
                </span>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-md-4">
            <a className="case-study" href="/case-study/predictive-maintenance">
              <img alt="" src="/img/homepage/case-studies/header-predictive-maintenance.jpg"/>
              <div className="content">
                <span className="title">
                  Predictive Maintenance<small>Manufacturing</small>
                </span>
                <span className="link">
                  Read case study<span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="cta">
        <a className="btn green big" href="/demo">Request a Demo</a>
      </div>
    </section>
  </div>
  <section id="newsletter">
    <h2>Subscribe to our Newsletter</h2>
    <p>
      Receive our curated publication of data science content.<br/>Subscribe below and never miss an issue.

    </p>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <form method="POST" action="/" id="_form_3_" className="form activecampaign" noValidate="noValidate">
            <div className="form-group">
              <label for="emailAddress" className="sr-only">Email address</label>
              <div className="input-group">
                <div>
                  <input type="text" name="email" placeholder="hello@example.com" id="emailAddress" required="required"/>
                </div>
                <div className="input-group-addon">
                  <button id="_form_3_submit" className="btn blue" type="submit">Subscribe</button>
                </div>
              </div>
            </div>
            <input type="hidden" name="u" value="3"/>
            <input type="hidden" name="f" value="3"/>
            <input type="hidden" name="s"/>
            <input type="hidden" name="c" value="0"/>
            <input type="hidden" name="m" value="0"/>
            <input type="hidden" name="act" value="sub"/>
            <input type="hidden" name="v" value="2"/>
            <div className="_form-thank-you" style={{
                display: 'none'
              }}></div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <footer id="main-footer">
    <div className="asi">
      <a href="/" target="_blank">ASI Data Science</a>
      <small>© 2017 ASI Data Science</small>
    </div>
    <ul className="list-inline">
      <li>
        <a href="/terms">Terms of Service</a>
      </li>
      <li>
        <a href="/acceptable-use">Acceptable Use Policy</a>
      </li>
    </ul>
    <ul className="list-inline">
      <li>hello@sherlockml.com</li>
      <li>
        <a href="https://www.linkedin.com/company/#/" target="_blank" rel="noopener noreferrer">
          <img className="img-responsive" src="/img/homepage/social/linkedin.svg" alt="LinkedIn" aria-hidden="true"/>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/#/" target="_blank" rel="noopener noreferrer">
          <img className="img-responsive" src="/img/homepage/social/facebook.svg" alt="Facebook" aria-hidden="true"/>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/#/" target="_blank" rel="noopener noreferrer">
          <img className="img-responsive" src="/img/homepage/social/twitter.svg" alt="Twitter" aria-hidden="true"/>
        </a>
      </li>
      <li>
        <a href="https://plus.google.com/#/" target="_blank" rel="noopener noreferrer">
          <img className="img-responsive" src="/img/homepage/social/google.svg" alt="Google+" aria-hidden="true"/>
        </a>
      </li>
    </ul>
  </footer>
</div>);

export default Features

import React from 'react';
import Navbar from './Navbar';
import Newsletter from './newsletter';
import Footer from './footer';
import * as MdIconCon from 'react-icons/lib/md';
import { Form } from 'formsy-react';
import MyInput from './../component/input';
export default class LandingPage extends React.PureComponent {
render () {
return (
<div className="home-page">
  <header id="main-header">
      <Navbar />
      <div id="banner">
          <div className="container">
              <div className="row">
                  <div className="col-sm-12 col-lg-7 col-md-offset-0 col-lg-offset-0">
                      <h1>Artificial Intelligence for Everyone</h1>
                      <p>
                          <b>SherlockML</b>
                          is today's tool of choice for data scientists to solve problems using artificial intelligence.
                      </p>
                      <a className="btn blue hidden-md hidden-lg" href="/demo">Request a Demo</a>
                      <ul className="hidden-xs">
                          <li>
                              <svg className="icon-accelerate" width="33" height="33" viewBox="0 0 33 33">
                                  <g fill="none">
                                      <g fill="#FFF">
                                          <g transform="translate(-165 -645)translate(165 645)">
                                              <polygon className="colorise" points="24.2 30.9 32.4 30.9 32.4 29.8 24.2 29.8"/>
                                              <path className="colorise" d="M30.3 32.9C30.2 32.9 30.1 32.9 30 32.8 29.8 32.6 29.8 32.2 30 32L31.7 30.3 30 28.6C29.8 28.4 29.8 28.1 30 27.9 30.2 27.7 30.5 27.7 30.7 27.9L32.8 30C33 30.2 33 30.5 32.8 30.7L30.7 32.8C30.6 32.9 30.5 32.9 30.3 32.9"/>
                                              <path className="colorise" d="M18.5 5.1C18.4 5.1 18.2 5.1 18.1 5L16.1 2.9C15.9 2.7 15.9 2.4 16.1 2.2L18.1 0.2C18.3-0.1 18.7-0.1 18.9 0.2 19.1 0.4 19.1 0.7 18.9 0.9L17.2 2.6 18.9 4.3C19.1 4.5 19.1 4.8 18.9 5 18.8 5.1 18.6 5.1 18.5 5.1"/>
                                              <path className="colorise" d="M16.5 30.9L0 30.9 0 29.8 16.5 29.8C23.8 29.8 29.8 23.8 29.8 16.5 29.8 9.1 23.8 3.1 16.5 3.1L16.5 2.1C24.4 2.1 30.9 8.5 30.9 16.5 30.9 24.4 24.4 30.9 16.5 30.9"/>
                                              <path d="M10.1 19L13.1 19 14.3 16.5 13.1 13.9 10.1 13.9 8.8 16.5 10.1 19ZM13.7 20.1L9.5 20.1 7.7 16.5 9.5 12.9 13.7 12.9 15.5 16.5 13.7 20.1Z"/>
                                              <path d="M17.3 23.1L20.3 23.1 21.5 20.6 20.3 18 17.3 18 16 20.6 17.3 23.1ZM20.9 24.2L16.7 24.2 14.9 20.6 16.7 17 20.9 17 22.7 20.6 20.9 24.2Z"/>
                                              <path d="M17.3 14.9L20.3 14.9 21.5 12.3 20.3 9.8 17.3 9.8 16 12.3 17.3 14.9ZM20.9 15.9L16.7 15.9 14.9 12.3 16.7 8.7 20.9 8.7 22.7 12.3 20.9 15.9Z"/>
                                              <path d="M23.1 17.5C22.6 17.5 22.1 17 22.1 16.5 22.1 15.9 22.6 15.4 23.1 15.4 23.7 15.4 24.2 15.9 24.2 16.5 24.2 17 23.7 17.5 23.1 17.5"/>
                                              <path d="M12.9 23.1C12.3 23.1 11.8 22.7 11.8 22.1 11.8 21.5 12.3 21.1 12.9 21.1 13.4 21.1 13.9 21.5 13.9 22.1 13.9 22.7 13.4 23.1 12.9 23.1"/>
                                              <path d="M12.9 11.8C12.3 11.8 11.8 11.4 11.8 10.8 11.8 10.2 12.3 9.8 12.9 9.8 13.4 9.8 13.9 10.2 13.9 10.8 13.9 11.4 13.4 11.8 12.9 11.8"/>
                                              <path className="colorise" d="M9 28.8C4.6 26.1 2.1 21.5 2.1 16.5 2.1 9.5 7 3.6 13.8 2.3L14 3.3C7.7 4.5 3.1 10 3.1 16.5 3.1 21.2 5.5 25.4 9.5 27.9L9 28.8Z"/>
                                          </g>
                                      </g>
                                  </g>
                              </svg>
                              <span className="text">Accelerate the pace of data science</span>
                          </li>
                          <li>
                              <svg className="icon-environment" width="33" height="33" viewBox="0 0 33 33">
                                  <g fill="none">
                                      <g fill="#FFF">
                                          <g transform="translate(-415 -645)translate(415 645)">
                                              <path d="M11.3 19.2L16.5 22 21.6 19.2 21.6 13.7 16.5 10.9 11.3 13.7 11.3 19.2ZM16.5 23.1C16.4 23.1 16.3 23.1 16.2 23.1L10.6 20C10.4 19.9 10.3 19.7 10.3 19.5L10.3 13.4C10.3 13.2 10.4 13 10.6 12.9L16.2 9.8C16.4 9.7 16.5 9.7 16.7 9.8L22.4 12.9C22.5 13 22.6 13.2 22.6 13.4L22.6 19.5C22.6 19.7 22.5 19.9 22.4 20L16.7 23.1C16.6 23.1 16.5 23.1 16.5 23.1Z"/>
                                              <path d="M16.5 17C16.4 17 16.3 16.9 16.2 16.9L10.6 13.8 11 12.9 16.5 15.9 21.9 12.9 22.4 13.8 16.7 16.9C16.6 16.9 16.5 17 16.5 17"/>
                                              <polygon points="15.9 22.6 17 22.6 17 16.5 15.9 16.5"/>
                                              <polygon points="6.2 17 7.2 17 7.2 15.9 6.2 15.9"/>
                                              <polygon points="8.7 10.3 9.8 10.3 9.8 9.3 8.7 9.3"/>
                                              <polygon points="6.7 13.4 7.7 13.4 7.7 12.3 6.7 12.3"/>
                                              <polygon points="6.7 20.6 7.7 20.6 7.7 19.5 6.7 19.5"/>
                                              <polygon points="25.2 13.4 26.2 13.4 26.2 12.3 25.2 12.3"/>
                                              <polygon points="25.2 20.6 26.2 20.6 26.2 19.5 25.2 19.5"/>
                                              <polygon points="11.8 8.2 12.9 8.2 12.9 7.2 11.8 7.2"/>
                                              <polygon points="20.1 8.2 21.1 8.2 21.1 7.2 20.1 7.2"/>
                                              <polygon points="11.8 25.7 12.9 25.7 12.9 24.7 11.8 24.7"/>
                                              <polygon points="20.1 25.7 21.1 25.7 21.1 24.7 20.1 24.7"/>
                                              <polygon points="8.7 23.7 9.8 23.7 9.8 22.6 8.7 22.6"/>
                                              <polygon points="23.1 10.3 24.2 10.3 24.2 9.3 23.1 9.3"/>
                                              <polygon points="23.1 23.7 24.2 23.7 24.2 22.6 23.1 22.6"/>
                                              <polygon points="25.7 17 26.7 17 26.7 15.9 25.7 15.9"/>
                                              <polygon points="15.9 7.2 17 7.2 17 6.2 15.9 6.2"/>
                                              <polygon points="15.9 26.7 17 26.7 17 25.7 15.9 25.7"/>
                                              <path className="colorise" d="M15.4 31.8C16.1 31.9 16.8 31.9 17.5 31.8L18.2 29.2 18.5 29.1C18.8 29.1 19.1 29 19.4 29L19.8 28.9 21.4 31.1C22 30.9 22.7 30.6 23.3 30.3L22.9 27.6 23.2 27.4C23.5 27.2 23.7 27.1 24 26.9L24.3 26.7 26.6 28.1C27.1 27.6 27.6 27.1 28.1 26.6L26.7 24.3 26.9 24C27.1 23.7 27.2 23.5 27.4 23.2L27.6 22.9 30.3 23.3C30.6 22.7 30.9 22 31.1 21.4L28.9 19.8 29 19.4C29 19.1 29.1 18.8 29.1 18.5L29.2 18.2 31.8 17.5C31.9 17.2 31.9 16.8 31.9 16.5 31.9 16.1 31.9 15.7 31.8 15.4L29.2 14.8 29.1 14.4C29.1 14.1 29 13.8 29 13.5L28.9 13.2 31.1 11.6C30.9 10.9 30.6 10.2 30.3 9.6L27.6 10 27.4 9.7C27.2 9.5 27.1 9.2 26.9 8.9L26.7 8.6 28.1 6.3C27.6 5.8 27.1 5.3 26.6 4.8L24.3 6.2 24 6C23.7 5.8 23.5 5.7 23.2 5.5L22.9 5.3 23.3 2.6C22.7 2.3 22 2 21.4 1.8L19.8 4 19.4 3.9C19.1 3.9 18.8 3.8 18.5 3.8L18.2 3.7 17.5 1.1C16.8 1 16.1 1 15.4 1.1L14.8 3.7 14.4 3.8C14.1 3.8 13.8 3.9 13.5 3.9L13.2 4 11.6 1.8C10.9 2 10.2 2.3 9.6 2.6L10 5.3 9.7 5.5C9.5 5.7 9.2 5.8 8.9 6L8.6 6.2 6.3 4.8C5.8 5.3 5.3 5.8 4.8 6.3L6.2 8.6 6 8.9C5.8 9.2 5.7 9.5 5.5 9.7L5.3 10 2.6 9.6C2.3 10.2 2.1 10.9 1.8 11.6L4 13.2 3.9 13.5C3.9 13.8 3.8 14.1 3.8 14.4L3.7 14.8 1.1 15.4C1 15.7 1 16.1 1 16.5 1 16.8 1 17.2 1.1 17.5L3.7 18.2 3.8 18.5C3.8 18.8 3.9 19.1 3.9 19.4L4 19.8 1.8 21.4C2.1 22 2.3 22.7 2.6 23.3L5.3 22.9 5.5 23.2C5.7 23.5 5.8 23.7 6 24L6.2 24.3 4.8 26.6C5.3 27.1 5.8 27.6 6.3 28.1L8.6 26.7 8.9 26.9C9.2 27.1 9.5 27.2 9.7 27.4L10 27.6 9.6 30.3C10.2 30.6 10.9 30.9 11.6 31.1L13.2 28.9 13.5 29C13.8 29 14.1 29.1 14.4 29.1L14.8 29.2 15.4 31.8ZM16.5 32.9C16 32.9 15.4 32.9 14.9 32.8L14.5 32.8 13.9 30.1C13.8 30.1 13.7 30.1 13.6 30L12 32.3 11.6 32.2C10.6 31.9 9.7 31.5 8.8 31L8.4 30.8 8.9 28.1C8.8 28 8.7 28 8.6 27.9L6.2 29.4 6 29.1C5.2 28.5 4.4 27.7 3.8 27L3.5 26.7 5 24.3C4.9 24.2 4.9 24.1 4.8 24L2.1 24.5 1.9 24.1C1.4 23.2 1 22.3 0.7 21.3L0.6 21 2.9 19.3C2.8 19.2 2.8 19.1 2.8 19L0.1 18.4 0.1 18C0 17.5 0 16.9 0 16.5 0 16 0 15.4 0.1 14.9L0.1 14.5 2.8 13.9C2.8 13.8 2.8 13.7 2.9 13.6L0.6 12 0.7 11.6C1 10.6 1.4 9.7 1.9 8.8L2.1 8.4 4.8 8.9C4.9 8.8 4.9 8.7 5 8.6L3.5 6.2 3.8 6C4.4 5.2 5.2 4.4 6 3.8L6.2 3.5 8.6 5C8.7 4.9 8.8 4.9 8.9 4.8L8.4 2.1 8.8 1.9C9.7 1.4 10.6 1 11.6 0.7L12 0.6 13.6 2.9C13.7 2.8 13.8 2.8 13.9 2.8L14.5 0.1 14.9 0.1C16 0 16.9 0 18 0.1L18.4 0.1 19 2.8C19.1 2.8 19.2 2.8 19.3 2.9L21 0.6 21.3 0.7C22.3 1 23.2 1.4 24.1 1.9L24.5 2.1 24 4.8C24.1 4.9 24.2 4.9 24.3 5L26.7 3.5 27 3.8C27.7 4.4 28.5 5.2 29.1 6L29.4 6.2 27.9 8.6C28 8.7 28 8.8 28.1 8.9L30.8 8.4 31 8.8C31.5 9.7 31.9 10.6 32.2 11.6L32.3 12 30 13.6C30.1 13.7 30.1 13.8 30.1 13.9L32.8 14.5 32.8 14.9C32.9 15.4 32.9 16 32.9 16.5 32.9 16.9 32.9 17.5 32.8 18L32.8 18.4 30.1 19C30.1 19.1 30.1 19.2 30 19.3L32.3 21 32.2 21.3C31.9 22.3 31.5 23.2 31 24.1L30.8 24.5 28.1 24C28 24.1 28 24.2 27.9 24.3L29.4 26.7 29.1 27C28.5 27.7 27.7 28.5 27 29.1L26.7 29.4 24.3 27.9C24.2 28 24.1 28 24 28.1L24.5 30.8 24.1 31C23.2 31.5 22.3 31.9 21.3 32.2L21 32.3 19.3 30C19.2 30.1 19.1 30.1 19 30.1L18.4 32.8 18 32.8C17.5 32.9 16.9 32.9 16.5 32.9L16.5 32.9Z"/>
                                          </g>
                                      </g>
                                  </g>
                              </svg>
                              <span className="text">Zero configuration environment</span>
                          </li>
                          <li>
                              <svg className="icon-scale" width="33" height="33" viewBox="0 0 33 33">
                                  <g fill="none">
                                      <g fill="#FFF">
                                          <g transform="translate(-666 -646)translate(666 646)">
                                              <path d="M5 24.9C6.7 24.9 8 26.3 8 27.9 8 29.5 6.7 30.9 5 30.9 3.4 30.9 2.1 29.5 2.1 27.9 2.1 26.3 3.4 24.9 5 24.9ZM5 26.2C4.1 26.2 3.3 26.9 3.3 27.9 3.3 28.8 4.1 29.6 5 29.6 6 29.6 6.7 28.8 6.7 27.9 6.7 26.9 6 26.2 5 26.2Z"/>
                                              <path d="M13.3 14.9C10.7 14.9 8.6 17 8.6 19.6 8.6 22.2 10.7 24.3 13.3 24.3 15.9 24.3 18 22.2 18 19.6 18 17 15.9 14.9 13.3 14.9M13.3 16.2C15.2 16.2 16.7 17.7 16.7 19.6 16.7 21.5 15.2 23 13.3 23 11.4 23 9.9 21.5 9.9 19.6 9.9 17.7 11.4 16.2 13.3 16.2"/>
                                              <path d="M24.9 0C20.5 0 16.9 3.6 16.9 8 16.9 12.4 20.5 16 24.9 16 29.3 16 32.9 12.4 32.9 8 32.9 3.6 29.3 0 24.9 0M24.9 1.2C28.6 1.2 31.7 4.3 31.7 8 31.7 11.7 28.6 14.8 24.9 14.8 21.2 14.8 18.2 11.7 18.2 8 18.2 4.3 21.2 1.2 24.9 1.2"/>
                                              <polygon className="colorise" points="11.3 30.9 32.4 30.9 32.4 29.8 11.3 29.8"/>
                                              <path className="colorise" d="M30.3 32.9C30.2 32.9 30.1 32.9 30 32.8 29.8 32.6 29.8 32.2 30 32L32 30C32.2 29.8 32.6 29.8 32.8 30 33 30.2 33 30.5 32.8 30.7L30.7 32.8C30.6 32.9 30.5 32.9 30.3 32.9"/>
                                              <path className="colorise" d="M32.4 30.9C32.3 30.9 32.1 30.8 32 30.7L30 28.6C29.8 28.4 29.8 28.1 30 27.9 30.2 27.7 30.5 27.7 30.7 27.9L32.8 30C33 30.2 33 30.5 32.8 30.7 32.7 30.8 32.5 30.9 32.4 30.9"/>
                                              <polygon className="colorise" points="2.1 21.6 3.1 21.6 3.1 0.5 2.1 0.5"/>
                                              <path className="colorise" d="M0.5 3.1C0.4 3.1 0.3 3 0.2 2.9 -0.1 2.7-0.1 2.4 0.2 2.2L2.2 0.2C2.4-0.1 2.7-0.1 2.9 0.2 3.1 0.4 3.1 0.7 2.9 0.9L0.9 2.9C0.8 3 0.6 3.1 0.5 3.1"/>
                                              <path className="colorise" d="M4.6 3.1C4.5 3.1 4.4 3 4.3 2.9L2.2 0.9C2 0.7 2 0.4 2.2 0.2 2.4-0.1 2.7-0.1 2.9 0.2L5 2.2C5.2 2.4 5.2 2.7 5 2.9 4.9 3 4.8 3.1 4.6 3.1"/>
                                              <polygon className="colorise" points="4.1 18.5 5.1 18.5 5.1 17.5 4.1 17.5"/>
                                              <polygon className="colorise" points="6.2 18.5 7.2 18.5 7.2 17.5 6.2 17.5"/>
                                              <polygon className="colorise" points="4.1 6.2 5.1 6.2 5.1 5.1 4.1 5.1"/>
                                              <polygon className="colorise" points="6.2 6.2 7.2 6.2 7.2 5.1 6.2 5.1"/>
                                              <polygon className="colorise" points="8.2 6.2 9.3 6.2 9.3 5.1 8.2 5.1"/>
                                              <polygon className="colorise" points="10.3 6.2 11.3 6.2 11.3 5.1 10.3 5.1"/>
                                              <polygon className="colorise" points="12.3 6.2 13.4 6.2 13.4 5.1 12.3 5.1"/>
                                              <polygon className="colorise" points="14.4 6.2 15.4 6.2 15.4 5.1 14.4 5.1"/>
                                              <polygon className="colorise" points="4.1 12.3 5.1 12.3 5.1 11.3 4.1 11.3"/>
                                              <polygon className="colorise" points="6.2 12.3 7.2 12.3 7.2 11.3 6.2 11.3"/>
                                              <polygon className="colorise" points="8.2 12.3 9.3 12.3 9.3 11.3 8.2 11.3"/>
                                              <polygon className="colorise" points="10.3 12.3 11.3 12.3 11.3 11.3 10.3 11.3"/>
                                              <polygon className="colorise" points="12.3 12.3 13.4 12.3 13.4 11.3 12.3 11.3"/>
                                              <polygon className="colorise" points="14.4 12.3 15.4 12.3 15.4 11.3 14.4 11.3"/>
                                              <polygon className="colorise" points="14.4 26.7 15.4 26.7 15.4 25.7 14.4 25.7"/>
                                              <polygon className="colorise" points="14.4 28.8 15.4 28.8 15.4 27.8 14.4 27.8"/>
                                              <polygon className="colorise" points="20.6 20.6 21.6 20.6 21.6 19.5 20.6 19.5"/>
                                              <polygon className="colorise" points="20.6 22.6 21.6 22.6 21.6 21.6 20.6 21.6"/>
                                              <polygon className="colorise" points="20.6 18.5 21.6 18.5 21.6 17.5 20.6 17.5"/>
                                              <polygon className="colorise" points="20.6 24.7 21.6 24.7 21.6 23.7 20.6 23.7"/>
                                              <polygon className="colorise" points="20.6 26.7 21.6 26.7 21.6 25.7 20.6 25.7"/>
                                              <polygon className="colorise" points="20.6 28.8 21.6 28.8 21.6 27.8 20.6 27.8"/>
                                              <polygon className="colorise" points="26.7 18.5 27.8 18.5 27.8 17.5 26.7 17.5"/>
                                              <polygon className="colorise" points="26.7 20.6 27.8 20.6 27.8 19.5 26.7 19.5"/>
                                              <polygon className="colorise" points="26.7 22.6 27.8 22.6 27.8 21.6 26.7 21.6"/>
                                              <polygon className="colorise" points="26.7 24.7 27.8 24.7 27.8 23.7 26.7 23.7"/>
                                              <polygon className="colorise" points="26.7 26.7 27.8 26.7 27.8 25.7 26.7 25.7"/>
                                              <polygon className="colorise" points="26.7 28.8 27.8 28.8 27.8 27.8 26.7 27.8"/>
                                          </g>
                                      </g>
                                  </g>
                              </svg>
                              <span className="text">Scale to Big Data with one-click</span>
                          </li>
                          <li>
                              <svg className="icon-collaboration" width="31" height="31" viewBox="0 0 31 31">
                                  <g fill="none">
                                      <g fill="#FFF">
                                          <g transform="translate(-917 -646)translate(917 646)">
                                              <path d="M15.5 1C14.4 1 13.5 1.8 13.5 2.9 13.5 4 14.4 4.8 15.5 4.8 16.5 4.8 17.4 4 17.4 2.9 17.4 1.8 16.5 1 15.5 1ZM15.5 5.8C13.9 5.8 12.6 4.5 12.6 2.9 12.6 1.3 13.9 0 15.5 0 17.1 0 18.4 1.3 18.4 2.9 18.4 4.5 17.1 5.8 15.5 5.8Z"/>
                                              <path d="M2.9 1C1.8 1 1 1.8 1 2.9 1 4 1.8 4.8 2.9 4.8 4 4.8 4.8 4 4.8 2.9 4.8 1.8 4 1 2.9 1M2.9 5.8C1.3 5.8 0 4.5 0 2.9 0 1.3 1.3 0 2.9 0 4.5 0 5.8 1.3 5.8 2.9 5.8 4.5 4.5 5.8 2.9 5.8"/>
                                              <path d="M21.3 14L20.3 14 20.3 10.1C20.3 8.8 19.2 7.7 17.9 7.7L13 7.7C11.7 7.7 10.6 8.8 10.6 10.1L10.6 14 9.7 14 9.7 10.1C9.7 8.3 11.2 6.8 13 6.8L17.9 6.8C19.7 6.8 21.3 8.3 21.3 10.1L21.3 14Z"/>
                                              <path className="colorise" d="M5.8 18.8L5.8 15 25.1 15 25.1 18.8 5.8 18.8ZM6.8 17.9L24.2 17.9 24.2 15.9 6.8 15.9 6.8 17.9Z"/>
                                              <path d="M10.6 30.9L10.1 30.4C10.1 30.5 10.1 30.6 10.1 30.7 10 30.8 9.8 30.9 9.7 30.9L10.1 30.4 9.7 30 9.7 30.4 9.2 30.6 6 22.7 2.9 22.7C1.3 22.7 0 21.4 0 19.8L0 8.7C0 7.6 0.9 6.8 1.9 6.8L2.9 6.8C5 6.8 6.8 8.5 6.8 10.6L6.8 14 5.8 14 5.8 10.6C5.8 9 4.5 7.7 2.9 7.7L1.9 7.7C1.4 7.7 1 8.2 1 8.7L1 19.8C1 20.9 1.8 21.7 2.9 21.7L6.3 21.7C6.5 21.7 6.7 21.9 6.7 22L10.1 30.2C10.1 30.3 10.1 30.4 10.1 30.4L10.6 30C12 30 12.1 28.7 12.1 28.5L12.1 19.8 13 19.8 13 28.5C13 29.3 12.5 30.9 10.6 30.9"/>
                                              <path d="M28 1C27 1 26.1 1.8 26.1 2.9 26.1 4 27 4.8 28 4.8 29.1 4.8 30 4 30 2.9 30 1.8 29.1 1 28 1M28 5.8C26.4 5.8 25.1 4.5 25.1 2.9 25.1 1.3 26.4 0 28 0 29.6 0 30.9 1.3 30.9 2.9 30.9 4.5 29.6 5.8 28 5.8"/>
                                              <path d="M21.3 30.9L20.3 30.9C18.4 30.9 17.9 29.3 17.9 28.5L17.9 19.8 18.8 19.8 18.8 28.5C18.8 28.7 18.9 30 20.3 30L20.9 30 24.2 22C24.3 21.9 24.4 21.7 24.6 21.7L28 21.7C29.1 21.7 30 20.9 30 19.8L30 8.7C30 8.2 29.5 7.7 29 7.7L28 7.7C26.4 7.7 25.1 9 25.1 10.6L25.1 14 24.2 14 24.2 10.6C24.2 8.5 25.9 6.8 28 6.8L29 6.8C30.1 6.8 30.9 7.6 30.9 8.7L30.9 19.8C30.9 21.4 29.6 22.7 28 22.7L25 22.7 21.7 30.6C21.6 30.8 21.5 30.9 21.3 30.9"/>
                                              <polygon points="15 30.9 15.9 30.9 15.9 19.8 15 19.8"/>
                                              <polygon className="colorise" points="15 9.7 15.9 9.7 15.9 8.7 15 8.7"/>
                                              <polygon className="colorise" points="15 11.6 15.9 11.6 15.9 10.6 15 10.6"/>
                                          </g>
                                      </g>
                                  </g>
                              </svg>
                              <span className="text">Secure collaboration tools</span>
                          </li>
                      </ul>
                  </div>
                  <div className="col-sm-12 col-lg-4 col-lg-offset-1 hidden-xs hidden-sm">
                      <div className="demo-form">
                          <h2>Request your free SherlockML demo today</h2>
                          <Form method="post" onValidSubmit={this.sendToServer} action="/" id="_form_1_" className="form activecampaign" noValidate data-cfields='{"3": "role"}'>
                              <div className="form-group">
                                  <label className="sr-only">Full name*</label>
                                  <MyInput type="text" name="fullname" validations="minLength:2" validationError="This field is required." placeholder="Full name*" required/>
                              </div>
                              <div className="form-group">
                                  <label className="sr-only">Work e-mail*</label>
                                  <MyInput type="text" name="email" placeholder="Work e-mail*" validations="isEmail" validationError="This is not a valid email" required/>
                              </div>
                              <div className="form-group">
                                  <label className="sr-only">Company*</label>
                                  <MyInput type="text" name="organization" placeholder="Company*"  validations="minLength:3" validationError="This field is required." required/>
                              </div>
                              <div className="form-group">
                                  <label className="sr-only">Role</label>
                                  <MyInput type="text" name="field[3]" value="" placeholder="Role"/>
                              </div>
                              <button id="_form_1_submit" className="btn blue"  type="submit">Request A Demo</button>
                              <div className="link-signup">
                                  Have an invitation code? <a href="/signup">Sign up</a>
                              </div>
                              <div className="_form-thank-you" style={{display:'none'}}></div>
                          </Form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div id="video">
          <video preload loop muted autoPlay width="100%" height="auto" poster="/img/bg-particles.png">
              <source src="https://sherlockml-cdn.s3-eu-west-1.amazonaws.com/video.mp4" type="video/mp4"/>
          </video>
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
      <section id="trusted-by">
          <div className="container">
              <div className="row">
                  <div className="col-md-6 col-md-offset-3">
                      <h3>SherlockML is used by organisations globally to accelerate their AI projects and has helped generate huge amounts of business value.</h3>
                  </div>
              </div>
          </div>
          <ul>
              <li>
                  <img alt="" src="/img/homepage/logos/nhs.png"/>
              </li>
              <li>
                  <img alt="" src="/img/homepage/logos/beauhurst.png"/>
              </li>
              <li>
                  <img alt="" src="/img/homepage/logos/movebubble.png"/>
              </li>
              <li>
                  <img alt="" src="/img/homepage/logos/easyjet.png"/>
              </li>
              <li>
                  <img alt="" src="/img/homepage/logos/siemens.png"/>
              </li>
              <li>
                  <img alt="" src="/img/homepage/logos/london-irish.png"/>
              </li>
          </ul>
      </section>
      <section id="highlights">
          <div className="text-block">
              <div className="container">
                  <div className="row">
                      <div className="col-sm-5 col-md-4 col-sm-offset-0 col-md-offset-1">
                          <h2>Secure, Scalable Compute</h2>
                          <p>
                              <strong>SherlockML</strong>
                              offers a secure cloud based environment for data science. It eliminates burdens on internal IT and helps data scientists to work faster and collaborate more effectively.
                          </p>
                      </div>
                      <div className="col-sm-4">
                          <div className="img servers">
                              <img alt="" src="/img/homepage/highlights/servers.png" width="928" height="282"/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="text-block">
              <div className="container">
                  <div className="row">
                      <div className="col-sm-7">
                          <div className="img lens">
                              <img alt="" src="/img/homepage/highlights/lens.png" width="685" height="556"/>
                          </div>
                      </div>
                      <div className="col-sm-5 col-md-4">
                          <h2>Rapid Exploration and Cleaning</h2>
                          <p>
                              <strong>SherlockML</strong>
                              provides custom productivity tools, paired with familiar open source components like Jupyter Notebook and RStudio to help data scientists to build, test and deploy their own bespoke AI models.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="text-block">
              <div className="container">
                  <div className="row">
                      <div className="col-sm-5 col-md-4 col-sm-offset-0 col-md-offset-1">
                          <h2>Easy Collaboration</h2>
                          <p>Your team can iterate and deliver projects better and faster without having to worry about infrastructure and deployment. Collaboration, version control, and productionising models are as simple as a few clicks.</p>
                      </div>
                      <div className="col-sm-4">
                          <div className="img collaboration">
                              <img alt="" src="/img/homepage/highlights/collaboration.png" width="784" height="592"/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="text-block">
              <div className="container">
                  <div className="row">
                      <div className="col-sm-7">
                          <div className="img communication">
                              <img alt="" src="/img/homepage/highlights/communication.png" width="598" height="393"/>
                          </div>
                      </div>
                      <div className="col-sm-5 col-md-4">
                          <h2>Clear Communication</h2>
                          <p>
                              <strong>SherlockML</strong>
                              provides integrated tools to share results and insights to every part of your organisation.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="case-studies-container" id="case-studies">
          <h2>
              Power your analysis with <strong>SherlockML</strong>
          </h2>
          <div className="container">
              <div className="row">
                  <div>
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
          </div>
          <div className="cta">
              <a className="btn green big" href="/demo">Request a Demo</a>
          </div>
      </section>
  </div>
  <Newsletter />
  <Footer />
</div>
)
}
}

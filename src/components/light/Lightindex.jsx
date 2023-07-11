import React,{useEffect, useState} from 'react'
import {  Link  } from 'react-router-dom'



export default function Lightindex() {
  const [state, setState] = useState(false);
  const refresh = () => window.location.reload(state);
  if (state == true){
    setState(false);
    refresh()

  }
 // var state=true;
  //const [state, setState] = useState(true);
/*useEffect(() => {
  //const timer =  setTimeout(() => {refresh()}, 1000);
  //return () => clearTimeout(timer);
  if (state) {
    state=false;
    refresh();  
  }
  
}, []);*/
/*React.useEffect(() => {
  let timer = window.setInterval(() => {
    refresh();
  }, 1000);
  return () => { // Return callback to run on unmount.
    window.clearInterval(timer);
  };
}, [])*/
function apple(){
  setState(true);
  refresh();

}
  return (
    <div className="theme-dark">
      { state?{}:apple()

       }

      <div id="overlay-effect"></div>

      <nav className="navbar-expand-md navbar fixed-top" id="navbar">
        <a className="navbar-brand" data-scroll="" href="#home-area">
          <img className="img-fluid" alt="" />
        </a>
        <span
          className="navbar-menu ml-auto"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          role="button"
        >
          <span className="btn-line"></span>
        </span>
        <div
          className="collapse navbar-collapse order-1 order-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/aboutlight">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section
        className="home-area element-cover-bg video-variant"
        id="home"
      >
        <div
          className="player"
          id="homeVideo"
          data-property="{videoURL:'https://youtu.be/JyLZ2rOzzao',containment:'#home',autoPlay:true, mute:true, showControls:false, stopMovieOnBlur:false, showYTLogo: false}"
        ></div>
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-12 col-lg-8 home-content text-center">
              <h1 className="home-name">
                Welcome to<span> the light </span>
              </h1>
              <h4 className="cd-headline clip home-headline">
                We'll provide you cyber{' '}
                <span className="cd-words-wrapper single-headline">
                  <b className="is-visible"> Security</b>
                  <b> Support</b>
                  <b>Awareness</b>
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div className="fixed-wrapper">
          <div className="fixed-block block-right">
            <ul className="list-unstyled social-icons">
              <li>
                <a href="#0">
                  <i className="icon ion-logo-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="icon ion-logo-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="icon ion-logo-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="icon ion-logo-github"></i>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="icon ion-logo-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { Fragment } from 'react'
import img from '../../img/info-img.jpg'
import img1 from '../../img/client-1.jpg'
import img3 from '../../img/client-2.jpg'
import img4 from '../../img/client-3.jpg'





export default function Aboutlight() {
  return (

<Fragment >

<div className="lightbox-wrapper data-simplebar" id="about">
    <div className="container">
      <div className="lightbox-close">
        <div className="close-btn" data-modal-close=""><span className="btn-line"></span></div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="lightbox-content">
            <div className="row">
              <div className="col-12">
                <div className="section-heading page-heading">
                  <p className="section-description">Get to know me</p>
                  <h2 className="section-title">About Me</h2>
                  <div className="animated-bar"></div>
                </div>
              </div>
            </div>
            <div className="info-section single-section">
              <div className="row align-items-center">
                <div className="col-12 col-lg-5 info-img"><img className="img-fluid img-thumbnail" src={img} alt="About Picture" /></div>
                <div className="col-12 col-lg-7 info-content">
                  <div className="content-block">
                    <h2 className="content-subtitle">Who am i?</h2><br/>
                    <h6 className="content-title">I'm Emma Smith, a visual UX/UI Designer and Web Developer</h6>
                    <div className="content-description">
                      <p>I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
                    </div>
                    <address className="content-info">
                      <div className="row">
                        <div className="col-12 col-md-6 single-info"><span>Name:</span>
                          <p>Emma Smith</p>
                        </div>
                        <div className="col-12 col-md-6 single-info"><span>Email:</span>
                          <p><a href="mailto:emma@example.com">emma@example.com</a></p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6 single-info"><span>Age:</span>
                          <p>21</p>
                        </div>
                        <div className="col-12 col-md-6 single-info"><span>From:</span>
                          <p>Liverpool, UK</p>
                        </div>
                      </div>
                    </address>
                    <div className="d-block d-sm-flex align-items-center"><a className="btn content-download button-main button-scheme" href="#0" role="button">Download CV</a>
                      <ul className="list-unstyled list-inline content-follow">
                        <li className="list-inline-item"><a href="#0"><i className="icon ion-logo-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#0"><i className="icon ion-logo-instagram"></i></a></li>
                        <li className="list-inline-item"><a href="#0"><i className="icon ion-logo-linkedin"></i></a></li>
                        <li className="list-inline-item"><a href="#0"><i className="icon ion-logo-github"></i></a></li>
                        <li className="list-inline-item"><a href="#0"><i className="icon ion-logo-facebook"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-section single-section">
              <div className="row">
                <div className="col-12">
                  <div className="section-heading">
                    <p className="section-description">Services i offer to my clients</p>
                    <h2 className="section-title">My Services</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="single-service"><i className="icon service-icon ion-logo-css3"></i>
                    <h6 className="service-title">Design Trends</h6>
                    <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="single-service"><i className="icon service-icon ion-md-images"></i>
                    <h6 className="service-title">PSD Design</h6>
                    <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="single-service"><i className="icon service-icon ion-logo-ionic"></i>
                    <h6 className="service-title">Customer Support</h6>
                    <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="single-service"><i className="icon service-icon ion-logo-wordpress"></i>
                    <h6 className="service-title">Web Development</h6>
                    <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="single-service"><i className="icon service-icon ion-md-move"></i>
                    <h6 className="service-title">Fully Responsive</h6>
                    <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="single-service"><i className="icon service-icon ion-ios-rocket"></i>
                    <h6 className="service-title">Branding</h6>
                    <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials-section single-section">
              <div className="row">
                <div className="col-12">
                  <div className="section-heading">
                    <p className="section-description">What my clients think about me</p>
                    <h2 className="section-title">Testimonials</h2>
                  </div>
                </div>
              </div>
              <div className="my-slider">
                <div className="slider-item">
                  <div className="single-review swiper-slide">
                    <div className="review-header d-flex justify-content-between">
                      <div className="review-client">
                        <div className="media"><img className="img-fluid rounded-circle client-avatar" src={img1} alt="Client" />
                          <div className="client-details">
                            <h6 className="client-name">Julia Sakura</h6><span className="client-role">Envato Customer</span>
                          </div>
                        </div>
                      </div><i className="icon ion-md-quote review-icon"></i>
                    </div>
                    <p className="review-content">Emma did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended.</p>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="single-review swiper-slide">
                    <div className="review-header d-flex justify-content-between">
                      <div className="review-client">
                        <div className="media"><img className="img-fluid rounded-circle client-avatar" src={img3} alt="Client" />
                          <div className="client-details">
                            <h6 className="client-name">John Santana</h6><span className="client-role">Entrepreneur</span>
                          </div>
                        </div>
                      </div><i className="icon ion-md-quote review-icon"></i>
                    </div>
                    <p className="review-content">Emma did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended.</p>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="single-review swiper-slide">
                    <div className="review-header d-flex justify-content-between">
                      <div className="review-client">
                        <div className="media"><img className="img-fluid rounded-circle client-avatar" src={img4} alt="Client" />
                          <div className="client-details">
                            <h6 className="client-name">Maria Wilson</h6><span className="client-role">Envato Customer</span>
                          </div>
                        </div>
                      </div><i className="icon ion-md-quote review-icon"></i>
                    </div>
                    <p className="review-content">Emma did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-section single-section">
              <div className="row">
                <div className="col-12">
                  <div className="section-heading">
                    <p className="section-description">Get started with my services</p>
                    <h2 className="section-title">Choose a Plan</h2>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="single-plan mb-4 mb-sm-5"><i className="plan-icon icon ion-md-egg"></i>
                    <h3 className="plan-type">Standard</h3>
                    <h2 className="plan-price">$19/month</h2>
                    <ul className="list-unstyled plan-list">
                      <li>Mobile App Design</li>
                      <li>Responsive Design</li>
                      <li>Database Development</li>
                      <li>Web Design</li>
                      <li>24/7 Support</li>
                    </ul><a className="btn button-main button-scheme plan-btn" href="#0" role="button">Get Standard</a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-plan mb-4 mb-sm-5"><i className="plan-icon icon ion-ios-rocket"></i>
                    <h3 className="plan-type">Professional</h3>
                    <h2 className="plan-price">$29/month</h2>
                    <ul className="list-unstyled plan-list">
                      <li>Mobile App Design</li>
                      <li>Responsive Design</li>
                      <li>Database Development</li>
                      <li>Web Design</li>
                      <li>24/7 Support</li>
                    </ul><a className="btn button-main button-scheme plan-btn" href="#0" role="button">Get Pro</a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-plan mb-4 mb-sm-5"><i className="plan-icon icon ion-logo-ionic"></i>
                    <h3 className="plan-type">Business</h3>
                    <h2 className="plan-price">$39/month</h2>
                    <ul className="list-unstyled plan-list">
                      <li>Mobile App Design</li>
                      <li>Responsive Design</li>
                      <li>Database Development</li>
                      <li>Web Design</li>
                      <li>24/7 Support</li>
                    </ul><a className="btn button-main button-scheme plan-btn" href="#0" role="button">Get Business</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Fragment>



   
  )
}

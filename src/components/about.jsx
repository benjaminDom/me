import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Us</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>I am a physicist with professional experience in software development. </p>
                                            <p>I have started reflecting my ideas through the development  of web pages</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                              
                                    <h2 className="colorlib-heading">Here is some of my expertise</h2>
                                
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>Web Development </h3>
                                        <p>I have experience building websites using NodeJs,React,HTML,CSS </p>

                                        {/* <div className="thumbnail">
                                            <div className="overlay">
                                                <a href="https://tinder-clone-e3724.web.app">
                                                <img className="projectImage" alt="Ben Tinder-Croc" src="images/Animation.gif"/>
                                                <span className="text1">some text</span>
                                                </a>
                                                </div>
                                                </div> */}



                                        {/* <div className="columns portfolio-item">


                                            <div className="portfolio-item-meta">
                                                <div className="overlay">
                                                    <a href="https://tinder-clone-e3724.web.app" target="_blank">
                                                        <h5>This  is Tinder Croc</h5>
                                                        <p>Built using React and linked with firebase</p>
                                                        <img className="projectImage" alt="Ben Tinder-Croc" src="images/Animation.gif"></img></a>
                                                </div>
                                            </div>

                                        </div> */}

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-phone3" />
                                    </span>
                                    <div className="desc">
                                        <h3>Data Science & Machine Learning </h3>
                                        <p>As coming from a science background I have a good grasp the math needed for ML</p>
                                        {/* <div className="columns portfolio-item">
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <a href="https://benjamazon.herokuapp.com/" target="_blank">
                                                        <h5>This  is Benjamazon</h5>
                                                        <p>Built using NodeJS and using ML for the background colors</p>
                                                        <img className="projectImage" alt="Ben Benjamazon" src="images/Animation2.gif"></img></a>
                                                </div>
                                            </div>

                                        </div> */}

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3> IT</h3>
                                        <p> I have experience in Software development industry in the Banking area </p>
                                    </div>
                                </div>
                            </div>
                            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

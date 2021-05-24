import React, { Component } from 'react'

export default class Gallery extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="titleGallery">
                        <h2 className="colorlib-heading">THESE ARE SOME OF MY PROJECTS</h2>
                        </div>
                        <div className="row">
                            <div className="column">

                                <div className='portfolio-item'>
                                    <div className="item-wrap">

                                        <a href="https://tinder-clone-e3724.web.app" title="Tinder Croc" >

                                            <img className="projectImage" alt="Ben Tinder-Croc" src="images/Animation.gif" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                <h5>This  is Tinder Croc</h5>
                                                        <p>Built using React and linked with firebase</p>

                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                            </div>


                            <div className="column">
                                <div className='portfolio-item'>
                                    <div className="item-wrap">

                                        <a href="https://benjamazon.herokuapp.com/" title="e-commerce" >

                                            <img className="projectImage" alt="BenjAmazon" src="images/Animation2.gif" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                <h5>This  is Benjamazon</h5>
                                                        <p>Built using NodeJS and using ML for the background colors</p>

                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

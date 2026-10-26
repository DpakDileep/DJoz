import React from 'react'

export default function ContactSection() {
  return (
    <section className="contact spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="contact__address">
                        <div className="section-title">
                            <h2>Contact info</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore.</p>
                        <ul>
                            <li>
                                <i className="fa fa-map-marker"></i>
                                <h5>Address</h5>
                                <p>Los Angeles Gournadi, 1230 Bariasl</p>
                            </li>
                            <li>
                                <i className="fa fa-phone"></i>
                                <h5>Hotline</h5>
                                <span>1-677-124-44227</span>
                                <span>1-688-356-66889</span>
                            </li>
                            <li>
                                <i className="fa fa-envelope"></i>
                                <h5>Email</h5>
                                <p>Support@gamail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="contact__form">
                        <div className="section-title">
                            <h2>Get in touch</h2>
                        </div>
                        <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                            gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        <form action="#">
                            <div className="input__list">
                                <input type="text" placeholder="Name" />
                                <input type="text" placeholder="Email" />
                                <input type="text" placeholder="Website" />
                            </div>
                            <textarea placeholder="Comment"></textarea>
                            <button type="submit" className="site-btn">SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

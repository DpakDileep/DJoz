import heroBg from '../../assets/images/hero-bg.png'

export default function HeroSection() {
  return (
    <section className="hero spad set-bg" data-setbg={heroBg}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="hero__text">
                        <span>New single</span>
                        <h1>Feel the heart beats</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor
                            incididunt ut labore et dolore magna aliqua.</p>
                        <a href="https://www.youtube.com/watch?v=K4DyBUG242c" className="play-btn video-popup"><i className="fa fa-play"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="linear__icon">
            <i className="fa fa-angle-double-down"></i>
        </div>
    </section>
  )
}

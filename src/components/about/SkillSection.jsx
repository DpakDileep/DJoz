import skillVideo from "../../assets/images/skill-video.jpg"

export default function SkillSection() {
  return (
    <section className="skills spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 p-0">
                    <div className="skills__content">
                        <div className="section-title">
                            <h2>DJ Alexandra Rud</h2>
                            <h1>DJ’s skill</h1>
                        </div>
                        <p>DJ Rainflow knows how to move your mind, body and soul by delivering tracks that stand out
                            from the norm.</p>
                        <div className="skill__bar__item">
                            <p>Perform</p>
                            <div id="bar1" className="barfiller">
                                <span className="tip"></span>
                                <span className="fill" data-percentage="95"></span>
                            </div>
                        </div>
                        <div className="skill__bar__item">
                            <p>Use Midi</p>
                            <div id="bar2" className="barfiller">
                                <span className="tip"></span>
                                <span className="fill" data-percentage="85"></span>
                            </div>
                        </div>
                        <div className="skill__bar__item">
                            <p>Remix and mash up</p>
                            <div id="bar3" className="barfiller">
                                <span className="tip"></span>
                                <span className="fill" data-percentage="98"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 p-0">
                    <div className="skills__video set-bg" data-setbg={skillVideo}>
                        <a href="https://www.youtube.com/watch?v=S19UcWdOA-I?autoplay=1" className="play-btn video-popup"><i className="fa fa-play"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

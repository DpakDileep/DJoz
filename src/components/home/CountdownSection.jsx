import countdownBg from "../../assets/images/countdown-bg.jpg"

export default function CountdownSection({ isPage = false }) {
  return (
    <section className={`countdown ${isPage ? "countdown--page" : ""} spad set-bg`} data-setbg={countdownBg}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="countdown__text">
                        <h1>Tomorrowland 2020</h1>
                        <h4>Music festival start in</h4>
                    </div>
                    <div className="countdown__timer" id="countdown-time">
                        <div className="countdown__item">
                            <span>20</span>
                            <p>days</p>
                        </div>
                        <div className="countdown__item">
                            <span>45</span>
                            <p>hours</p>
                        </div>
                        <div className="countdown__item">
                            <span>18</span>
                            <p>minutes</p>
                        </div>
                        <div className="countdown__item">
                            <span>09</span>
                            <p>seconds</p>
                        </div>
                    </div>
                    <div className="buy__tickets">
                        <a href="#" className="primary-btn">Buy tickets</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

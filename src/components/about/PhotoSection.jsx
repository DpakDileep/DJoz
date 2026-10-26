import photo1 from "../../assets/images/about/ap-1.jpg"
import photo2 from "../../assets/images/about/ap-2.jpg"
import photo3 from "../../assets/images/about/ap-3.jpg"
import photo4 from "../../assets/images/about/ap-4.jpg"
import photo5 from "../../assets/images/about/ap-5.jpg"
import photo6 from "../../assets/images/about/ap-6.jpg"
import photo7 from "../../assets/images/about/ap-7.jpg"

export default function PhotoSection() {
  return (
    <div className="about-pic">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 p-0">
                            <img src={photo1} alt="" />
                            <img src={photo2} alt="" />
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8 p-0">
                            <img src={photo3} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8 p-0">
                            <img src={photo4} alt="" />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 p-0">
                            <img src={photo5} alt="" />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 p-0">
                            <img src={photo6} alt="" />
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8 p-0">
                            <img src={photo7} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

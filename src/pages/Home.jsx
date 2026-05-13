import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Tutorcomp from "../components/Tutorcomp"
import Partnercomp from "../components/Partnercomp"
import Contact from "../Data/Contact"
import '../Style/Home.css'
import {HomeSection} from "../Data/HomeSection"
import {Course} from "../Data/Course"
import {Tutor} from "../Data/Tutor"
import {Partner} from "../Data/Partner"
function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper"> <section id="home">
            <img src={HomeSection.image} />
            <div className="kolom">
          {HomeSection.content}
            </div>
        </section>

        {/* Course Section */}
        <section id="Course">
        <img src={Course.image} />
        <div className="kolom">
          {Course.content}
        </div>
        </section>

           {/* Tutor Section */}
           <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                    {Tutor.content}
                </div>
                      <Tutorcomp />
            </div>
        </section>

          {/* Partners Section */}
        <section id="partners">
            <div className="tengah">
                <div className="kolom">
                  {Partner.content}
                   
                </div>
                <Partnercomp />
            </div>
        </section>  

          {/* Contact Section */}
      <Contact/>
           
     
      </div>
      <Footer />
    </>
    )
}

export default Home

import Footer from "../components/Footer.jsx"
import Navbar from "../components/Navbar.jsx"
import Tutorcomp from "../components/Tutorcomp.jsx"
import Partnercomp from "../components/Partnercomp.jsx"
import Contact from "../Data/Contact.jsx"
import '../Style/Home.css'
import {HomeSection} from "../Data/HomeSection.jsx"
import {Course} from "../Data/Course.jsx"
import {Tutor} from "../Data/Tutor.jsx"
import {Partner} from "../Data/Partner.jsx"
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

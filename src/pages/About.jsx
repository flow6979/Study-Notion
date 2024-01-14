import React from "react";
import HighlightText from "../components/core/HomePage/HighlightText";
import bannerimage1 from "../assets/Images/aboutus1.webp";
import bannerimage2 from "../assets/Images/aboutus2.webp";
import bannerimage3 from "../assets/Images/aboutus3.webp";
import Quote from "../components/core/AboutPage/Quote";
import FoundingStory from "../assets/Images/FoundingStory.webp";
import Stats from "../components/core/AboutPage/Stats";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import Footer from "../common/Footer";
import ReviewSlider from "../common/ReviewSlideer";

const About = () => {
  return (
    <div className="text-white">
      {/* Section 1 */}
      <section className="bg-richblack-700">
        <div className="relative w-11/12 flex flex-col max-w-maxContent mx-auto justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Driving Innovation in Online Education for a
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[30%] grid w-[100%] grid-cols-3 gap-3 lg:gap-5">
            <img src={bannerimage1} alt="bannerImage" />
            <img src={bannerimage2} alt="bannerImage" />
            <img src={bannerimage3} alt="bannerImage" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="border-b border-richblack-700">
        <div className="mx-auto flex flex-col justify-between gap-10 w-11/12 max-w-maxContent text-richblack-500">
          <div className="h-[100px]"></div>
          <Quote />
        </div>
      </section>

      {/* Section 3 */}
      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          {/* Section 3 top div */}
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            {/* Founding story left box */}
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045]  text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%]">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>
            {/* Founding story right box */}
            <div>
              <img
                src={FoundingStory}
                alt="FoundingStory"
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          {/* Section 3 bottom div */}
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            {/* Our Vision left box */}
            <div className="my-14 lg:my-24 flex lg:w-[40%] flex-col gap-10">
              <h2 className="font-semibold bg-gradient-to-b from-[#E65C00] to-[#F9D423]  text-transparent bg-clip-text text-4xl lg:w-[70%]">
                Our Vision
              </h2>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            {/* Our Vision right box */}
            <div className="mt-0 mb-20 lg:my-24 flex lg:w-[40%] flex-col gap-10">
              <h2 className="text-4xl lg:w-[70%]">
                <HighlightText text={"Our Mission"} />
              </h2>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <Stats />

      {/* Section 5 */}
      <section className="mx-auto my-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      {/* Review slider */}
      <section className="w-11/12 mx-auto my-20 max-w-maxContent flex-col flex items-center justify-between gap-8 bg-richblack-900 text-white">
        <div className="text-center text-4xl font-semibold mt-10">
          Reviews from other learners
        </div>
        <ReviewSlider />
      </section>
      {/* <div className="w-11/12 mx-auto ">
        <ReviewSlider />
      </div> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;

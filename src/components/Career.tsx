import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Development Intern</h4>
                <h5>Happiloop Private Limited, Pune</h5>
              </div>
              <h3>Dec 2025 - Mar 2026</h3>
            </div>
            <p>
              Developed and enhanced web and application features using Python,
              Firebase, and AI-based development tools while contributing to live
              project implementation and testing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science Engineering Student</h4>
                <h5>Sanjivani University, Kopargaon</h5>
              </div>
              <h3>2024 - 2028</h3>
            </div>
            <p>
              Pursuing a strong academic foundation in software development,
              algorithms, and AI with a CGPA of 7.8 while looking for internship
              opportunities in Python and web development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Internship Seeker</h4>
                <h5>Software / Python Development</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Open to software and Python development internships where I can
              apply programming skills, problem solving, and teamwork on real
              industry projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

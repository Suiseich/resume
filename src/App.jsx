import React from "react";
import "./App.css";

function Header() {
  return (
    <div className="header">
      <img src="/resume.jpg" alt="Profile" className="photo" />
      <h1 className="name">MICKHEIL AARON TAYAG</h1>
    </div>
  );
}

function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>
        <strong>Address:</strong><br />
        365, Sto. Rosario Pau Sto. Tomas Pampanga
      </p>
      <p>
        <strong>Phone:</strong><br />
        +639052647856
      </p>
      <p> 
        <strong>Email:</strong><br />
        aarontayag89@gmail.com
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        <li>Programming: Python, Java, JavaScript, C++</li>
        <li>Web Development: HTML, CSS, React, Node.js</li>
        <li>Tools: Git/GitHub, VS Code, MySQL</li>
        <li>Soft Skills: Communication, Problem-solving, Teamwork</li>
      </ul>
    </section>
  );
}

function Profile() {
  return (
    <section className="profile">
      <p>
        IT student passionate about technology and web development. Dedicated to learning modern tools and practices while building real-world projects. Strong problem-solving and teamwork skills, with a commitment to continuous growth and applying classroom knowledge to practical situations.
      </p>
    </section>
  );
}

function Education() {
  return (
    <section className="education">
      <h2 className="section-title">Education</h2>
      <p>
        <strong>Bachelor of Science in Information Technology</strong><br />
        University of the Assumption – City of San Fernando Pampanga<br />
        2023 - Present
      </p>
      <p>
        <strong>Senior High School - STEM Strand</strong><br />
        University of the Assumption – City of San Fernando Pampanga<br />
        2021 - 2023
      </p>
      <p>
        <strong>Junior High School</strong><br />
        University of the Assumption – City of San Fernando Pampanga<br />
        2017 - 2021
      </p>
      <p>
        <strong>Grade School</strong><br />
        University of the Assumption – City of San Fernando Pampanga<br />
        2011 - 2017
      </p>
      <p>
        <strong>Pre-School</strong><br />
        University of the Assumption – City of San Fernando Pampanga<br />
        2009 - 2011
      </p>
    </section>
  );
}

function JobEntry({ year, title, company, details }) {
  return (
    <div className="job-entry">
      <span className="job-year">{year}</span>
      <div className="job-info">
        <h3>{title}</h3>
        <span className="company">{company}</span>
        <ul>
          {details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section className="experience">
      <h2 className="section-title">Experience</h2>
      <JobEntry
        year="2023"
        title="School Project - Web Development"
        details={[
          "Built a responsive website using HTML and CSS",
          "Designed pages to showcase content for a mass communication course.",
          "Deployed the website using a hosting service.",
        ]}
      />
      <JobEntry
        year="2025"
        title="Participant – First National AI Prompt Challenge"
        details={[
          "Competed in a national-level AI prompt engineering challenge.",
          "Gained experience in creative problem-solving and applying AI tools. ",
          "Enhanced adaptability and technical communication skills.",
        ]}
      />
    </section>
  );
}

export default function App() {
  return (
    <div className="resume-container">
      <aside className="sidebar">
        <Header />
        <Contact />
        <Skills />
      </aside>
      <main className="main-content">
        <Profile />
        <Education />
        <Experience />
      </main>
    </div>
  );
}

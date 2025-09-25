import React from "react";
import "./App.css";

function Header(props) {
  return (
    <div className="header">
      <img src={props.photo} alt="Profile" className="photo" />
      <h1 className="name">{props.name}</h1>
    </div>
  );
}

function Contact(props) {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <p><strong>Address:</strong><br />{props.address}</p>
      <p><strong>Phone:</strong><br />{props.phone}</p>
      <p><strong>Email:</strong><br />{props.email}</p>
    </section>
  );
}

function Skills(props) {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        <li>{props.skill1}</li>
        <li>{props.skill2}</li>
        <li>{props.skill3}</li>
        <li>{props.skill4}</li>
      </ul>
    </section>
  );
}

function Profile(props) {
  return (
    <section className="profile">
      <p>{props.text}</p>
    </section>
  );
}

function Education(props) {
  return (
    <section className="education">
      <h2 className="section-title">Education</h2>
      <p>
        <strong>{props.degree}</strong><br />
        {props.degreeSchool}<br />
        {props.degreeYears}
      </p>
      <p>
        <strong>{props.shs}</strong><br />
        {props.shsSchool}<br />
        {props.shsYears}
      </p>
      <p>
        <strong>{props.jhs}</strong><br />
        {props.jhsSchool}<br />
        {props.jhsYears}
      </p>
      <p>
        <strong>{props.gs}</strong><br />
        {props.gsSchool}<br />
        {props.gsYears}
      </p>
      <p>
        <strong>{props.ps}</strong><br />
        {props.psSchool}<br />
        {props.psYears}
      </p>
    </section>
  );
}

function JobEntry(props) {
  return (
    <div className="job-entry">
      <span className="job-year">{props.year}</span>
      <div className="job-info">
        <h3>{props.title}</h3>
        <ul>
          <li>{props.detail1}</li>
          <li>{props.detail2}</li>
          <li>{props.detail3}</li>
        </ul>
      </div>
    </div>
  );
}

function Experience(props) {
  return (
    <section className="experience">
      <h2 className="section-title">Experience</h2>
      <JobEntry
        year={props.exp1Year}
        title={props.exp1Title}
        detail1={props.exp1Detail1}
        detail2={props.exp1Detail2}
        detail3={props.exp1Detail3}
      />
      <JobEntry
        year={props.exp2Year}
        title={props.exp2Title}
        detail1={props.exp2Detail1}
        detail2={props.exp2Detail2}
        detail3={props.exp2Detail3}
      />
    </section>
  );
}

export default function App() {
  return (
    <div className="resume-container">
      <aside className="sidebar">
        <Header name="MICKHEIL AARON TAYAG" photo="/resume.jpg" />
        <Contact
          address="365, Sto. Rosario Pau Sto. Tomas Pampanga"
          phone="+639052647856"
          email="aarontayag89@gmail.com"
        />
        <Skills
          skill1="Programming: Python, Java, JavaScript, C++"
          skill2="Web Development: HTML, CSS, React, Node.js"
          skill3="Tools: Git/GitHub, VS Code, MySQL"
          skill4="Soft Skills: Communication, Problem-solving, Teamwork"
        />
      </aside>
      <main className="main-content">
        <Profile text="IT student passionate about technology and web development. Dedicated to learning modern tools and practices while building real-world projects." />
        <Education
          degree="Bachelor of Science in Information Technology"
          degreeSchool="University of the Assumption – City of San Fernando Pampanga"
          degreeYears="2023 - Present"
          shs="Senior High School - STEM Strand"
          shsSchool="University of the Assumption – City of San Fernando Pampanga"
          shsYears="2021 - 2023"
          jhs="Junior High School"
          jhsSchool="University of the Assumption – City of San Fernando Pampanga"
          jhsYears="2017 - 2021"
          gs="Grade School"
          gsSchool="University of the Assumption – City of San Fernando Pampanga"
          gsYears="2011 - 2017"
          ps="Pre-School"
          psSchool="University of the Assumption – City of San Fernando Pampanga"
          psYears="2009 - 2011"
        />
        <Experience
          exp1Year="2023"
          exp1Title="School Project - Web Development"
          exp1Detail1="Built a responsive website using HTML and CSS"
          exp1Detail2="Designed pages to showcase content for a mass communication course"
          exp1Detail3="Deployed the website using a hosting service"
          exp2Year="2025"
          exp2Title="Participant – First National AI Prompt Challenge"
          exp2Detail1="Competed in a national-level AI prompt engineering challenge"
          exp2Detail2="Gained experience in creative problem-solving and applying AI tools"
          exp2Detail3="Enhanced adaptability and technical communication skills"
        />
      </main>
    </div>
  );
}

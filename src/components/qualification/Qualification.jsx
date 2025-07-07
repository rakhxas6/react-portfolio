import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personel Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => {
              toggleTab(1);
            }}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => {
              toggleTab(2);
            }}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">BSc.CSIT</h3>
                <span className="qualification__subtitle">
                  Butwal Multiple Campus, TU
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2019 AD - present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">+2 Science</h3>
                <span className="qualification__subtitle">
                  Oxford Secondary School, NEB
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2017 AD - 2019 AD
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">School Level</h3>
                <span className="qualification__subtitle">
                  Shree Nawaratna Secondary School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2010 AD - 2017 AD
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Mern Stack Developer</h3>
                <span className="qualification__subtitle">
                  Himal Creations Pvt. Ltd.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2023 AD - 2024 AD
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Frontend Web Development (React.js)
                </h3>
                <span className="qualification__subtitle">
                  Aarawan Tech Pvt. Ltd.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> October 24, 2024 -
                  February 24, 2025
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Graphic Designer</h3>
                <span className="qualification__subtitle">
                  Thapa Photo Studio
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2022 AD - 2025 AD
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

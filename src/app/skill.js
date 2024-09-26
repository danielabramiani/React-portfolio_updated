"use client";

import React, { useEffect, useState } from "react";

const SkillSection = () => {
  const [htmlProgress, setHtmlProgress] = useState(0);
  const [cProgress, setcProgress] = useState(0);
  const [pythonProgress, setPythonProgress] = useState(0);
  const [reactProgress, setReactProgress] = useState(0);

  useEffect(() => {
    const intervals = [
      { setProgress: setHtmlProgress, endValue: 100, speed: 30 },
      { setProgress: setcProgress, endValue: 50, speed: 30 },
      { setProgress: setPythonProgress, endValue: 90, speed: 30 },
      { setProgress: setReactProgress, endValue: 70, speed: 30 },
    ];

    const timers = intervals.map(({ setProgress, endValue, speed }) => {
      let startValue = 0;
      return setInterval(() => {
        if (startValue < endValue) {
          startValue++;
          setProgress(startValue);
        } else {
          clearInterval(timers);
        }
      }, speed);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <section className="skill mt-5 py-5 bg-gray-200" id="about">
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="col-10 col-md-5 skill-with-progress" data-aos="slide-right">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "HTML & CSS", progress: htmlProgress, color: "#fca61f" },
              { label: "C", progress: cProgress, color: "#7d2ae8" },
              { label: "Python", progress: pythonProgress, color: "#20c997" },
              { label: "React", progress: reactProgress, color: "#3f396d" },
            ].map(({ label, progress, color }) => (
              <div key={label} className="progress-card p-5 bg-white rounded-lg shadow-md transition-transform duration-500 hover:scale-105 flex flex-col items-center">
                <div
                  className="circular-progress relative"
                  style={{
                    background: `conic-gradient(${color} ${progress * 3.6}deg, #ededed 0deg)`,
                    borderRadius: '50%',
                    height: '130px',
                    width: '130px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span className="progress-value text-2xl font-semibold">{progress}%</span>
                </div>
                <span className="text mt-2 text-lg font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-10 col-md-5 skill-detail" data-aos="slide-left">
          <div className="heading mt-5 mt-md-3">
            <small className="text-gray-600">My Skills</small>
            <h3 className="text-2xl font-bold">Beautiful & Unique Digital Experiences</h3>
            <p className="text-muted mt-2">
              I started programming on September 26, 2023, at the Goal-Oriented Academy (GOA).
            </p>
            <p className="text-muted mt-2">
              Right now, I'm learning React, and want to become a full-stack developer.
            </p>
            <button className="c-btn h-btn mt-3 py-3 px-5 bg-purple-500 text-white rounded-full shadow-md hover:bg-purple-600 transition duration-300">
              <a href="#" style={{ textDecoration: "none", color: "#fff" }}>
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;

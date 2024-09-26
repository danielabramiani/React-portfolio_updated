"use client";

import React from "react";

const ExpertiseSection = () => {
  return (
    <section className="expertise mt-5" id="service">
      <div className="heading text-center">
        <small className="text-purple-600 text-xl font-semibold">My Expertise</small>
        <h3 className="mt-2 text-3xl font-bold text-gray-800">
          Provide Wide Range of <br />
          Digital Services
        </h3>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly mt-5">
        {[
          {
            title: "Web Design",
            description: "Dolor repellendus temporibus autem quibusdam officiis debitis rerum neces aibus minima veniam.",
            imgSrc: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTCuoXStH-HqpqMhWe12jvn9vSFl0yQmJjxzvzokD1mobdnmZfu",
          },
          {
            title: "Web Development",
            description: "Dolor repellendus temporibus autem quibusdam officiis debitis rerum neces aibus minima veniam.",
            imgSrc: "https://www.nyu.edu/content/nyu/en/employees/resources-and-services/financelink/payroll/time-and-absence/jcr:content/1/par-left/nyucolumncontrol_264582659/1/nyubasicpromo.img.620.high.jpg/1613597289570.jpg",
          },
          {
            title: "AI",
            description: "Dolor repellendus temporibus autem quibusdam officiis debitis rerum neces aibus minima veniam.",
            imgSrc: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRpuy_hQtNibxl822i8y9wDe_EjjqJB2fl8R38Vx9rDEzs8ovUp",
          },
        ].map((service, index) => (
          <div key={index} className="col-10 md:col-4" data-aos="fade-up">
            <div className="service-card text-center p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="img">
                <img
                  src={service.imgSrc}
                  className="w-1/4 mx-auto"
                  alt={service.title}
                />
              </div>
              <div className="content mt-3">
                <h4 className="text-gray-800 font-bold">{service.title}</h4>
                <p className="text-muted text-gray-600">{service.description}</p>
                <a href="#" className="link text-yellow-500 hover:text-blue-500 transition duration-500">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;

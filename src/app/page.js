import './globals.css';
import Nav from "./Nav";
import Footer from "./footer.js";
import Skill from "./skill";
import ExpertiseSection from './experties';

export default function Home() {
  return (
    <>
      <Nav />
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center home">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Hi, I'm Daniel Abramiani
              <br className="hidden lg:inline-block" />
              Front-End Developer
            </h1>
            <p className="mb-8 leading-relaxed">
              Hello, I'm Daniel Abramiani, a front-end developer
              <br className="hidden lg:inline-block" />
              and future full-stack developer.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                Facebook
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                Instagram
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/461070490_1087301609624498_4015968002832859455_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=tD3NYPqsb7IQ7kNvgFkf9dd&_nc_ht=scontent.ftbs5-2.fna&_nc_gid=AkI-XRQ1XXdob7R4WrvUIzt&oh=00_AYA54aXGsgUO4iXiOaNW5CsoO5URydw8ARJxD2OCJ9XLdA&oe=66FAFC91"
            />
          </div>
        </div>
      </section>

      <ExpertiseSection />

      <Skill />

      <section className="text-gray-700 body-font relative" id="contact">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Ask me for help or work opportunities.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Submit
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500" href="mailto:danielabramiani6@email.com">danielabramiani6@gmail.com</a>
                <p className="leading-normal my-5">
                  Phone number: +995 557 520 755
                  <br />
                  Georgia, Tbilisi
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500" href="#">
                    {/* Facebook Icon */}
                  </a>
                  <a className="ml-4 text-gray-500" href="#">
                    {/* Twitter Icon */}
                  </a>
                  <a className="ml-4 text-gray-500" href="#">
                    {/* LinkedIn Icon */}
                  </a>
                  <a className="ml-4 text-gray-500" href="#">
                    {/* GitHub Icon */}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

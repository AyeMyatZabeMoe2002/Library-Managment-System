import React from 'react';
import hero from '../assets/hero.jpg'
const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 space-y-4">
          <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Welcome to Idea Hub!
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Submit your innovative and creative ideas. Start sharing your thoughts and let's make
            amazing things happen together! Let's bring your ideas to life!
          </p>
          <div className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={hero} alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

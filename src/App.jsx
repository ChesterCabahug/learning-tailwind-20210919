import React from "react";

import popularDestinations from "./data/popularDestinations";
import DestinationCard from "./components/DestinationCard";

export default function App() {
  return (
    <div>
      <div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
        <div
          className="
          px-8
          py-12
          max-w-md
          mx-auto
          sm:max-w-xl
          lg:px-12 lg:py-24 lg:max-w-full
          xl:mr-0
          2xl:col-span-2

          
        "
        >
          <div className="xl:max-w-xl">
            <img className="h-10" src="./img/logo-brand.svg" alt="Workcation" />
            <img
              className="
              mt-6
              rounded-lg
              shadow-xl
              sm:mt-8 sm:h-64 sm:w-full sm:object-cover
              object-center
              lg:hidden
            "
              src="img/beach-work.jpg"
              alt="Woman workcationing image"
            />
            <h1
              className="
              mt-6
              text-2xl
              font-bold
              text-gray-800
              sm:mt-8 sm:text-4xl
              lg:text-3xl
              xl:text-4xl

              font-headline
              tracking-tight
              font-semibold
            "
            >
              You can work from anywhere.
              <span className="text-brand">
                <br className="hidden lg:inline" />
                Take advantage of it.
              </span>
            </h1>
            <p className="mt-2 text-gray-500 sm:mt-4 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div className="mt-4 sm:mt-6">
              <a
                className="inline-block
                rounded-lg
                px-5
                py-3
                uppercase
                tracking-wider
                font-semibold
                text-sm
                sm:text-base bg-brand
                hover:bg-brand-light
                sm:hover:text-3xl
                focus:outline-none
                focus:ring
                focus:ring-offset-2
                focus:ring-brand
                focus:ring-opacity-50
                active:bg-brand-dark
                text-white mr-4  shadow-lg hover:-translate-y-0.5 transform transition"
                href="#"
              >
                Book your escape
              </a>
              <a
                className="inline-block
                  rounded-lg
                  px-5
                  py-3
                  uppercase
                  tracking-wider
                  font-semibold
                  text-sm
                  sm:text-base bg-gray-300
                  hover:bg-gray-200
                  sm:hover:text-3xl
                  focus:bg-gray-300 
                  focus:ring-opacity-50
                  active:bg-gray-400
                  text-gray-800
    "
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="hidden relative lg:block 2xl:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="img/beach-work.jpg"
            alt="Woman workcationing image"
          />
        </div>
      </div>

      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 className="text-xl text-gray-900">Popular destinations</h2>
        <p className="mt-2 text-gray-600">
          A selection of great work-friendly cities with lots to see and
          explore.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {popularDestinations.map((place) => (
            <DestinationCard destination={place} key={place.city} />
          ))}
        </div>
      </div>
    </div>
  );
}

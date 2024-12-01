import React from "react";

const Cta = () => {
  return (
    <section id="cta" className="bg-gray-50">
      <div className="container mx-auto xl:px-60 py-40 px-5 ">
        <div className="lg:grid grid-cols-3 gap-6">
          <div className="grid grid-cols-subgrid col-span-2">
            <div className="col-span-2">
              <h2 className="font-heading text-6xl">
                Never miss a Post <br /> Subscribe Now
              </h2>
              <p className="pt-5">
                I am so happy, my dear friend, so absorbed in the exquisite
                sense of mere tranquil existence, that I neglect my talents. I
                should be incapable of drawing
              </p>
            </div>
          </div>
          <div className="mt-6 lg:0">
            <div className="grid grid-cols-1 gap-2">
              <label className="block">
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500  focus:ring-gray-300 focus:ring-opacity-50"
                  placeholder="Your Name"
                />
              </label>
              <label className="block">
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500  focus:ring-gray-300 focus:ring-opacity-50"
                  placeholder="E-mail Address"
                />
              </label>
              <button
                className="bg-primary rounded-md text-white uppercase p-3 w-full"
                type="button"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

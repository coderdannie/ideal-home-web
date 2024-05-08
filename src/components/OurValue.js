import ValueSlider from './ValueSlider';
import React, { useRef, useState } from 'react';

const OurValue = () => {
  return (
    <section className=" my-[50px] md:my-[100px]  text-center">
      <div className="wrapper">
        <p className="font-sans text-2xl">Our Values</p>
        <h2 className="text-primaryColor font-sans">What do you get?</h2>
        <ValueSlider />
      </div>
    </section>
  );
};
export default OurValue;

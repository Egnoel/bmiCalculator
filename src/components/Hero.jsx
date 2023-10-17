import React, { useState } from "react";
import logo from "../assets/images/logo.svg";

const Hero = () => {
  const [selected, setSelected] = useState("tab1");
  return (
    <div className="flex w-full h-[200px] relative">
      <div className="flex w-[80%] h-[98%] bg-gradient-to-br from-[#D6E6FE] to-[#D6FCFE] rounded-br-lg rounded-bl-md ml-1"></div>
      <div className="flex w-[200px] bg-white absolute h-[150px] ml-[65%] z-10 mt-4 shadow-xl justify-center items-center">
        <div className="w-[90%] h-[90%] flex flex-col gap-2 justify-between">
          <h1 className="text-[8px] font-bold">Enter your details below</h1>
          <div className="flex justify-between flex-row text-[6px]">
            <span onClick={() => setSelected("tab1")}>Metric</span>
            <span onClick={() => setSelected("tab2")}>Imperial</span>
          </div>
          {selected === "tab1" ? (
            <div className="flex flex-row text-[6px]">
              <div>Height</div>
              <div>Weight</div>
            </div>
          ) : (
            <div className="flex flex-row text-[6px]">
              <div>Tab2</div>
              <div>Tab2</div>
            </div>
          )}
          <div className="bg-gradient-to-t from-[#345FF6] to-[#587DFF] w-full rounded-r-lg h-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

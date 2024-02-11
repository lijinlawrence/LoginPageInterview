import React from "react";
import celeb from "../assets/celeb.png";

const Form = () => {
  return (
    <>
      <div>
        <div className=" container  w-full h-[100vh] md:flex md:justify-evenly  md:items-center flex flex-col md:flex-row mx-auto ">
          <div className="  p-3 md:w-[60%] ">
            <h1  className=" md:text-4xl text-2xl text-blue-400  text-center font-bold">Unlock Exclusive Benifits</h1>

            <div className=" mt-8 mb-1">
              <label htmlFor="" className=" uppercase font-semibold">Phone Number</label>
            </div>
            <div className=" space-x-5">
              <input
                type="text"
                placeholder="+91 India"
                className="input input-bordered h-10 md:w-[44%] w-[45%] rounded-3xl"
              />

              <input
                type="text"
                placeholder="8489197490"
                className="input input-bordered h-10 md:w-[48%] w-[45%] rounded-3xl "
              />
            </div>
            <div className=" md:mt-5 mt-2 flex flex-col">
                <label htmlFor="" className=" mb-1 font-semibold">NAME</label>
                <input
                type="text"
                placeholder="Enter Your Name..."
                className="input input-bordered  w-full h-10 rounded-3xl"
              />
            </div>
            <div className=" flex flex-col md:mt-5 mt-2 ">
                <label className=" mb-1 font-semibold" htmlFor="">EMAIL[OPTIONAL]</label>
                <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full h-10 rounded-3xl"
              />
            </div>
            <div  className=" mt-8">
            <button className="btn btn-info   text-white w-full rounded-3xl text-xl">Continue</button>
            <p className=" text-gray-400 mt-1 text-xs md:text-lg text-center">Get ready to receive a secret code [otp] on your phone</p>

            </div>
          </div>
          <div className=" ">
            <img src={celeb} alt="celebration" className=" md:w-[700px] md:h-[500px]" sx />
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

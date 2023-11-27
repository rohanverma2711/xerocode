import React from "react";
import { Resources } from "../Resources";

function Navbar() {
  return (
    <>

{/* Web Component */}
      <div className=" hidden sm:block w-4/5 my-4 py-4 rounded-xlg border-1 shadow- shadow-navShadow mx-auto ">
        <div className="flex flex-row justify-between mx-20">
          <div>
            <img src={Resources.images.logo} />
          </div>
          <div className="flex flex-row">
            <a className="mx-4">Home</a>
            <a className="mx-4">Team</a>
            <a className="mx-4">Contact</a>
            <a className="mx-4">Careers</a>
          </div>
          <div>
            <div className="border-navButton text-navButton border-2 rounded-md"><p className="py-2 px-8">Sign In</p></div>
          </div>
        </div>
      </div>
      {/* Mobile Component */}

      <div className=" sm:hidden  py-2  mx-7 ">
        <div className="flex flex-row justify-between ">
          <div className="h-13 w-13 ">
            <img src={Resources.images.logomobile} />
          </div>

          <div className="pl-4 py-4">
            <img src={Resources.images.Navigation} />
          </div>
          
        </div>
        <div className="bg-navBarLine h-0.5 opacity-10"></div>
      </div>


      <div    className="text-center mx-auto w-3/5">
        <p className="font-bold text-2xl md:text-5xl my-10 text-heading">Build your audience and grow your brand</p>
        <p className="text-xs md:text-lg font-normal text-headerText">no more, no less. Deploy from our single pane of glass, manage them with ease and scale up as fast as your workload grows.</p>
        <div className=" flex justify-center items-center mt-10">
            <div className= "justify-center items-center h-12 w-32 md:w-52 border-navButton bg-navButton text-white border-2 rounded-md"><p className="py-2  px-4 md:px-8">Get Started Now</p></div>
            </div>
        
      </div>
      <div><img className="w-10/12 mx-auto" src ={Resources.images.hero}/></div>
<div className="flex flex-row  w-8/12 mx-auto justify-between ">


      <div className="flex flex-col">
        <div className="w-48 mb-10"><img src = {Resources.images.logo1web}/></div>
        <div className="w-48"><img src = {Resources.images.logo1web}/></div>
      </div>
      <div className="flex flex-col">
        <div className="w-48 mb-10"><img src = {Resources.images.logo2web}/></div>
        <div className="w-48"><img src = {Resources.images.logo2web}/></div>
      </div>
      <div className="flex flex-col">
        <div className="w-48 mb-10"><img src = {Resources.images.logo3web}/></div>
        <div className="w-48"><img src = {Resources.images.logo3web}/></div>
      </div>
      <div className="flex flex-col">
        <div className="w-48 mb-10"><img src = {Resources.images.logo4web}/></div>
        <div className="w-48"><img src = {Resources.images.logo4web}/></div>
      </div>
     

      </div>

      <div className="w-40 h-20 bg-headerButton bg-opacity-30 rounded-headerButton flex items-center justify-center mx-auto my-20">
        <p className="text-navButton font-bold">Features</p>


      </div>

      <div className="text-4.5xl font-semibold flex flex-row mx-auto items-center justify-center"><p className="text-navButton mr-3">Save 1000s</p><p className="text-heading"> of expensive coder hours</p></div>
      <div className="mt-5 mb-20"><p className="font-normal text-xl text-middleLine">With cloud native technologies, we assist in modernising infrastructure and applications for resilience and scalability.
        </p></div>

        <div className=" w-4/5 mx-auto flex flex-row">
          <div className="flex flex-row">
          <div><p className="font-bold text-middleLine text-xs mb-2">Apps</p>
          <div className="w-40 h-2 rounded-lg bg-navButton"></div></div>
          </div>
          <div className="flex flex-row">
            <div className="rounded-normal bg-middleBox border-1 bg-opacity-50 w-32 h-8">
              Add Configs

            </div>
            <div className="rounded-normal bg-middleBox border-1 bg-opacity-50 w-32 h-8">
              Pipelines

            </div>
            <div className="rounded-normal bg-middleBox border-1 bg-opacity-50 w-32 h-8">
              Infra Creation

            </div>
            <div className="rounded-normal bg-middleBox border-1 bg-opacity-50 w-32 h-8">
              Costs

            </div>
            <div className="rounded-normal bg-middleBox border-1 bg-opacity-50 w-32 h-8">
              Add On

            </div>
            <div className="rounded-normal bg-middleBox border-1 bg-opacity-50 w-32 h-8">
              Monitoring

            </div>
            <div className="rounded-normal bg-middleBox border-1 bg-opacity-50 w-32 h-8">
              Connections

            </div>

          </div>
        </div>
    </>
  );
}

export default Navbar;

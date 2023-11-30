import React from "react";
import { Resources } from "../Resources";

function MainComponent() {
  return (
    <>
      {/* Web Component */}
      <div className=" hidden sm:block w-4/5 my-4 py-4 rounded-xlg border-1  shadow-navShadow mx-auto ">
        <div className="flex flex-row justify-between mx-20">
          <div>
            <img src={Resources.images.logo} />
          </div>
          <div className="flex flex-row pt-2">
            <a className="mx-4">Home</a>
            <a className="mx-4">Team</a>
            <a className="mx-4">Contact</a>
            <a className="mx-4">Careers</a>
          </div>
          <div>
            <div className="border-navButton text-navButton border-2 rounded-md">
              <p className="py-2 px-8">Sign In</p>
            </div>
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

      <div className="text-center mx-auto w-3/5">
        <p className="font-bold text-2xl md:text-5xl my-10 text-heading">
          Build your audience and grow your brand
        </p>
        <p className="text-xs md:text-lg font-normal text-headerText">
          no more, no less. Deploy from our single pane of glass, manage them
          with ease and scale up as fast as your workload grows.
        </p>
        <div className=" flex justify-center items-center mt-10">
          <div className="justify-center items-center h-12 w-32 md:w-52 border-navButton bg-navButton text-white border-2 rounded-md">
            <p className="py-2  px-4 md:px-8">Get Started Now</p>
          </div>
        </div>
      </div>
      <div>
        <img className="w-10/12 mx-auto" src={Resources.images.hero} />
      </div>
      <div className="flex flex-row  w-8/12 mx-auto justify-between ">
        <div className="flex flex-col">
          <div className="w-48 mb-10">
            <img src={Resources.images.logo1web} />
          </div>
          <div className="w-48">
            <img src={Resources.images.logo1web} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-48 mb-10">
            <img src={Resources.images.logo2web} />
          </div>
          <div className="w-48">
            <img src={Resources.images.logo2web} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-48 mb-10">
            <img src={Resources.images.logo3web} />
          </div>
          <div className="w-48">
            <img src={Resources.images.logo3web} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-48 mb-10">
            <img src={Resources.images.logo4web} />
          </div>
          <div className="w-48">
            <img src={Resources.images.logo4web} />
          </div>
        </div>
      </div>

      <div className="w-40 h-20 bg-headerButton bg-opacity-30 rounded-headerButton flex items-center justify-center mx-auto my-20">
        <p className="text-navButton font-bold">Features</p>
      </div>

      <div className="text-4.5xl font-semibold flex flex-row mx-auto items-center justify-center">
        <p className="text-navButton mr-3">Save 1000s</p>
        <p className="text-heading"> of expensive coder hours</p>
      </div>
      <div className="mt-5 mb-20">
        <p className="font-normal text-xl text-middleLine">
          With cloud native technologies, we assist in modernising
          infrastructure and applications for resilience and scalability.
        </p>
      </div>

      <div className=" w-4/5 mx-auto flex flex-row">
        <div className="flex flex-row">
          <div>
            <p className="font-bold text-middleLine text-xs mb-2">Apps</p>
            <div className="w-36 h-2 rounded-lg bg-navButton"></div>
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="rounded-normal bg-middleBox border-1 bg-opacity-50 w-32 h-8  mx-3">
            Add Configs
          </div>
          <div className="rounded-normal bg-middleBox border-1 bg-opacity-50 w-32 h-8 mx-3">
            Pipelines
          </div>
          <div className="rounded-normal bg-middleBox border-1 bg-opacity-50 w-32 h-8 mx-3">
            Infra Creation
          </div>
          <div className="rounded-normal bg-middleBox border-1 bg-opacity-50 w-32 h-8 mx-3">
            Costs
          </div>
          <div className="rounded-normal bg-middleBox border-1 bg-opacity-50 w-32 h-8 mx-3">
            Add On
          </div>
          <div className="rounded-normal bg-middleBox border-1 bg-opacity-50 w-32 h-8 mx-3">
            Monitoring
          </div>
          <div className="rounded-normal bg-middleBox border-1 bg-opacity-50 w-32 h-8">
            Connections
          </div>
        </div>
      </div>
      <div className=" w-85/100 mx-auto my-20">
        <img src={Resources.images.screenImage} />
      </div>

      <div className="w-8.5/12 mx-auto flex flex-row justify-between">
        <div className="w-96">
          <p className="text-3xl font-bold my-20">Without Xerocode</p>
          <img src={Resources.images.without} />
        </div>
        <div>
          <p className="text-3xl font-bold my-20 ml-20">With Xerocode</p>
          <img src={Resources.images.with} />
        </div>
      </div>
      <div className="flex flex-row mx-auto w-64/100 my-20">
        <span className="text-4.5xl font-semibold text-heading">
          Self serve infrastructure platform for{" "}
          <span className="text-4.5xl font-semibold text-navButton">
            scaling teams
          </span>{" "}
        </span>
      </div>

      <div className="flex flex-row w-8.5/12 mx-auto justify-between ">
        <div className="shadow-tileShadow flex flex-row rounded-2xl p-4 w-120">
          <div className=" h-18 w-18 rounded-2xl flex  justify-center items-center shadow-custom">
            <img className="w-10 h-10" src={Resources.images.infrastructure} />
          </div>
          <div className="items-center justify-center my-auto ml-5">
            <p className="text-2xl font-semibold text-tileColortext text-left">
              Infrastructure
            </p>
            <p className="text-base font-normal text-tileSubText text-left">
              Automated Cloud Infrastructure Workflow
            </p>
          </div>
        </div>
        <div className="shadow-tileShadow flex flex-row rounded-2xl p-4 w-120">
          <div className=" h-18 w-18 rounded-2xl flex  justify-center items-center shadow-custom">
            <img className="w-10 h-10" src={Resources.images.cybersecurity} />
          </div>
          <div className="items-center justify-center my-auto ml-5">
            <p className="text-2xl font-semibold text-tileColortext text-left">
              Security
            </p>
            <p className="text-base font-normal text-tileSubText text-left">
              Modern Secure Infrastructure Approach
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-8.5/12 mx-auto justify-between my-15">
        <div className="shadow-tileShadow flex flex-row rounded-2xl p-4 w-120">
          <div className=" h-18 w-18 rounded-2xl flex  justify-center items-center shadow-custom">
            <img className="w-10 h-10" src={Resources.images.nueral} />
          </div>
          <div className="items-center justify-center my-auto ml-5">
            <p className="text-2xl font-semibold text-tileColortext text-left">
              Networking
            </p>
            <p className="text-base font-normal text-tileSubText text-left">
              Flexible Secure Application Connectivity
            </p>
          </div>
        </div>
        <div className="shadow-tileShadow flex flex-row rounded-2xl p-4 w-120 ">
          <div className=" h-18 w-18 rounded-2xl flex  justify-center items-center shadow-custom">
            <img className="w-10 h-10" src={Resources.images.development} />
          </div>
          <div className="items-center justify-center my-auto ml-5">
            <p className="text-2xl font-semibold text-tileColortext text-left">
              Applications
            </p>
            <p className="text-base font-normal text-tileSubText text-left">
              Automate Application Deployment for Agility
            </p>
          </div>
        </div>
      </div>

      {/* The Blue Region*/}
      <div className="w-95/100 mx-auto bg-navButton rounded-blueRegion ">
        <div className="py-20">
          <p className=" w-79/100 mx-auto text-4.5xl font-semibold text-white ">
            Modernize Apps, Infrastructure With Cloud Native Tech for
            Resilience, Scalability.
          </p>
        </div>

        <div className="flex flex-row w-85/100 mx-auto my-10">
          <img className="w-8.75/12 -1" src={Resources.images.cardsScreen3} />
          <div className=" ">
            <p className=" text-4.5xl font-semibold text-white leading-15 my-5 text-left">
              Real-time Risk Monitoring
            </p>
            <p className="text-xl font-normal text-white leading-9 text-left">
              Real-time risk monitoring across your infrastructure and
              application ecosystem will help you maintain ongoing compliance
              with more than 05+ different regulatory standards.
            </p>
          </div>
        </div>
        <div className="flex flex-row w-79/100 mx-auto justify-between py-20">
          <div className="w-5.5/12 flex flex-col justify-center items-center  ">
            <p className=" text-4.5xl font-semibold text-white leading-15 my-5 text-left">
              Collaborative Workflows
            </p>
            <p className="text-xl font-normal text-white leading-9 text-left">
              Share artefacts easily and collaborate with team members,
              auditors, and pen testers via automated procedures. To manage
              daily compliance with automatic notifications and reminders,
              create, assign, and track tasks.
            </p>
          </div>
          <img className=" " src={Resources.images.cardsScreen2} />
        </div>
      </div>

      {/* The Xerocode Way*/}
      <div className="w-95/100 mx-auto">
        <div className=" w-120 mx-auto my-32">
          <div className="flex flex-row  ">
            <p className="text-4.5xl font-semibold leading-13.75  align-middle mr-3">
              The Xerocode way
            </p>
            <img className="w-13 h-13" src={Resources.images.rocket} />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <p className=" text-4xl font-semibold leading-11.25 ">01</p>
          <img src={Resources.images.xerocodeLine} className="w-18 " />
        </div>

        <div className="text-2xl font-semibold mt-18 mx-auto items-center justify-center">
          <p className="text-tileColortext">Self serve Infrastructure</p>
        </div>
        <div className="mt-3 mb-20">
          <p className="font-normal text-base text-tileSubText">
            Accelerate by self-serving production-ready infrastructure and
            customize as you scale.
          </p>
        </div>

        <div className=" w-4/5 mx-auto flex flex-row">
          <div className="flex flex-row">
            <div>
              <p className="font-bold text-middleLine text-xs mb-2 flex justify-center items-center">
                Your Cloud
              </p>
              <div className="w-36 h-2 rounded-lg bg-navButton"></div>
            </div>
          </div>
          <div className="flex flex-row  ">
            <div className="rounded-normal text-xs font-bold flex justify-center items-center bg-middleBox border-1 bg-opacity-50 w-32 h-8  mx-3">
              Infra Components
            </div>
            <div className="rounded-normal text-xs font-bold  flex justify-center items-center bg-middleBox border-1 bg-opacity-50 w-32 h-8 mx-3">
              Self Hosted Apps
            </div>
          </div>
        </div>

        <div className="flex flex-row w-85/100 mx-auto my-10">
          <img className="w-100 mx-24 " src={Resources.images.cloud} />
          <div className=" w-1/2 flex flex-col justify-center items-start ">
            <p className=" text-0.5xl text-tileColortext font-semibold  leading-15  text-left">
              In Your Cloud
            </p>
            <p className="text-base font-normal  leading-7 text-left  ">
              Your infrastructure runs on your AWS or GCP account. Never get
              locked in. Infinitely scalable.Azure support coming soon
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <p className=" text-4xl font-semibold leading-11.25 ">02</p>
          <img src={Resources.images.xerocodeLine} className="w-18 " />
        </div>

        <div className="text-2xl font-semibold mt-18 mx-auto items-center justify-center">
          <p className="text-tileColortext">Deploy applications, fast!</p>
        </div>
        <div className="mt-3 mb-20">
          <p className="font-normal text-base text-tileSubText">
            Set up automated deployments of your application in 5 minutes and
            get back to building stuff that matters.
          </p>
        </div>

        <div className="flex flex-row w-85/100 mx-auto my-10  justify-between items-center">
          <div className="w-1/2">
            <img className="w-100  " src={Resources.images.pipeline} />
          </div>
          <div className=" w-1/2 flex flex-col justify-center items-start ">
            <p className=" text-0.5xl text-tileColortext font-semibold  leading-15  text-left">
              Configurable Build and Deploy pipelines
            </p>
            <p className="text-base font-normal  leading-7 text-left  ">
              Portable builds powered by Dagger and continuous deployments
              powered by ArgoCD - you gain more control of your pipelines with
              composable custom, build, and deploy stages.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse w-85/100 mx-auto my-10   items-center">
          <div className="w-1/2 flex justify-end">
            <img className="w-120   " src={Resources.images.deploy} />
          </div>
          <div className=" w-1/2 flex flex-col justify-center items-start ">
            <p className=" text-0.5xl text-tileColortext font-semibold  leading-15  text-left">
              Push to Deploy
            </p>
            <p className="text-base font-normal  leading-7 text-left  ">
              Just connect your repo with one click and push. Argonaut’s deep
              integration with GitHub Actions and GitLab pipelines build and
              deploy your code on every push.
            </p>
          </div>
        </div>
        <div className="flex flex-row w-85/100 mx-auto my-10  justify-between items-center">
          <div className="w-1/2">
            <img className="w-100  " src={Resources.images.tools} />
          </div>
          <div className=" w-1/2 flex flex-col justify-center items-start ">
            <p className=" text-0.5xl text-tileColortext font-semibold  leading-15  text-left">
              Multiple runtimes
            </p>
            <p className="text-base font-normal  leading-7 text-left  ">
              Quickly deploy apps to containerized or serverless runtimes on
              your cloud and customize architectures to cost and performance
              constraints. Deploy on Kubernetes using dockerfiles or buildpacks,
              AWS Lambda, or GCP Cloud Functions.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse w-85/100    items-center mx-auto my-10">
          <div className="w-1/2 right-0  flex justify-end">
            <img className="w-120   " src={Resources.images.scale} />
          </div>
          <div className=" w-1/2 flex flex-col justify-center items-start  ">
            <p className=" text-0.5xl text-tileColortext font-semibold  leading-15  text-left">
              Scale infinitely
            </p>
            <p className="text-base font-normal  leading-7 text-left  ">
              Every deployment is a zero-downtime deployment without you needing
              to choose custom configurations. You can easily configure
              auto-scaling, resource limits, and health-check URL to further
              optimize application uptime.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <p className=" text-4xl font-semibold leading-11.25 ">03</p>
          <img src={Resources.images.xerocodeLine} className="w-18 " />
        </div>

        <div className="text-2xl font-semibold mt-18 mx-auto items-center justify-center">
          <p className="text-tileColortext">
            Visibility into costs and metrics
          </p>
        </div>
        <div className="mt-3 mb-20">
          <p className="font-normal text-base text-tileSubText">
            Automatically track resource costs, across clouds, on every change.
            Visualize k8s pod metrics - CPU, Network, and Memory.
          </p>
        </div>

        <div className="flex flex-row w-85/100 mx-auto my-10  justify-between items-center">
          <div className="w-1/2  justify-center  flex">
            <img className="w-32 h-44  " src={Resources.images.cost} />
          </div>
          <div className=" w-1/2 flex flex-col justify-center items-start ">
            <p className=" text-0.5xl text-tileColortext font-semibold  leading-15  text-left">
              Customizable cost dashboards and reports
            </p>
            <p className="text-base font-normal  leading-7 text-left  ">
              Stay on top of your cloud spending with custom cost dashboards and
              reports — sort, filter, and group by your various accounts,
              resources, and cloud regions.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse w-85/100 mx-auto my-10   items-center">
          <div className="w-1/2 flex justify-center">
            <img className="h-56    w-64" src={Resources.images.preview} />
          </div>
          <div className=" w-1/2 flex flex-col justify-center items-start ">
            <p className=" text-0.5xl text-tileColortext font-semibold  leading-15  text-left">
              Preview infra costs
            </p>
            <p className="text-base font-normal  leading-7 text-left  ">
              See the cost of a specific resource while choosing it (before
              provisioning). It saves you the hassle of searching through the
              complex pricing pages of your cloud provider or tools.
            </p>
          </div>
        </div>
        <div className="flex flex-row w-85/100 mx-auto my-10  justify-between items-center">
          <div className="w-1/2 flex flex-row items-baseline">
            <img className=" w-52 h-36 -1" src={Resources.images.graph2} />
            <img className=" w-52 h-28  -1" src={Resources.images.graph1} />
          </div>
          <div className=" w-1/2 flex flex-col justify-center items-start ">
            <p className=" text-0.5xl text-tileColortext font-semibold  leading-15  text-left">
              Observability from day one
            </p>
            <p className="text-base font-normal  leading-7 text-left  ">
              Comes with built-in Kubernetes pod metrics. Easily plug in
              monitoring and observability tools of your choice, such as
              Grafana/Loki, DataDog, Prometheus, and more. Stay on top of your
              application metrics from day 1.
            </p>
          </div>
        </div>

        <div className="text-4.5xl font-semibold mt-18 mx-auto items-center justify-center">
          <p className="text-tileColortext">See our success stories</p>
        </div>
        <div className="my-20 ">
          <div className="flex flex-row ">
            <img className="mx-12" src={Resources.images.leftArrow} />

            <div className="shadow-reviewShadow flex-row flex justify-center items-center">
              <div className="w-40 h-56 bg-navButton rounded-l-headerButton flex justify-center items-center">
                <img
                  className="w-20 h-20 text-white"
                  src={Resources.images.quotation}
                />
              </div>
              <div className=" ml-10 w-161 mr-20">
                <p className="mb-5">
                  There are many variations of passages of lorem ipsum available
                  but the majority habe some altercation in some form by
                  injected humour or randomised wordswhich don't look slightly
                  belivable. If you are going to use a passage.
                </p>
                <div className="text-right">
                  <p>- Rohan Verma</p>
                  <p>- FrontEnd Engineer</p>
                </div>
              </div>

              <div className="h-30 w-30 rounded-full border-8  border-navButton mx-10"></div>
            </div>

            <img className="mx-12" src={Resources.images.rightArrow} />
          </div>
          <div className="flex justify-center">
            <img src={Resources.images.iconInfo} />
          </div>

          
        </div>
        <div className="bg-newsLetter rounded-xxlg">
            <div className=" flex justify-center items-center py-10">
              <img src={Resources.images.letter} />
            </div>
            <div className="text-4.5xl font-semibold mt-5 text-center leading-15">
              <p className="text-newLetterText mx-52">
                Subscribe To Our Newsletter & Get The Coupon Code.
              </p>
            </div>
            <div className="text-xl font-normal py-10 leading-9">
              <p className="text-tileColortext">
                All your information is completely confidential
              </p>
            </div>

            <div className="flex flex-row w-1/2 mx-auto  pb-24 mt-5">
              <input
                type="email"
                id="email"
                class="mr-3 w-8.75/12 bg-gray-50 border leading-10 border-gray-300 text-gray-900 text-xl rounded-xlg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Type your mail"
                required
              ></input>

              <button
                type="submit"
                class="w-3.25/12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-extrabold rounded-xlg text-2xl  sm:w-auto px-10 py-5 text-center "
              >
                Subscribe
              </button>
            </div>
          </div>
      </div>
      
    </>
  );
}

export default MainComponent;

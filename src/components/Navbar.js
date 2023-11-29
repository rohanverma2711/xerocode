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
          <p className="text-3xl font-bold">Without Xerocode</p>
          <img src={Resources.images.without} />
        </div>
        <div>
          <p className="text-3xl font-bold">With xerocode</p>
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
          <img
            className="w-8.75/12 border-2 border-black-1"
            src={Resources.images.cardsScreen3}
          />
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

        <div className="flex flex-row w-85/100 mx-auto my-10 border-1 border-black justify-between items-center">
          <div className="w-1/2">
            <img
              className="w-100  border-2 border-black-1"
              src={Resources.images.pipeline}
            />
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
        <div className="flex flex-row-reverse w-85/100 mx-auto my-10 border-1 border-black  items-center">
          <div className="w-1/2 flex justify-end">
            <img
              className="w-120  border-2 border-black-1 "
              src={Resources.images.deploy}
            />
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
        <div className="flex flex-row w-85/100 mx-auto my-10 border-1 border-black justify-between items-center">
          <div className="w-1/2">
            <img
              className="w-100  border-2 border-black-1"
              src={Resources.images.tools}
            />
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
        <div className="flex flex-row-reverse w-85/100  border-1 border-black  items-center mx-auto my-10">
          <div className="w-1/2 right-0 border-2 flex justify-end">
            <img
              className="w-120  border-2 border-black-1 "
              src={Resources.images.scale}
            />
          </div>
          <div className=" w-1/2 flex flex-col justify-center items-start border-2 border-black-1 ">
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
          <p className="text-tileColortext">Visibility into costs and metrics</p>
        </div>
        <div className="mt-3 mb-20">
          <p className="font-normal text-base text-tileSubText">
          Automatically track resource costs, across clouds, on every change. Visualize k8s pod metrics - CPU, Network, and Memory.
          </p>
        </div>


        <div className="flex flex-row w-85/100 mx-auto my-10 border-1 border-black justify-between items-center">
          <div className="w-1/2  justify-center  flex">
            <img
              className="w-32 h-44  border-2 border-black-1"
              src={Resources.images.cost}
            />
          </div>
          <div className=" w-1/2 flex flex-col justify-center items-start ">
            <p className=" text-0.5xl text-tileColortext font-semibold  leading-15  text-left">
            Customizable cost dashboards and reports
            </p>
            <p className="text-base font-normal  leading-7 text-left  ">
            Stay on top of your cloud spending with custom cost dashboards and reports — sort, filter, and group by your various accounts, resources, and cloud regions.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse w-85/100 mx-auto my-10 border-1 border-black  items-center">
          <div className="w-1/2 flex justify-center">
            <img
              className="h-56  border-2 border-black-1  w-64"
              src={Resources.images.preview}
            />
          </div>
          <div className=" w-1/2 flex flex-col justify-center items-start ">
            <p className=" text-0.5xl text-tileColortext font-semibold  leading-15  text-left">
            Preview infra costs
            </p>
            <p className="text-base font-normal  leading-7 text-left  ">
            See the cost of a specific resource while choosing it (before provisioning). It saves you the hassle of searching through the complex pricing pages of your cloud provider or tools.
            </p>
          </div>
        </div>
        <div className="flex flex-row w-85/100 mx-auto my-10 border-1 border-black justify-between items-center">
          <div className="w-1/2 flex flex-row items-baseline">
            <img
              className=" w-52 h-36 border-2 border-black-1"
              src={Resources.images.graph2}
            />
            <img
              className=" w-52 h-28  border-2 border-black-1"
              src={Resources.images.graph1}
            />
          </div>
          <div className=" w-1/2 flex flex-col justify-center items-start ">
            <p className=" text-0.5xl text-tileColortext font-semibold  leading-15  text-left">
            Observability from day one
            </p>
            <p className="text-base font-normal  leading-7 text-left  ">
            Comes with built-in Kubernetes pod metrics. Easily plug in monitoring and observability tools of your choice, such as Grafana/Loki, DataDog, Prometheus, and more. Stay on top of your application metrics from day 1.
            </p>
          </div>
        </div>

        
        <div className="text-4.5xl font-semibold mt-18 mx-auto items-center justify-center">
          <p className="text-tileColortext">See our success stories</p>
        </div>
        <div>

          <div className="flex flex-row "  >
            <img className="mx-12" src={Resources.images.leftArrow}/>

            <div className="shadow-reviewShadow flex-row flex justify-center items-center">
              <div className="w-40 h-56 bg-navButton rounded-l-headerButton flex justify-center items-center">
                <img className="w-20 h-20 text-white" src = {Resources.images.quotation}/>

              </div>
              <div className=" ml-10 w-161 mr-20">
                <p className="mb-5">There are many variations of passages of lorem ipsum available  but the majority habe some altercation in some form by injected humour or 
                  randomised wordswhich don't look slightly belivable. If you are going to use a passage.
                </p>
                <div className="text-right">

                  <p>
                   - Rohan Verma
                  </p>
                  <p>
                   - FrontEnd Engineer
                  </p>
                </div>

              </div>

              <div className="h-30 w-30 rounded-full border-8  border-navButton mx-10">

</div>
             



            </div>
            
            <img className="mx-12" src={Resources.images.rightArrow}/>
          </div>
          <div className="flex justify-center">

            <img src = {Resources.images.iconInfo}/>
          </div>




          <div className="bg-newsLetter rounded-xxlg">
            <div className=" flex justify-center items-center py-10">
            <img  src = {Resources.images.letter}/>
            </div>
          <div className="text-4.5xl font-semibold mt-5 text-center leading-15">
          <p className="text-newLetterText mx-52">Subscribe To Our Newsletter & Get The Coupon Code.</p>
        </div>
        <div className="text-xl font-normal py-10 leading-9">
          <p className="text-tileColortext">All your information is completely confidential</p>
        </div>



          </div>


        </div>

        </div>
<footer class="bg-footerColor bg-opacity-10">
  <div class="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div class="flex justify-center text-teal-600 sm:justify-start">
         
        </div>

        <p
          class="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left"
        >
        You get just what you need to run your cloud
workloads--no more, no less. 
Deploy from our single pane of glass, 
manage them with ease and scale 
up as fast as your workload grows
        </p>

        <ul class="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-teal-700 transition hover:text-teal-700/75"
            >
              <span class="sr-only">Facebook</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-teal-700 transition hover:text-teal-700/75"
            >
              <span class="sr-only">Instagram</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-teal-700 transition hover:text-teal-700/75"
            >
              <span class="sr-only">Twitter</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-teal-700 transition hover:text-teal-700/75"
            >
              <span class="sr-only">GitHub</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-teal-700 transition hover:text-teal-700/75"
            >
              <span class="sr-only">Dribbble</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div
        class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2"
      >
      

        <div class="text-center sm:text-left">
          <p class="text-lg font-medium text-gray-900">Our Links</p>

          <ul class="mt-8 space-y-4 text-sm">
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Home
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Integrations
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Team
              </a>
            </li>
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div class="text-center sm:text-left">
          <p class="text-lg font-medium text-gray-900">Our Services</p>

          <ul class="mt-8 space-y-4 text-sm">
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Infrastructure Provisioning
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Network Infrastructure Automation
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
               Cost Optimization
              </a>
            </li>
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
               Cloud Migration
              </a>
            </li>
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
               Kubernetes at Scale
              </a>
            </li>
          </ul>
        </div>

        <div class="text-center sm:text-left">
          <p class="text-lg font-medium text-gray-900">Other Links</p>

          <ul class="mt-8 space-y-4 text-sm">
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                FAQ
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Careers
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
               Privacy Policy
              </a>
            </li>
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
               Term and Condition
              </a>
            </li>
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
               Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-12 border-t border-gray-100 pt-6">
      <div class="flex flex-row justify-between">
        
<p>
  Term & Condition | Privacy Policy
</p>
        <p class="mt-4 text-sm text-gray-500  ">
         Copyright &copy; 2023 Exocode Technologies | All rights reserved
        </p>
      </div>
    </div>
  </div>
</footer>
      
    </>
  );
}

export default Navbar;

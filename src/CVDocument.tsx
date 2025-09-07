import { Cloud, Code2, Database, Palette, Server, Wrench } from "lucide-react";
import { TiltCard } from "./components/gsap/tilt-card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";

const CVDocument = () => {
  return (
    <div className="bg-white shadow-lg border border-gray-200 rounded-sm w-[210mm] min-h-[297mm] p-[20mm] mx-auto mb-8">
      {/* Header Section */}
      <div className="text-center mb-6">
        <Dialog>
            <DialogTrigger>
                <h1 className="text-lg font-bold tracking-wide text-gray-900 cursor-pointer underline">
                    FREQUEMARF PACULBA JR.
                </h1>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>
                    <h1 className="text-xl font-bold tracking-wide text-gray-900 dark:text-white">
                        FREQUEMARF PACULBA JR.
                    </h1>
                </DialogTitle>
                <DialogHeader>
                    <DialogDescription>
                        <TiltCard
                            className="w-full max-w-sm aspect-[4/5] overflow-hidden rounded border border-amber-400"
                            highlightClassName="bg-white/15 dark:bg-white/2"
                            maxTilt={25}
                        >
                            <img
                            src="IMG_3723.jpg"
                            alt="Image"
                            className="h-full w-full object-cover rounded"
                            />
                        </TiltCard>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

        <div className="text-sm leading-relaxed text-gray-700 mt-2">
          Tag-ibo, San Juan, Siquijor, Philippines | 0999-912-9152 | paculbafrick2@gmail.com
          <br />
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/frequemarf-paculba-90b3b327b/"
            className="underline text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/frequemarf-paculba-90b3b327b/
          </a>{" "}
          | Portfolio:{" "}
          <a
            href="https://freaks-fortfolio-7wnz.vercel.app/"
            className="underline text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://freaks-fortfolio-7wnz.vercel.app/
          </a>
        </div>
      </div>

    <Dialog>
        <DialogTrigger className="w-full border-b border-gray-400 pb-1 mb-3 mt-6 text-start cursor-pointer">
            {/* Professional Summary */}
            <h2 className="font-bold text-sm uppercase text-gray-900">
                Professional Summary
            </h2>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>
                <h2 className="font-bold text-sm uppercase text-gray-900 dark:text-white">
                    Professional Summary
                </h2>
            </DialogTitle>
            <DialogDescription>
                <p className="text-sm leading-relaxed text-black dark:text-white mb-4">
                    Versatile IT professional with hands-on experience in software development, IT support, and systems
                    management. Skilled in designing, deploying, and maintaining web applications, databases, and IT
                    infrastructure. Adapt at troubleshooting, automation, and data-driven solutions, with certifications in
                    IT Support, Data Analytics, and UX Design. Proven ability to solve real-world problems and improve
                    operations through technology solutions for diverse end organizations.
                </p>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
      <p className="text-sm leading-relaxed text-gray-700 mb-4">
        Versatile IT professional with hands-on experience in software development, IT support, and systems
        management. Skilled in designing, deploying, and maintaining web applications, databases, and IT
        infrastructure. Adapt at troubleshooting, automation, and data-driven solutions, with certifications in
        IT Support, Data Analytics, and UX Design. Proven ability to solve real-world problems and improve
        operations through technology solutions for diverse end organizations.
      </p>

      {/* Technical Skills */}
    <Dialog>
        <DialogTrigger className="w-full border-b border-gray-400 pb-1 mb-3 mt-6 text-start cursor-pointer">
            {/* Professional Summary */}
            <h2 className="font-bold text-sm uppercase text-gray-900">
                Technical Skills
            </h2>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>
                <h2 className="font-bold text-sm uppercase text-gray-900 dark:text-white">
                Technical Skills
                </h2>
            </DialogTitle>
            <DialogDescription>
                <div className="mt-4 space-y-3 text-sm">
                {/* IT & Support */}
                <div className="flex items-start space-x-2">
                    <Wrench className="w-5 h-5 text-blue-500 mt-0.5" />
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                    IT & Support:{" "}
                    <span className="font-normal text-gray-700 dark:text-gray-300">
                        System Troubleshooting, IT Support, Network & VPN Configuration,
                        Agile Workflows, Security & Compliance
                    </span>
                    </p>
                </div>

                {/* Databases & Platforms */}
                <div className="flex items-start space-x-2">
                    <Database className="w-5 h-5 text-green-600 mt-0.5" />
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                    Databases & Platforms:{" "}
                    <span className="font-normal text-gray-700 dark:text-gray-300">
                        MySQL, Ubuntu Server, LEMP Stack, REST APIs, .htv, Automation
                    </span>
                    </p>
                </div>

                {/* Software Development */}
                <div className="flex items-start space-x-2">
                    <Code2 className="w-5 h-5 text-purple-600 mt-0.5" />
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                    Software Development:{" "}
                    <span className="font-normal text-gray-700 dark:text-gray-300">
                        PHP, JavaScript, Laravel, React, Inertia.js, Tailwind CSS,
                        Bootstrap
                    </span>
                    </p>
                </div>

                {/* Tools & Environments */}
                <div className="flex items-start space-x-2">
                    <Server className="w-5 h-5 text-orange-600 mt-0.5" />
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                    Tools & Environments:{" "}
                    <span className="font-normal text-gray-700 dark:text-gray-300">
                        Git, Figma, Postman, VS Code, Linux (Ubuntu)
                    </span>
                    </p>
                </div>

                {/* Design & User Experience */}
                <div className="flex items-start space-x-2">
                    <Palette className="w-5 h-5 text-pink-600 mt-0.5" />
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                    Design & User Experience:{" "}
                    <span className="font-normal text-gray-700 dark:text-gray-300">
                        Responsive Design, UX Design Basics, Prototyping
                    </span>
                    </p>
                </div>

                {/* Tools */}
                <div className="flex items-start space-x-2">
                    <Cloud className="w-5 h-5 text-cyan-600 mt-0.5" />
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                    Tools:{" "}
                    <span className="font-normal text-gray-700 dark:text-gray-300">
                        Git, GitHub, Cloud Deployment, Virtual Private Server
                    </span>
                    </p>
                </div>
                </div>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
      <div className="mb-4 space-y-1">
        <p className="font-semibold text-sm text-gray-900">
          IT & Support:{" "}
          <span className="font-normal text-gray-700">
            System Troubleshooting, IT Support, Network & VPN Configuration, Agile Workflows, Security & Compliance
          </span>
        </p>
        <p className="font-semibold text-sm text-gray-900">
          Databases & Platforms:{" "}
          <span className="font-normal text-gray-700">
            MySQL, Ubuntu Server, LEMP Stack, REST APIs, .htv, Automation
          </span>
        </p>
        <p className="font-semibold text-sm text-gray-900">
          Software Development:{" "}
          <span className="font-normal text-gray-700">
            PHP, JavaScript, Laravel, React, Inertia.js, Tailwind CSS, Bootstrap
          </span>
        </p>
        <p className="font-semibold text-sm text-gray-900">
          Tools & Environments:{" "}
          <span className="font-normal text-gray-700">Git, Figma, Postman, VS Code, Linux (Ubuntu)</span>
        </p>
        <p className="font-semibold text-sm text-gray-900">
          Design & User Experience:{" "}
          <span className="font-normal text-gray-700">Responsive Design, UX Design Basics, Prototyping</span>
        </p>
        <p className="font-semibold text-sm text-gray-900">
          Tools: <span className="font-normal text-gray-700">Git, GitHub, Cloud Deployment, Virtual Private Server</span>
        </p>
      </div>

      {/* Professional Experience */}
    <Dialog>
        <DialogTrigger className="w-full border-b border-gray-400 pb-1 mb-3 mt-6 text-start cursor-pointer">
            {/* Professional Summary */}
            <h2 className="font-bold text-sm uppercase text-gray-900">
                Professional Experience
            </h2>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>
                <h2 className="font-bold text-sm uppercase text-gray-900 dark:text-white">
                    Professional Experience
                </h2>
            </DialogTitle>
            <DialogDescription>
                <div className="mb-4">
                    <p className="font-bold dark:text-white text-black">Software Development Intern</p>
                    <p className="italic dark:text-white text-black">
                    Bluebeam Systems Inc. | March 2025 - June 2025
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1 dark:text-white text-black">
                    <li>
                        Built and deployed backend modules in Laravel for QFARM, an AI-powered agriculture platform prototype,
                        contributing to MVP development presented to national startup events.
                    </li>
                    <li>
                        Deployed backend systems using Inertia.js framework, enhancing platform usability for non-technical
                        users. Contributed to early-stage user research and managed data storage optimizations with Laravel.
                    </li>
                    <li>
                        Managed MySQL database schemas and implemented geospatial farm mapping, showcased at national startup events.
                    </li>
                    </ul>
                </div>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>

      {/* Experience Item */}
      <div className="mb-4">
        <p className="font-bold text-sm text-gray-900">Software Development Intern</p>
        <p className="italic text-sm text-gray-700">
          Bluebeam Systems Inc. | March 2025 - June 2025
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1 text-sm text-gray-700">
          <li>
            Built and deployed backend modules in Laravel for QFARM, an AI-powered agriculture platform prototype,
            contributing to MVP development presented to national startup events.
          </li>
          <li>
            Deployed backend systems using Inertia.js framework, enhancing platform usability for non-technical
            users. Contributed to early-stage user research and managed data storage optimizations with Laravel.
          </li>
          <li>
            Managed MySQL database schemas and implemented geospatial farm mapping, showcased at national startup events.
          </li>
        </ul>
      </div>
        <h2 className="font-bold text-sm uppercase text-gray-900 dark:text-white w-full border-b border-gray-400 pb-1 mb-3 mt-6">
            Projects
        </h2>
      <div className="mb-4">
        <a href="OnlyFood Case Study.pdf" target="_blank" className="font-bold text-sm text-gray-900 underline">
          QFARM - OnlyFood Agriculture Research & Marketing System (Laravel, React, AI integration, Leaflet.js)
        </a>
        <ul className="list-disc ml-6 mt-2 space-y-1 text-sm text-gray-700">
          <li>
            Contributed to full-stack intern to the development of the MVP (backend modules, farm mapping,
            automated crop pricing).
          </li>
          <li>
            Integrated geospatial farm mapping and automated pricing algorithms, showcased at national startup events.
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <a href="Private File Hosting Platform with Modern Web Stack and VPN Security.pdf" target="_blank" className="font-bold text-sm text-gray-900 underline">
          Private File Hosting Platform with VPN Security (Laravel, React, LEMP Stack)
        </a>
        <ul className="list-disc ml-6 mt-2 space-y-1 text-sm text-gray-700">
          <li>
            Created a secured file storage solution with file encryption and VPN-based restricted access.
          </li>
          <li>
            Deployed on Ubuntu VPS with custom LEMP stack for personal and secure file sharing.
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="font-bold text-sm text-gray-900">
          Vehicle Maintenance Management System (Laravel, React, PWA)(in progress)
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1 text-sm text-gray-700">
          <li>
            Developed an appointment scheduler, service logs, and notification system for a local auto clinic.
          </li>
          <li>
            Integrated PWA functionality for real-time updates and offline access.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CVDocument;

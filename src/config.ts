export const siteConfig = {
  name: "Nicholas Yap",
  title: "Mechatronics Engineering Student",
  description: "Portfolio website of Nicholas Yap",
  accentColor: "#011638",
  social: {
    email: "nicholas.yap28@gmail.com",
    linkedin: "www.linkedin.com/in/nicholas-yap28",
    github: "https://github.com/Yuuki-NY",
  },
  aboutMe:
    "Hello, I'm Nicholas Yap and I am a Mechatronics Student at the University of British Columbia!",
  skills: ["SolidWorks", "Onshape CAD", "C/C++", "C#", "WinForms", "Python", "MATLAB", "MSP430FR5739 Firmware", "Code Composer Studio", "Soldering", "3D Printing"],
  projects: [
    {
      name: "Self-Balancing Wheeled Bipedal Robot: Protoype Grass",
      bullets: [
          "Built a C# WinForms application to interface with an ESP-WROOM-32 over BLE communication, allowing for wireless real-time PC control of the ESP through a client - server relationship.",
          "Prototyped a dual-PID self-balancing control system in collaboration with a partner to balance an elevated robot on two motorized wheels through accelerometer, gyroscope, and encoder input.",
          ],
          skills: ["C#", "Winforms", "Onshape CAD", "3D Printing",],
    },
    {
      name: "Soft-Robotics Octopus Claw Prototype",
      bullets: [
          "Researched and developed prototypes of a TPU-structured flexible manipulator inspired by logarithmic spirals in nature to allow for complex 3D movement and adaptable grasping capabilities.",
          ],
      skills: ["Onshape CAD", "3D Printing",],
    },
    {
      name: "Stepper Motor 2-Axis Gantry",
      bullets: [
          "Soldered a predesigned PCB to implement a MSP430FR5739 microcontroller with motor drivers and encoder inputs.",
          "Programmed firmware in Code Composer Studio to control stepper motors for G-code–based gantry operation via UART from a C# WinForms application, enabling precise image drawing through custom G - code paths. ",
          ],
        skills: ["Soldering", "C#", "WinForms", "Code Composer Studio", "MSP430FR5739 Firmware",],
    },
  ],
  experience: [
    {
      company: "Ted Rogers Centre for Heart Research + University Health Network",
      title: "Summer Research Student - Cardiac Surgery Department",
      dateRange: "May 2025 - Aug 2025",
      bullets: [
        "Designed a framework for a secure data collection system for aortic biomechanics research using REDCap, ensuring patient confidentiality and anonymity.",
        "Built custom MATLAB scripts to process and restructure existing research data for enhanced data security and streamlined management capabilities.",
        "Customized web elements using HTML and CSS to improve visual consistency and mobile compatibility.",
        "Participated in a company-sponsored animal dissection study for aortic heart research.",
      ],
    },
    {
      company: "The Dow Chemical Company",
      title: "Maintenance/Reliability Engineering Co-op",
      dateRange: "Feb 2024 - Aug 2024",
      bullets: [
        "Reprogrammed an industrial oven PID controller and created safe operating procedures, shortening maintenance and improving operator safety.",
        "Designed flange covers for shut-down pressure equipment in SolidWorks to improve the safety and repair efficiency for millwrights.",
        "Redesigned equipment cleaning procedures, reducing corrosion and extending equipment service life.",
        "Coordinated management of change (MOC) for facility renovations, equipment upgrades, and technical documentation to ensure compliant implementation and proper record keeping.",
        "Communicated with vendors, work coordinators, and operators to streamline equipment bill of materials, stocking, and upgrades to ensure up-to date management and procurement of critical equipment.",
      ],
    },
    {
      company: "The Dow Chemical Company",
      title: "Fixed Asset Integrity Engineering Co-op",
      dateRange: "Sept 2023 - Feb 2024",
      bullets: [
        "Collaborated with multiple plant operations teams to author and update Corrosion Control Documents and Integrity Operating Windows, improving reliability across all site operations.",
        "Revised ABSA regulatory documentation to ensure regulatory compliance and maintain the site\’s permission to operate.",
      ],
    },
    {
      company: "UBC Uncrewed Aircraft Systems (UAS)",
      title: "Senior Aircraft and Administrative Member",
      dateRange: "Sept 2022 - Present",
      bullets: [
        "Designed airfoil frames, landing gear, and electrical equipment mounts for a VTOL reconnaissance aircraft.",
        "Collaborated with an interdisciplinary team to develop comprehensive quadcopter and VTOL CAD assemblies in Onshape, creating functional autonomous drones for competition.",
      ],
    },
    {
      company: "SUBC - UBC's Submarine Design Team",
      title: "Frame Subteam Member",
      dateRange: "Oct 2021 - Jul 2022",
      bullets: [
        "Designed 3D models of aluminum extrusion attachments for the outer hull of a submarine.",
        "Collaborated to manufacture an aluminum frame for a submarine consistenting of aluminum extrusions and water jet cut sheets.",
      ],
    },
    {
      company: "University of Toronto Aerospace Team",
      title: "Mechanical Subsystem General Member",
      dateRange: "Sept 2020 - Jul 2021",
      bullets: [
        "Modelled servo mounts, camera mounts, and alignment frames for an autonomous driving payload carried by an aircraft.",
        "Designed a custom team-wide Google Slides presentation theme for competition.",
      ],
    },
  ],
  education: [
    {
      school: "University of British Columbia",
      degree: "Bachelor of Applied Science in Mechanical Engineering",
      dateRange: "2021-Present",
      description:
        "Mechatronics Specialization",
      achievements: [
        "CGPA: 87.8%",
        "Dean's List",
        "Swan Memorial Scholarship 2024"
      ],
    },
    {
      school: "Lillian Osborne High School",
      degree: "Alberta High School Diploma + International Baccalaureate Diploma",
      dateRange: "2021",
      achievements: [
        "Biology Award",
        "Alberta Health - Community Helpers Certification",
      ],
    },
  ],
};

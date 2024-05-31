"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import {motion} from "framer-motion"

const about = {
  title: "About me",
  description: "My name is Trần Đức Duy, and I am a final-year Information Technology student. I specialize as a frontend developer, proficient in frameworks such as ReactJS and NextJS, and have a strong grasp of JavaScript/ES6. I also gained valuable experience during my internship at FPT Software. If you would like to learn more about me, please see my attached CV below.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tran Duc Duy"
    },
    {
      fieldName: "Phone",
      fieldValue: "0905854430"
    },
    {
      fieldName: "Experience",
      fieldValue: "2"
    },
    {
      fieldName: "GitHub",
      fieldValue: "tranducduy0304"
    },
    {
      fieldName: "Email",
      fieldValue: "ducduy030401@gmail.com"
    },
    {
      fieldName: "languages",
      fieldValue: "English"
    },
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, dolores nemo? Explicabo provident dicta laudantium non unde iusto, aperiam eum sed veniam ex quaerat nemo dolor rem illo. Voluptatibus, quidem!",
  items: [
    {
      company: "FPT Software",
      position: "Backen Intern",
      duration: "Summer 2022",
    },
    {
      company: "FPT Software",
      position: "Backen Intern",
      duration: "Summer 2022",
    },
    {
      company: "FPT Software",
      position: "Backen Intern",
      duration: "Summer 2022",
    },
    {
      company: "FPT Software",
      position: "Backen Intern",
      duration: "Summer 2022",
    },
    {
      company: "FPT Software",
      position: "Backen Intern",
      duration: "Summer 2022",
    },
    {
      company: "FPT Software",
      position: "Backen Intern",
      duration: "Summer 2022",
    },
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, sunt. Culpa, dicta iusto. Quasi cupiditate obcaecati adipisci rem quidem mollitia dolorum sapiente, tenetur commodi magni, quibusdam suscipit nostrum ipsam praesentium?",
  items: [
    {
      institution: "FPT Software",
      degree: "Backen Intern",
      duration: "Summer 2022",
    },
    {
      institution: "Codecademy",
      degree: "Front-end",
      duration: "Summer 2022",
    },
    {
      institution: "Tech Institute",
      degree: "Backen Intern",
      duration: "Summer 2022",
    },
    {
      institution: "FPT Software",
      degree: "Backen Intern",
      duration: "Summer 2022",
    },
  ]
}

const skills = {
  title: "My skills",
  description: "I specialize as a frontend developer with a comprehensive skill set that includes HTML, CSS, and JavaScript/ES6. I have extensive experience with frameworks such as ReactJS and NextJS, and I am skilled in using TailwindCSS for styling and Figma for design. Additionally, I have a basic understanding of Node.js for backend development. ",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS3"
    },
    {
      icon: <FaJs />,
      name: "Javascript"
    },
    {
      icon: <FaReact />,
      name: "ReactJS"
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJS"
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS"
    },
    {
      icon: <FaFigma />,
      name: "Figma"
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJS"
    },
  ]
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80px] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mex-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Experince</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* CONTENT */}
          <div className="min-h-[70vh] w-full">

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>                 
                    {/* <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[720px] mx-auto xl:mx-0">
                      {about.info.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="flex items-center justify-center xl:justify-start gap-4"
                          >
                            <span className="text-white/60">{item.fieldName}</span>
                            <span className="text-xl">{item.fieldValue}</span>
                          </li>
                        )
                      })}
                    </ul>                */}
                </div>
            </TabsContent>

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-lg flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{ item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-lg flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{ item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>               
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>              
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
       
    </motion.div>
  )
}

export default Resume
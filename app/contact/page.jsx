"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import {motion} from "framer-motion"

const infor = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone Number",
    description: "0905854430",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ducduy030401@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Hoi An",
  },
]

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn'} }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* FORM */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form action="" className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/50">
                If you want more any information about me, please contact me via information below or you can fill form and I will contact you. Thank you!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Fristname"/>
                <Input type="lastname" placeholder="Lastname"/>
                <Input type="email" placeholder="Email"/>
                <Input type="phone" placeholder="Phone"/>
              </div>

              {/* SELECT */}
              {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">Web Development</SelectItem>
                    <SelectItem value="mst">Web Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}

              <Textarea className="h-[200px]" placeholder="Type your message here." />
              
              {/* BTN */}
              <Button size="md" className="max-w-40">Send message</Button>
            </form>
          </div>
          {/* INFO */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {infor.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div>{ item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
import Image from "next/image"
import Link from "next/link"
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
export default function Contact(){
    return(
        <div className="flex text-black h-full w-full flex-col items-center space-y-10">
        <div className = "text-6xl text-black ">
          Contact
        </div>
        <div className="text-gray-600 w-1/2 text-center text-2xl pb-4">
            If you have any questions, or would like to keep up with some of my other projects, you can connect with me on any of these platforms.
        </div>
        <div className = " flex-col text-4xl text-gray-800 items-center justify-center space-y-16 text-center">
            <div className="flex space-x-16">
                <Link href="https://www.linkedin.com/in/kylecj21/">
                    <IoLogoLinkedin className="w-40 h-40"/>
                </Link>
                <Link href="https://github.com/kylej21">
                    <FaGithub className="w-40 h-40"/>
                </Link>
            </div>
            <div className="flex space-x-16">
                <Link href="mailto:kylecj21@gmail.com">
                    <MdOutlineEmail className="w-40 h-40"/>
                </Link>
                <Link href="https://leetcode.com/kylecj21">
                    <TbBrandLeetcode className="w-40 h-40"/>
                </Link>
            </div>
        </div>
    </div>
    )
}
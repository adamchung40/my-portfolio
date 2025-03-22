import {RiReactjsLine} from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiSpring } from "react-icons/si";


const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24"> 
           <h1 className="my-20 text-center text-4xl"> Technologies </h1> 
           <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSpring className="text-7xl text-green-500 backgroundColor:blue"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </div>
           </div>
        </div>
    );
}

export default Technologies;

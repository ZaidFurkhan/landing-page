import { Copyright } from "lucide-react";
import { SiInstagram, SiX, SiGithub } from "react-icons/si";


export default function Footer() {
    return <footer>
        <div className="w-full p-10 sm:p-12 border-t  border-slate-900/50 shadow-[inset_0_4px_8px_-5px_rgba(255,255,255,0.4)]">
            <div className="flex items-center h-3 space-x-2 justify-center">
               <Copyright className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"/><span className="text-gray-400 text-sm sm:text-base">copyright @ 2026 by ZaidFurkhan</span>
            </div>
            <div className="flex gap-10 sm:gap-12 mt-6 sm:mt-8 items-center justify-center">
                <SiInstagram className="text-gray-400/50 hover:text-gray-400 h-10 w-10 sm:h-12 sm:w-12 p-2"/>
                <SiX className="text-gray-400/50 hover:text-gray-400 h-10 w-10 sm:h-12 sm:w-12 p-2"/>
                <SiGithub className="text-gray-400/50 hover:text-gray-400 h-10 w-10 sm:h-12 sm:w-12 p-2"/>
            </div>
        </div>
    </footer>
}
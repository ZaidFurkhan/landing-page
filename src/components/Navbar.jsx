import { Menu,X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ scrolled }){

    const [ menuIsOpen,setMenuIsOpen ] = useState(false)

    return  (
    <nav className={`h-16 z-50 bg-slate-950/20 backdrop-blur-lg w-full  md:h-15 py-3 px-5 sm:px-7 rounded-b-xl fixed top-0`}>
        <div className="flex items-center justify-between ">
        <div className="text-2xl font-extrabold text-amber-50">Code
            <span className="text-amber-200">Skill</span>
            <span className="text-amber-500">.</span>
        </div>
        <div className="md:flex items-center space-x-6 lg:space-x-8 hidden">
            <a href="#features" className="text-gray-300 hover:text-white text-sm lg:text-base">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white text-sm lg:text-base">Pricing</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white text-sm lg:text-base">Testimonials</a>        
        </div>
        <button className="md:hidden hover:text-gray-300 text-sm p-2" onClick={()=> setMenuIsOpen((prev) => !prev)}>
            {menuIsOpen? (<X />):(
                <Menu />
            ) }
        </button>
        </div>
        {menuIsOpen && (<div className="md:hidden bg-slate-900 backdrop-blur-3xl  mt-3 p-3 min-w-full">
            <div className="space-y-4 w-full animate-in slide-in-from-top duration-3 px-4 py-4 ">
            <a href="#features" className="text-gray-300 block hover:text-white text-sm lg:text-base" onClick={()=> setMenuIsOpen(false)}>Features</a>
            <a href="#pricing" className="text-gray-300 block hover:text-white text-sm lg:text-base" onClick={()=> setMenuIsOpen(false)}>Pricing</a>
            <a href="#testimonials" className="text-gray-300 block hover:text-white text-sm lg:text-base" onClick={()=> setMenuIsOpen(false)}>Testimonials</a>        
        </div>
        </div>)}
    </nav>
    )
}
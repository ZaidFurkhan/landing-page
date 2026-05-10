

export const codeExample = {
    "App.jsx":`
    //App//
    import { ChevronDown, X } from "lucide-react";
    import { useEffect,useState } from "react"
    
    
    export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    useEffect( ()=>{
        function handleMouseMove(e){
            setMousePosition({x:e.clientX, y: e.clientY});
        }
    
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove",handleMouseMove)
    },[]);
        `,
    "Hero.jsx":`
    //Hero//
    import { ChevronDown, X } from "lucide-react";
    import { useEffect,useState } from "react"
    
    
    export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    useEffect( ()=>{
        function handleMouseMove(e){
            setMousePosition({x:e.clientX, y: e.clientY});
        }
    
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove",handleMouseMove)
    },[]);
        `,
    "Navbar.jsx":`
    //Navbar//
    import { ChevronDown, X } from "lucide-react";
    import { useEffect,useState } from "react"
    
    
    export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    useEffect( ()=>{
        function handleMouseMove(e){
            setMousePosition({x:e.clientX, y: e.clientY});
    }
    
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove",handleMouseMove)
    },[]);
        `,

}

export const floatingCards ={
    "App.jsx": {
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400",
        textColor: "text-blue-200",
        contentColor: "text-blue-300",
        icon: "AI",
        title: "Smart Completion",
        content: "Ai powered code suggestions in real time"
    },
    "Hero.jsx": {
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400",
        textColor: "text-blue-200",
        contentColor: "text-blue-300",
        icon: "AI",
        title: "Smart Completion",
        content: "Ai powered code suggestions in real time"
    },
    "Navbar.jsx": {
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400",
        textColor: "text-blue-200",
        contentColor: "text-blue-300",
        icon: "AI",
        title: "Smart Completion",
        content: "Ai powered code suggestions in real time"
    }
}
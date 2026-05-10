import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";


const features = [
    {
        title: "AI code completion",
        description: "Intelligent code suggestions and insights powereed by advanced AI that learns from your coding patterns and activities etc",
        codeSnippet: `function handleMouseMove(e){
    setMousePosition({x:e.clientX, y: e.clientY});
    }
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove",handleMouseMove)`,
        //image: "Code-Completion",
        imagePosition: "left",
    },
    {
        title: "AI powered testing",
        description: "Intelligent code suggestions and insights powereed by advanced AI that learns from your coding patterns and activities etc",
        codeSnippet: `function handleMouseMove(e){
    setMousePosition({x:e.clientX, y: e.clientY});
    }
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove",handleMouseMove)`,
        //image: "testing",
        imagePosition: "right",
    },
    {
        title: "Smart debugging",
        description: "Intelligent code suggestions and insights powereed by advanced AI that learns from your coding patterns and activities etc",
        codeSnippet: `function handleMouseMove(e){
    setMousePosition({x:e.clientX, y: e.clientY});
    }
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove",handleMouseMove)`,
        //image: "debugging",
        imagePosition: "left",
    }
];

export default function Features() {
    return <section id="features" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                    <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">Your complete development</span><br />
                    <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">WorkFLow</span>
                </h2>
            </div>

            <div className="space-y-16 sm:space-y-20 lg:space-y-32">
                {features.map((feature, key) =>(
                    <div
                        key={key}
                        className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${feature.imagePosition === "right" ? "lg:flex-row-reverse": " "}`}>
                        {/* code section*/}
                        <div className="flex-1 w-full">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl transition-all duration-700"/>
                            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border group-hover:border-blue-600/50 transition-all duration-3">

                                {/* ide interface*/}
                                <div className="bg-gray-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm">
                                    <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500" />

                                            <div className="w-3 h-3 rounded-full bg-yellow-500" />

                                            <div className="w-3 h-3 rounded-full bg-green-500" />
                                        </div>
                                        <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">{feature.title}</span>
                                    </div>
                                    <div>
                                        <SyntaxHighlighter
                                        language="jsx"
                                        style={nightOwl}
                                        wrapLines={true}
                                        customStyle={{
                                        margin: 0,
                                        borderRadius:"8px",
                                        fontSize: "0.75rem",
                                        height:"100%",
                                        lineHeight:"1.4",
                                        background:"transparent"
                                        }}
                                        >
                                        {feature.codeSnippet}
                                        </SyntaxHighlighter>
                                    </div>
                                </div>
                            </div>
                            </div>
                            
                        </div>
                        <div className="flex-1 w-full">
                            <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                                <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">{feature.title}</h3>
                                <p className="text-gray-300 text-base text-xl sm:text-lg leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}
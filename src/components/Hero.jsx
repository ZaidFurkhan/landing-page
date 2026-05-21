"use client";

import {
  ArrowRight,
  ChevronDown,
  Sparkles,
  Play,
} from "lucide-react";

import { useEffect, useState } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

import {
  codeExample,
  floatingCards,
} from "../data/codeExamples";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [activeTab, setActiveTab] =
    useState("App.jsx");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  const currentFloatingCard =
    floatingCards?.[activeTab];

  return (
    <section className="relative min-h-screen px-2 mx-1 sm:px-10 sm:mx-3 overflow-hidden pt-20">
      {/* Mouse Glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(
            600px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(59,130,246,0.15),
            transparent 40%
          )`,
        }}
      />

      {/* Background Blur Lights */}
      <div className="absolute top-20 left-0 sm:left-10 w-56 h-56 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />

      <div className="absolute bottom-10 right-0 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT CONTENT */}
          <div className="w-full text-center p lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 hover:bg-blue-500/20 animate-in slide-in-from-bottom transition-all duration-700">
              <Sparkles className="w-4 h-4 text-blue-400" />

              <span className="text-sm text-blue-300">
                Introducing CodeSkill.AI
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-bold leading-tight mb-6 text-4xl sm:text-5xl md:text-6xl animate-in slide-in-from-bottom duration-700 delay-300">
              <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Code Faster
              </span>

              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Build Better
              </span>

              <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                With CodeSkill.AI
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 animate-in slide-in-from-bottom duration-700 delay-500">
              Accelerate your development workflow
              with intelligent code completion,
              automated testing, and smart
              debugging. Ship production-ready code
              10x faster.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 animate-in slide-in-from-bottom duration-700 delay-500">
              <button className="group w-full sm:w-auto max-w-xs px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300">
                <span>Start Coding Free</span>

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group w-full sm:w-auto max-w-xs px-8 py-4 bg-white/10 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300">
                <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center">
                  <Play className="w-4 h-4 p-0.5 fill-white" />
                </div>

                <span className="font-medium">
                  Watch Demo
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT CODE WINDOW */}
          <div className="relative w-full">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-3 sm:p-4">
              {/* Window */}
              <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 rounded-xl overflow-hidden border border-white/10 h-[420px] sm:h-[500px]">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    {/* Dots */}
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />

                      <div className="w-3 h-3 rounded-full bg-yellow-500" />

                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>

                    <span className="text-sm font-semibold text-white">
                      CodeSkill AI
                    </span>
                  </div>

                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>

                {/* Content */}
                <div className="p-4 h-full flex flex-col">
                  {/* Tabs */}
                  <div className="flex gap-1 overflow-x-auto mb-1 pb-1">
                    {[
                      "App.jsx",
                      "Hero.jsx",
                      "Navbar.jsx",
                    ].map((tab) => (
                      <button
                        key={tab}
                        onClick={() =>
                          setActiveTab(tab)
                        }
                        className={`px-4 py-2 text-sm rounded-t-lg border whitespace-nowrap transition-all duration-300 ${
                          activeTab === tab
                            ? "bg-blue-500/30 text-white border-blue-400/30"
                            : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Code */}
                  <div className="flex-auto overflow-hidden rounded-lg">
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
                                        
                      }}
                    >
                      {codeExample?.[activeTab] ||
                        "// No code available"}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>

              {/* Floating AI Card */}
              <div className="hidden lg:block absolute -bottom-8 -right-6 w-72 backdrop-blur-xl border border-white/20 rounded-2xl bg-blue-500/20 p-4 animate-in slide-in-from-bottom duration-700 delay-600">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-950/70 text-lg font-bold mb-3">
                  AI
                </div>

                <p className="text-sm text-white/80 leading-relaxed">
                  Smart AI-powered real-time code
                  suggestions with faster, cleaner,
                  and optimized development
                  workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
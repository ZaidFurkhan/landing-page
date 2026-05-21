const testimonials = [
    {
        name:"Ravi Kumar",
        role:"Senior Dev",
        image:"https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=",
        content:"This platform makes my works easy and efficient with an AI advanced features"
    },
    {
        name:"Ravi Kumar",
        role:"Senior Dev",
        image:"https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=",
        content:"This platform makes my works easy and efficient with an AI advanced features"
    },
    {
        name:"Ravi Kumar",
        role:"Senior Dev",
        image:"https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=",
        content:"This platform makes my works easy and efficient with an AI advanced features"
    }
]

export default function Testimonials() {
    return <section id="testimonials" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
            {/* left side header */}
            <div className="lg:w-1/2 w-full text-center lg:text-left">
                <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                    What Developers Are Saying About Us
                </h2>
                <p className="text-gray-400 text-xl sm:text-lg mx-auto max-w-2xl">Everything you need to build, test, and deploy applications with AI-powered development tools.</p>
            </div>

            {/* right side of testimonials */}
            <div className="lg:w-1/2 w-full ">
                <div className="space-y-6 sm:space-y-8">
                    {testimonials.map((testimonials,key) =>(
                        <div key={key} className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border sm:mb-4 mb-3 border-slate-800 rounded-xl sm:rounded-2xl">
                            <div className="flex items-start space-x-3 sm:space-x-4">
                                <div className="shrink-0">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">"</div>
                                </div>
                                <div className="grow">
                                    <p className="text-base text-white sm:text-lg leadinng-relaxed mb-4">{testimonials.content}</p>
                                    <div className="flex items-center space-x-2 sm:space-x-3"><img src={testimonials.image} alt="" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"/>
                                    <div>
                                        <h4 className="font-semibold text-white text-sm sm:text-base">{testimonials.name}</h4>
                                        <p className="text-gray-400 text-xs sm:text-sm">{testimonials.role}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>    
    </section>;
}
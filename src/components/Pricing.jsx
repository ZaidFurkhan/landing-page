import { Check, Star } from "lucide-react";


const plans = [
    {
        name:"Starter",
        price:"29.99",
        description:"Perfect for indivisuals and small teams",
        features:[
            "upto 5 team members",
            "25GB storage",
            "Email support",
            "Basic analytics"
        ],
        mostPopular:false
    },
    {
        name:"Professional",
        price:"69.99",
        description:"Best for growing businesses",
        features:[
            "upto 15 team members",
            "100GB storage",
            "Email support",
            "Telegram support",
            "Data analytics"
        ],
        mostPopular:true
    },
    {
        name:"Enterprise",
        price:"129.99",
        description:"Perfect for indivisuals and small teams",
        features:[
            "upto 50 team members",
            "2TB storage",
            "Email support",
            "Telegram support",
            "Data analytics",
            "Advance security",
            "AUtomations access"
        ],
        mostPopular:false
    }
]


export default function Pricing() {
    return <section id="pricing" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                    <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">Simple Transparent</span><br />
                    <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">Pricing Plans</span>
                </h2>
                <p className="text-gray-400 text-xl sm:text-lg mx-auto max-w-2xl">Choose the perfect plan for your needs. All plans include a 14-day free trial.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
                {plans.map((plans, key) =>(
                    <div key={key} className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-3 group flex flex-col h-full ${plans.mostPopular ? "border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105":"border-slate-800"}`}>
                        {/*glass hover effect*/}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none rounded-lg"></div>
                        {plans.mostPopular && (
                            <div className="absolute -top-2 sm:-top-3 left-1/3 transform-translate-x-1/2 z-10">
                                <div className="flex items-center text-xs sm:text-sm font-semibold shadow-lg space-x-1 px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-4xl">
                                    <Star className="h-3 w-3 fill-white" />
                                    <span>Most Popular</span>
                                </div>
                            </div>
                        )}

                        <div className="text-center mb-6 sm:mb-8">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">{plans.name}</h3>
                            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{plans.description}</p>
                            <div className="flex items-baseline justify-center">
                                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-b from-blue-500 to-cyan-500 bg-clip-text text-transparent ">{plans.price}</span>
                                <span className="text-gray-400 sm:ml-2 ml-1 text-sm sm:text-base">/month</span>
                            </div>
                        </div>

                        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-row">
                            {plans.features.map((feature, featureKey)=>(
                                <li key={featureKey} className="mt-2 sm:mt-3">
                                    <div className="flex shrink-0 items-start space-x-2 sm:space-x-3">
                                     <Check  className=" rounded-full mr-3 sm:mr-4"/>
                                     <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-3 mt-auto hover:scale-102 cursor-pointer text-sm sm:txt-base bg-white/10 hover:bg-gray-400">
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
            <div className="mt-8 sm:mt-12 text-center">
                <p className="text-gray-400 text-base sm:text-lg ">Need a custom plan? <a href="#" className="text-blue-400 hover:text-blue-300">Contact our sales team</a></p>
            </div>
        </div>  
    </section>;
}
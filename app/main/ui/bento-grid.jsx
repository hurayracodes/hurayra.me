"use client";
import { expCards } from '../ui/Data'
import { cn } from "../ui/utils";

function BentoGrid({ items = expCards }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto">
            {items.map((item, index) => (
                <div
                    key={index}
                    style={{
                        background: "rgb(4,7,29)",
                        backgroundImage: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                    className={cn(
                        "group relative p-6 rounded-xl overflow-hidden transition-all duration-300",
                        "border border-gray-100/80 dark:border-white/10",
                        "hover:shadow-[0_8px_30px_rgba(0,0,0,0.9)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.07)]",
                        item.colSpan || "col-span-1",
                        item.colSpan === 2 ? "md:col-span-2" : "",
                        {
                            "shadow-[0_8px_30px_rgba(0,0,0,0.12)] -translate-y-1":
                                item.hasPersistentHover,
                            "dark:shadow-[0_8px_30px_rgba(255,255,255,0.08)]":
                                item.hasPersistentHover,
                        }
                    )}
                >
                    <div
                        className={`absolute inset-0 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[4px_4px]" />
                    </div>

                    <div className="relative flex flex-col h-full">
                        {/* Header with Logo and Status */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-all duration-300 overflow-hidden">
                                <img 
                                    src={item.logoPath} 
                                    className='w-8 h-8 object-contain' 
                                    alt={item.company || "Company logo"} 
                                />
                            </div>
                            <span
                                className={cn(
                                    "text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm",
                                    "bg-white/5 text-gray-400 border border-white/10",
                                    "transition-colors duration-300 group-hover:bg-white/10"
                                )}
                            >
                                {item.location || "Remote"}
                            </span>
                        </div>

                        {/* Title and Company */}
                        <div className="space-y-2 mb-3">
                            <h3 className="font-bold text-gray-100 tracking-tight text-xl">
                                {item.title}
                            </h3>
                            <p className="text-sm text-cyan-400 font-medium">
                                {item.company}
                            </p>
                        </div>

                        {/* Responsibilities */}
                        <div className="flex-1 space-y-2 mb-4">
                            {item.responsibilities && Array.isArray(item.responsibilities) ? (
                                item.responsibilities.slice(0, 3).map((resp, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed">
                                        <span className="text-cyan-400 mt-1">•</span>
                                        <span>{resp}</span>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    {item.responsibilities}
                                </p>
                            )}
                        </div>

                        {/* Date and Explore Button at Bottom */}
                        <div className="flex items-center justify-between pt-4 mt-auto border-t border-white/10">
                            <span className="text-xs text-gray-500">
                                {item.date}
                            </span>
                            <span className="text-xs text-gray-500 group-hover:text-cyan-400 transition-colors duration-300">
                                {item.cta || "Explore →"}
                            </span>
                        </div>
                    </div>

                    <div
                        className={`absolute inset-0 -z-10 rounded-xl p-px bg-linear-to-br from-white/5 via-transparent to-white/5 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    />
                </div>
            ))}
        </div>
    );
}

export { BentoGrid }
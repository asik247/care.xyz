import React from "react";
import {
    FaUserNurse,
    FaChild,
    FaHeartbeat,
    FaCheckCircle,
    FaArrowRight,
} from "react-icons/fa";

const AboutSection = () => {
    return (
        <section className="py-24 bg-base-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                            Trusted Home Care Platform
                        </span>

                        <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                            Compassionate Care For
                            <span className="text-primary"> Every Family</span>
                        </h2>

                        <p className="mt-6 text-base-content/70 text-lg leading-relaxed">
                            Finding reliable caregivers shouldn’t be difficult. Our platform
                            connects families with verified and experienced caregivers for
                            elderly care, patient support, and child care services — all from
                            the comfort of your home.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-primary text-xl" />
                                <p>Verified & Trusted Caregivers</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-primary text-xl" />
                                <p>Easy Booking Process</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-primary text-xl" />
                                <p>24/7 Family Support</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-primary text-xl" />
                                <p>Affordable & Flexible Care Plans</p>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <button className="btn btn-primary rounded-full">
                                Book Caregiver
                                <FaArrowRight />
                            </button>

                            <button className="btn btn-outline rounded-full">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="relative">
                        {/* Main Card */}
                        <div className="rounded-[32px] border border-base-300 bg-base-200 p-8 backdrop-blur-xl">
                            <div className="grid gap-5">
                                {/* Elderly Care */}
                                <div className="bg-base-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                                            <FaUserNurse className="text-primary text-2xl" />
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-xl">Elderly Care</h3>
                                            <p className="text-base-content/60">
                                                Daily assistance and companionship for seniors.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Patient Care */}
                                <div className="bg-base-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                                            <FaHeartbeat className="text-primary text-2xl" />
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-xl">Patient Care</h3>
                                            <p className="text-base-content/60">
                                                Recovery support and professional home assistance.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Child Care */}
                                <div className="bg-base-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                                            <FaChild className="text-primary text-2xl" />
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-xl">Child Care</h3>
                                            <p className="text-base-content/60">
                                                Safe and reliable childcare for growing families.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Stats */}
                        <div className="hidden md:block absolute -left-10 top-12 bg-base-100 border border-base-300 shadow-xl rounded-3xl p-5">
                            <h3 className="text-3xl font-bold">500+</h3>
                            <p className="text-sm text-base-content/60">
                                Verified Caregivers
                            </p>
                        </div>

                        <div className="hidden md:block absolute -right-8 bottom-12 bg-primary text-primary-content shadow-xl rounded-3xl p-5">
                            <h3 className="text-3xl font-bold">10K+</h3>
                            <p className="text-sm opacity-90">Families Supported</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-primary">500+</h3>
                        <p className="text-base-content/60 mt-2">Caregivers</p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-primary">10K+</h3>
                        <p className="text-base-content/60 mt-2">Families Helped</p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-primary">24/7</h3>
                        <p className="text-base-content/60 mt-2">Support</p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-primary">98%</h3>
                        <p className="text-base-content/60 mt-2">Satisfaction</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
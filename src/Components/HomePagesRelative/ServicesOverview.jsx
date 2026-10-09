import React from "react";
import {
    FaUserNurse,
    FaHeartbeat,
    FaChild,
    FaHome,
    FaPills,
    FaClinicMedical,
    FaArrowRight,
} from "react-icons/fa";

const services = [
    {
        icon: <FaUserNurse />,
        title: "Elderly Care",
        description:
            "Compassionate support for seniors, ensuring comfort, safety, and companionship at home.",
    },
    {
        icon: <FaHeartbeat />,
        title: "Patient Care",
        description:
            "Professional caregivers for post-hospital recovery and daily health assistance.",
    },
    {
        icon: <FaChild />,
        title: "Child Care",
        description:
            "Trusted childcare services designed to support busy families with peace of mind.",
    },
    {
        icon: <FaClinicMedical />,
        title: "Nursing Support",
        description:
            "Qualified nursing assistance for medical needs, monitoring, and recovery support.",
    },
    {
        icon: <FaPills />,
        title: "Medication Assistance",
        description:
            "Timely medication reminders and support to help maintain treatment plans.",
    },
    {
        icon: <FaHome />,
        title: "Home Care Services",
        description:
            "Personalized in-home care tailored to individual needs and daily routines.",
    },
];

const ServicesOverview = () => {
    return (
        <section className="py-24 bg-base-100">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="max-w-3xl mx-auto text-center">
                    <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                        Our Services
                    </span>

                    <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                        Care Services Designed For Every Need
                    </h2>

                    <p className="mt-5 text-base-content/70 text-lg">
                        From elderly care to childcare and patient support, our verified
                        caregivers provide trusted assistance whenever your family needs it.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-base-200 border border-base-300 rounded-3xl p-8 hover:border-primary/30 hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl mb-6">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-3">
                                {service.title}
                            </h3>

                            <p className="text-base-content/70 leading-relaxed">
                                {service.description}
                            </p>

                            <button className="mt-6 cursor-pointer flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                                View Details
                                <FaArrowRight />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                {/* <div className="mt-20">
                    <div className="bg-primary text-primary-content rounded-[32px] p-10 md:p-14 text-center">
                        <h3 className="text-3xl md:text-4xl font-bold">
                            Need A Trusted Caregiver Today?
                        </h3>

                        <p className="mt-4 max-w-2xl mx-auto opacity-90">
                            Connect with experienced and verified caregivers who are ready
                            to support your loved ones with professional care.
                        </p>

                        <button className="btn bg-white text-black border-none rounded-full mt-8">
                            Book A Caregiver
                        </button>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default ServicesOverview;
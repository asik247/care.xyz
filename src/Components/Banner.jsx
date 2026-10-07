'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const images = [
    'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200',
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200',
    'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200',
    'https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200',
    'https://images.unsplash.com/photo-1576765608866-5b51046452be?w=1200',
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200',
];

const Banner = () => {
    return (
        <section className="relative overflow-hidden py-8 lg:py-10">
            <div className="container mx-auto px-4">

                {/* ================= HERO CONTENT ================= */}
                <div className="mx-auto max-w-5xl text-center">

                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center rounded-full border border-sky-200 px-4 py-1.5 text-sm font-semibold text-sky-600 shadow-sm"
                    >
                        Trusted Baby Sitting & Elderly Care Service
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-4xl font-black leading-tight text-gray-900 md:text-5xl lg:text-6xl"
                    >
                        Care For Your

                        <span className="block text-sky-600">
                            Loved Ones
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-600 lg:text-lg"
                    >
                        Find trusted caregivers for babies, elderly family members,
                        and individuals needing special home care. Safe, reliable,
                        and professional support whenever your family needs it.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-6 flex flex-wrap justify-center gap-4"
                    >
                        <button className="btn btn-primary rounded-full px-8">
                            Book Service
                            <FaArrowRight />
                        </button>

                        <button className="btn btn-outline rounded-full px-8">
                            Learn More
                        </button>
                    </motion.div>

                    {/* Stats */}
                    <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">

                        <div className="rounded-2xl border border-gray-100 p-4 shadow-md">
                            <h3 className="text-2xl font-bold text-sky-600">
                                1000+
                            </h3>
                            <p className="text-sm text-gray-500">
                                Happy Families
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-100 p-4 shadow-md">
                            <h3 className="text-2xl font-bold text-sky-600">
                                500+
                            </h3>
                            <p className="text-sm text-gray-500">
                                Caregivers
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-100 p-4 shadow-md">
                            <h3 className="text-2xl font-bold text-sky-600">
                                95%
                            </h3>
                            <p className="text-sm text-gray-500">
                                Satisfaction
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-100 p-4 shadow-md">
                            <h3 className="text-2xl font-bold text-sky-600">
                                24/7
                            </h3>
                            <p className="text-sm text-gray-500">
                                Support
                            </p>
                        </div>

                    </div>
                </div>

                {/* ================= IMAGE SLIDER ================= */}
                <div className="mt-10 overflow-hidden pl-10">

                    <motion.div
                        className="flex gap-5"
                        animate={{
                            x: ['0%', '-50%'],
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    >
                        {[...images, ...images].map((image, index) => (
                            <div
                                key={index}
                                className="group relative h-52 w-[300px] flex-shrink-0 overflow-hidden rounded-[26px] shadow-lg md:h-56 md:w-[330px]"
                            >
                                <Image
                                    width={500}
                                    height={350}
                                    src={image}
                                    alt="Care Service"
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-lg font-bold">
                                        Trusted Care Service
                                    </h3>

                                    <p className="text-sm text-white/90">
                                        Professional & Reliable Support
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Banner;
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        name: 'Sarah Ahmed',
        role: 'Daughter of a Senior Patient',
        image: 'https://i.pravatar.cc/150?img=32',
        review:
            'Finding a reliable caregiver for my father was stressful until I discovered this platform. The caregiver was professional, compassionate, and highly experienced.',
    },
    {
        name: 'Michael Johnson',
        role: 'Parent',
        image: 'https://i.pravatar.cc/150?img=12',
        review:
            'The booking process was smooth and simple. Our caregiver was amazing with our child and gave us complete peace of mind.',
    },
    {
        name: 'Emma Wilson',
        role: 'Patient Recovery Support',
        image: 'https://i.pravatar.cc/150?img=47',
        review:
            'After surgery I needed home assistance. The caregiver was supportive, caring, and helped me recover comfortably at home.',
    },
    {
        name: 'David Brown',
        role: 'Family Member',
        image: 'https://i.pravatar.cc/150?img=55',
        review:
            'Excellent platform. Verified caregivers, transparent communication, and truly caring professionals.',
    },
];

const Testimonials = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Blur */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 blur-3xl rounded-full" />

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="badge badge-primary badge-outline px-4 py-4">
                        Testimonials
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-6">
                        Families Trust Our Caregivers
                    </h2>

                    <p className="mt-5 text-base-content/70 text-lg">
                        Hear what families say about their experience with our trusted
                        caregiving services.
                    </p>
                </motion.div>

                {/* Slider */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        loop={true}
                        spaceBetween={24}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1280: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    whileHover={{
                                        y: -8,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                    className="bg-base-100 border border-base-300 rounded-[32px] p-8 h-full shadow-sm hover:shadow-2xl"
                                >
                                    <FaQuoteLeft className="text-primary text-4xl mb-6" />

                                    <p className="text-base-content/70 leading-relaxed min-h-[120px]">
                                        "{item.review}"
                                    </p>

                                    <div className="flex gap-1 text-yellow-400 mt-5">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 mt-8">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-14 h-14 rounded-full object-cover"
                                        />

                                        <div>
                                            <h4 className="font-bold text-lg">{item.name}</h4>
                                            <p className="text-sm text-base-content/60">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                {/* Bottom Trust Numbers */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
                >
                    {[
                        ['10K+', 'Families Supported'],
                        ['500+', 'Verified Caregivers'],
                        ['98%', 'Satisfaction Rate'],
                        ['24/7', 'Support Available'],
                    ].map(([value, label]) => (
                        <div
                            key={label}
                            className="text-center bg-base-100 rounded-3xl p-6 border border-base-300"
                        >
                            <h3 className="text-4xl font-bold text-primary">{value}</h3>
                            <p className="mt-2 text-base-content/60">{label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
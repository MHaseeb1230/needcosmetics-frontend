import { useEffect } from 'react';
import AboutTabs from '../components/AboutTabs';

const Governance = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="bg-white min-h-screen">
            {/* Main Heading with Tabs */}
            <section className="border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 md:mb-12">
                            Governance
                        </h1>
                        <AboutTabs />
                    </div>
                </div>
            </section>

            {/* Need's Cares for Its Governance - Main Section */}
            <section className="py-12 md:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
                        {/* Left Side - Image */}
                        <div className="order-2 lg:order-1">
                            <div className="overflow-hidden">
                                <img
                                    src="/images/our-impact/impact4.jpeg"
                                    alt="Need's Cares for Its Governance"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Side - Text Content */}
                        <div className="order-1 lg:order-2 text-center">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light uppercase tracking-widest text-gray-900 mb-12 leading-tight">
                                Need's Cares for Its Governance
                            </h2>
                            <div className="space-y-10">
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                                        Open & Transparent Communication
                                    </h3>
                                    <p className="text-base leading-tight tracking-tight text-gray-700">
                                        At Need's, transparency is the foundation of trust. We believe in open, honest, and timely communication with all stakeholders, ensuring clarity, accountability, and confidence in every interaction.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                                        Strong & Responsible ESG Governance
                                    </h3>
                                    <p className="text-base leading-tight tracking-tight text-gray-700">
                                        Our ESG framework is built to guide ethical decision-making and long-term sustainability. Through robust policies and responsible leadership, we ensure our environmental, social, and governance commitments are embedded into every level of our operations.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                                        Trusted & Collaborative Supply Chain Partnerships
                                    </h3>
                                    <p className="text-base leading-tight tracking-tight text-gray-700">
                                        We work closely with our supply chain partners to uphold shared values of quality, responsibility, and integrity. By fostering strong, transparent relationships, we build a resilient supply network that supports sustainable growth and mutual success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Governance;

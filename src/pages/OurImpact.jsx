import AboutTabs from '../components/AboutTabs';

const OurImpact = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Main Heading with Tabs */}
            <section className="border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 md:mb-12">
                            Our impact
                        </h1>
                        <AboutTabs />
                    </div>
                </div>
            </section>

            {/* Need’s Care for the Planet - Section 1 */}
            <section className="py-12 md:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
                        {/* Left Side - Text Content */}
                        <div className="text-center">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light uppercase tracking-widest text-gray-900 mb-6 leading-tight">
                                Our impact: Need's Care for the Planet
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 mb-12 leading-tight tracking-tight">
                                At Need's, we constantly strive to reduce our environmental impact and promote sustainable practices.
                            </p>

                            {/* Four Sections List */}
                            <div className="space-y-10">
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
                                        Reduced Emissions
                                    </h3>
                                    <p className="text-base leading-tight tracking-tight text-gray-700">
                                        We actively work to minimize carbon emissions by adopting energy-efficient processes and smarter operational practices. Our focus is on lowering environmental impact while maintaining high performance and quality standards.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
                                        Responsible Materials & Ingredients
                                    </h3>
                                    <p className="text-base leading-tight tracking-tight text-gray-700">
                                        We carefully select materials and ingredients that are safe, sustainable, and responsibly sourced. This ensures durability, efficiency, and reduced harm to the environment throughout the product lifecycle.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
                                        Responsible Waste Management
                                    </h3>
                                    <p className="text-base leading-tight tracking-tight text-gray-700">
                                        Waste reduction is a key priority in our operations. Through recycling, reuse, and proper disposal methods, we aim to minimize landfill impact and promote a cleaner, more sustainable environment.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
                                        Positive Environmental Impact
                                    </h3>
                                    <p className="text-base leading-tight tracking-tight text-gray-700">
                                        Beyond compliance, we strive to create a positive environmental footprint. By supporting eco-friendly innovations and sustainable solutions, we contribute to a healthier planet for present and future generations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <div className="lg:sticky lg:top-4">
                            <div className="overflow-hidden ">
                                <img
                                    src="/images/our-impact/impact1.jpeg"
                                    alt="Need’s Care for the Planet"
                                    className=" object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reduced Emissions & Responsible Materials - Section 2 */}
            <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
                        {/* Left Side - Image */}
                        <div className="order-2 lg:order-1">
                            <div className="overflow-hidden ">
                                <img
                                    src="/images/our-impact/impact2.jpeg"
                                    alt="Reduced Emissions"
                                    className=" object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Side - Text Content */}
                        <div className="order-1 lg:order-2 text-center">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light uppercase tracking-widest text-gray-900 mb-12 leading-tight">
                                Reduced Emissions & Responsible Materials
                            </h2>
                            <div className="space-y-10">
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                                        Reduced Emissions
                                    </h3>
                                    <p className="text-base leading-tight tracking-tight text-gray-700">
                                        We actively work to minimize carbon emissions by adopting energy-efficient processes and smarter operational practices. Our focus is on lowering environmental impact while maintaining high performance and quality standards.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                                        Responsible Materials & Ingredients
                                    </h3>
                                    <p className="text-base leading-tight tracking-tight text-gray-700">
                                        We carefully select materials and ingredients that are safe, sustainable, and responsibly sourced. This ensures durability, efficiency, and reduced harm to the environment throughout the product lifecycle.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Need’s Cares for People - Section 3 */}
            <section className="py-12 md:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
                        {/* Left Side - Text Content */}
                        <div className="text-center">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light uppercase tracking-widest text-gray-900 mb-6 leading-tight">
                                Need’s Cares for People
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 mb-12 leading-tight tracking-tight">
                                At Need's, we place our people at the heart of everything we do.
                            </p>

                            <div className="space-y-10">
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
                                        Our Team’s Well-Being Is a Priority
                                    </h3>
                                    <p className="text-base leading-tight tracking-tight text-gray-700">
                                        We promote a safe, supportive, and healthy work environment that encourages growth, balance, and long-term well-being.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
                                        Celebrating Diversity & Inclusion
                                    </h3>
                                    <p className="text-base leading-tight tracking-tight text-gray-700">
                                        We value diversity and believe inclusion drives innovation and strength. By respecting different perspectives, cultures, and experiences, we create an environment where everyone feels valued and empowered.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
                                        Positive Social Impact
                                    </h3>
                                    <p className="text-base leading-tight tracking-tight text-gray-700">
                                        Need's is committed to making a meaningful difference beyond business. Through responsible practices and community-focused initiatives, we strive to create a positive social impact that supports people and society as a whole.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <div>
                            <div className=" overflow-hidden">
                                <img
                                    src="/images/our-impact/impact3.jpeg"
                                    alt="Need’s Cares for People"
                                    className=" object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Need’s Cares for Its Governance - Section 4 */}
            <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
                        {/* Left Side - Image */}
                        <div className="order-2 lg:order-1">
                            <div className="overflow-hidden ">
                                <img
                                    src="/images/our-impact/impact4.jpeg"
                                    alt="Need’s Cares for Its Governance"
                                    className=" object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Side - Text Content */}
                        <div className="order-1 lg:order-2 text-center">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light uppercase tracking-widest text-gray-900 mb-12 leading-tight">
                                Need’s Cares for Its Governance
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

export default OurImpact;


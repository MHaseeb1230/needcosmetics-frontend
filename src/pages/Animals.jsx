import AboutTabs from '../components/AboutTabs';

const Animals = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Main Heading with Tabs */}
            <section className="border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 md:mb-12">
                            Animals
                        </h1>
                        <AboutTabs />
                    </div>
                </div>
            </section>

            {/* NEEDS CARES for ANIMALS - Main Section */}
            <section className="py-12 md:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
                        {/* Left Side - Text Content */}
                        <div className="text-left">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-700 mb-6 leading-tight">
                                NEEDS CARES for ANIMALS
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 mb-12 leading-relaxed">
                                At NEEDS, we are committed to ensuring the welfare and protection of animals. We believe in creating beauty products that are cruelty-free and ethical.
                            </p>

                            {/* Sections List */}
                            <div className="space-y-10">
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                                        Cruelty-free commitment
                                    </h3>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        We are proud to be a cruelty-free brand. None of our products or ingredients are tested on animals, and we are committed to maintaining this standard across all our operations.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                                        Ethical sourcing
                                    </h3>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        We carefully select our suppliers and partners who share our values and commitment to animal welfare. We ensure that all our ingredients are sourced ethically and responsibly.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                                        Animal welfare standards
                                    </h3>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        We adhere to the highest animal welfare standards and continuously work to improve our practices. Our commitment extends to all aspects of our supply chain and product development.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                                        Supporting animal protection
                                    </h3>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        We actively support organizations and initiatives that work towards animal protection and welfare, contributing to a better world for all living beings.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Large Portrait Image */}
                        <div className="lg:sticky lg:top-4">
                            <div className="w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=1200&fit=crop"
                                    alt="NEEDS CARES for ANIMALS"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Animals;



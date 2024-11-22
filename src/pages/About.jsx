
const About = () => {
    return (
        <div className="bg-[#97CBDC] py-12">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                {/* Heading Section */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-4">About Lingo Bingo</h2>
                    <p className="text-xl text-gray-600">A revolutionary way to master vocabulary across multiple languages.</p>
                </div>

                {/* Mission and Vision Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                        <p className="text-gray-700">
                            At Lingo Bingo, our mission is to provide a fun and engaging platform for users to learn and master new vocabulary.
                            Whether you are a beginner or an advanced learner, we offer personalized learning paths to help you grow at your own pace.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
                        <p className="text-gray-700">
                            Our vision is to become the leading language learning platform that empowers individuals to communicate confidently
                            in any language, breaking down barriers and connecting people across the globe.
                        </p>
                    </div>
                </div>

                {/* Features Section */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-extrabold text-gray-800 mb-6">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Interactive Learning</h4>
                            <p className="text-gray-700">Engage with fun and interactive exercises that help reinforce vocabulary retention.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Personalized Vocabulary</h4>
                            <p className="text-gray-700">Track your progress and customize your learning journey with tailored vocabulary lists.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Real-World Application</h4>
                            <p className="text-gray-700">Learn words that are useful in everyday conversations, travel, business, and more.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="text-center">
                    <h3 className="text-3xl font-extrabold text-gray-800 mb-6">Get in Touch</h3>
                    <p className="text-lg text-gray-600 mb-4">Have any questions? We are here to help! Reach out to us and we will get back to you as soon as possible.</p>
                    <button className="btn btn-neutral px-6 py-3 rounded-lg text-white font-semibold">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
import CountUp from "react-countup";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.avif";

const Home = () => {
    return (
        <div>
            <div className="carousel w-full h-[500px]">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src={img1}
                        className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src={img2}
                        className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src={img3}
                        className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src={img4}
                        className="w-full" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

            <section className="py-12 text-center bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-blue-600 mb-6">About Lingo Bingo</h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                        Lingo Bingo is an innovative platform designed to make learning Arabic vocabulary enjoyable, efficient, and accessible.
                        By combining interactive features with a user-friendly interface, we aim to empower learners of all levels to expand
                        their vocabulary and enhance their communication skills.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-blue-500 mb-4">Interactive Learning</h3>
                            <p className="text-gray-600">
                                Engage with interactive tools like flashcards, quizzes, and games that make vocabulary building exciting.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-blue-500 mb-4">Tailored for You</h3>
                            <p className="text-gray-600">
                                Whether you are a beginner or advanced learner, our adaptive system tailors content to your skill level and goals.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-blue-500 mb-4">Track Your Progress</h3>
                            <p className="text-gray-600">
                                Stay motivated with personalized progress tracking, achievement badges, and daily streaks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-12 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-blue-600 mb-6">How It Works</h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                        Lingo Bingo simplifies vocabulary learning with a structured, fun, and interactive approach. Here’s how:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="bg-gray-100 shadow-lg rounded-lg p-6">
                            <div className="text-4xl text-blue-500 font-bold mb-4">1</div>
                            <h3 className="text-xl font-semibold mb-2">Explore Words</h3>
                            <p className="text-gray-600">
                                Discover curated vocabulary lists tailored to your language level and interests.
                            </p>
                        </div>
                        <div className="bg-gray-100 shadow-lg rounded-lg p-6">
                            <div className="text-4xl text-blue-500 font-bold mb-4">2</div>
                            <h3 className="text-xl font-semibold mb-2">Practice & Play</h3>
                            <p className="text-gray-600">
                                Reinforce learning with engaging quizzes, flashcards, and word association games.
                            </p>
                        </div>
                        <div className="bg-gray-100 shadow-lg rounded-lg p-6">
                            <div className="text-4xl text-blue-500 font-bold mb-4">3</div>
                            <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
                            <p className="text-gray-600">
                                Monitor your growth with detailed analytics and motivational streaks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-blue-600 text-center mb-6">Why Choose Lingo Bingo?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-blue-500 mb-4">Personalized Learning</h3>
                            <p className="text-gray-600">
                                Tailor-made lessons adapt to your pace, making your learning experience unique.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-blue-500 mb-4">Multi-Language Support</h3>
                            <p className="text-gray-600">
                                Learn vocabulary in Arabic and expand to other languages in the future.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-blue-500 mb-4">Fun & Gamified</h3>
                            <p className="text-gray-600">
                                Stay engaged with gamified learning tools like daily challenges and achievements.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-blue-500 mb-4">Community Support</h3>
                            <p className="text-gray-600">
                                Join a vibrant community of learners and share your progress for added motivation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-12 bg-blue-100 text-center">
                <h2 className="text-3xl font-semibold mb-4">Our Success</h2>
                <div className="flex justify-center space-x-10">
                    <div>
                        <h3 className="text-4xl font-bold text-blue-600">
                            <CountUp end={1000} duration={3} />
                        </h3>
                        <p>Happy Users</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-blue-600">
                            <CountUp end={200} duration={3} />
                        </h3>
                        <p>Lessons</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-blue-600">
                            <CountUp end={5000} duration={3} />
                        </h3>
                        <p>Words</p>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;
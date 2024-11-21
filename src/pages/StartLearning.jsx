import { Link, useLoaderData } from "react-router-dom";
import LessonCard from "../components/LessonCard";

const StartLearning = () => {

    const lessons = useLoaderData()

    return (

        <div className="w-11/12 mx-auto py-10">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Start Your Learning Journey</h1>
                <p className="text-lg md:text-xl text-gray-700">Choose a lesson to start expanding your vocabulary.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {
                    lessons.map((lesson, idx) => <LessonCard key={idx} lesson={lesson}></LessonCard>)
                }
            </div>

            <div className="text-center my-16">
                <h2 className="text-3xl font-semibold mb-6">Learn the Alphabet</h2>
                <p className="text-lg mb-6 text-gray-700">Watch this tutorial video to get started with learning the alphabet in your new language.</p>

                <div className="w-full flex justify-center">
                    <iframe className="rounded-2xl" width="560" height="315" src="https://www.youtube.com/embed/X1mC1XY65Kc?si=AAlXacuIM9mKbSRl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                    </iframe>
                </div>
            </div>

            <div className="text-center mt-8">
                <Link to="/tutorials">
                    <button
                        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition duration-300"
                    >
                        View More Tutorials
                    </button></Link>
            </div>
        </div>
    );
};

export default StartLearning;
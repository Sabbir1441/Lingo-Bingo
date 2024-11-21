/* eslint-disable no-unused-vars */
import { Link, useLoaderData, useParams } from "react-router-dom";
import Words from "../components/Words";
import { useEffect, useState } from "react";

const Lessons = () => {

    const data = useLoaderData()

    const { lesson_no } = useParams()
    const [lessons, setLessons] = useState([])
    useEffect(() => {
        const filterByLessons = [...data].filter(
            word => word.lesson_no == lesson_no
        )
        setLessons(filterByLessons)
    }, [lesson_no, data])


    return (
        <div className="w-11/12 mx-auto ">
            <div className="text-center py-6 ">
                <h1 className="text-4xl font-bold text-blue-600">
                    Lesson {lesson_no} <br /> <span className="text-2xl">Expand Your Vocabulary</span>
                </h1>
            </div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    lessons.map(words => <Words key={words.id} words={words}></Words>)
                }
            </div>
            <div className="mt-6 text-center my-10">
                <Link
                    to="/start-learning"
                    className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
                >
                    Back to Lesson
                </Link>
            </div>
        </div>

    );
};

export default Lessons;
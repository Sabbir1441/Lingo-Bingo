/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const LessonCard = ({ lesson }) => {

    const { lesson_no, title, } = lesson;

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <Link to={`/lessons/${lesson_no}`} className="block">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 transition-all duration-300 hover:text-blue-500">Lesson {lesson_no}</h2>
                <p className="text-lg text-gray-600">{title}</p>
            </Link>
        </div>


    );
};

export default LessonCard;
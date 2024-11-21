/* eslint-disable no-unused-vars */
import {useLoaderData, useParams } from "react-router-dom";
import Words from "../components/Words";

const Lessons = () => {

    const {lesson_id} = useParams()

    const data = useLoaderData()
    console.log(data)


    return (
        <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3">
            {
                data.map(words => <Words key={words.id} words={words}></Words>)
            }
        </div>
    );
};

export default Lessons;
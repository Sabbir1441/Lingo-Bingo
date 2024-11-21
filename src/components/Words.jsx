/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// eslint-disable-next-line react/prop-types

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaVolumeUp } from 'react-icons/fa';

const Words = ({ words }) => {


    const [modalOpen, setModalOpen] = useState(false);
    const [selectedWord, setSelectedWord] = useState(null);

    const { difficulty, example, lesson_no, meaning, part_of_speech, pronunciation, when_to_say, word } = words || {}

    const pronounceWord = ({word}) => {
        if (!window.speechSynthesis) {
            alert('Speech synthesis is not supported in your browser.');
            return;
        };

        const utterance = new SpeechSynthesisUtterance({word});
        utterance.lang = 'ar-SA'; // Arabic
        window.speechSynthesis.speak(utterance);
    };

    const difficultyColors = {
        easy: "border-l-4 border-green-400 bg-green-50",
        medium: "border-l-4 border-yellow-400 bg-yellow-50",
    };

    const openModal = () => {
        setSelectedWord({
            word,
            meaning,
            when_to_say,
            example,
        });
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    return (

        <div className="mb-6">
            {/* Card */}
            <div
                className={`p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 ${difficultyColors[difficulty.toLowerCase()]}`}
            >
                <div className="flex justify-between">
                    <h3 className="text-2xl font-extrabold text-gray-800 mb-3">{word}</h3>
                    <button
                        className="btn btn-neutral flex items-center gap-2"
                        onClick={() => pronounceWord({word})}
                    >
                        <FaVolumeUp className="text-lg" /> 
                    </button>
                </div>
                <p className="text-gray-700">
                    <span className="font-semibold">Meaning:</span> {meaning}
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold">Pronunciation:</span> {pronunciation}
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold">Part of Speech:</span>{" "}
                    {part_of_speech}
                </p>
                <button
                    className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                    onClick={openModal}
                >
                    When to Say
                </button>
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                        >
                            <AiOutlineClose className="text-2xl" />
                        </button>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            {selectedWord.word}
                        </h3>
                        <p className="text-gray-700 mb-3">
                            <span className="font-semibold">Meaning:</span>{" "}
                            {selectedWord.meaning}
                        </p>
                        <p className="text-gray-700 mb-3">
                            <span className="font-semibold">When to Say:</span>{" "}
                            {selectedWord.when_to_say}
                        </p>
                        <p className="text-gray-700 mb-3">
                            <span className="font-semibold">Example:</span>{" "}
                            {selectedWord.example}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Words;
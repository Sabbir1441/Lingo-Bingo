/* eslint-disable no-unused-vars */

// eslint-disable-next-line react/prop-types
const Words = ({ words }) => {

    const { difficulty, example, lesson_no, meaning, part_of_speech, pronunciation, when_to_say, word } = words || {}

    return (
        <div>
            {word}
        </div>
    );
};

export default Words;
import React from 'react';

import Text48 from '../text/Text48fw500';

const Answer = ({
    text = '',
    id = 0,
    changeAnswer,
    isSelected = false,
    answered = false,
    isCorrectAnswer = false,
}) => {
    const classSelected = answered
        ? isSelected
            ? isCorrectAnswer
                ? 'answer answer--correct'
                : 'answer answer--incorrect'
            : isCorrectAnswer
            ? 'answer answer--correct'
            : 'answer'
        : !isSelected
        ? 'answer answer--hover'
        : 'answer answer__checked';
    const classCheckbox = !answered
        ? 'checkbox'
        : isSelected
        ? isCorrectAnswer
            ? 'checkbox checkbox--correct'
            : 'checkbox checkbox--incorrect'
        : isCorrectAnswer
        ? 'checkbox checkbox--correct'
        : 'checkbox';
    return (
        <div className="cont-answer">
            <label className={classSelected}>
                <input
                    type="radio"
                    name="answer"
                    value={id}
                    onChange={() => {
                        changeAnswer(id);
                    }}
                    disabled={answered}
                />
                <div className={classCheckbox}>
                    {!answered ? (
                        isSelected ? (
                            <div className="checkbox__checked checkbox__checked--answer" />
                        ) : (
                            <div className="checkbox__checked" />
                        )
                    ) : !isSelected ? (
                        isCorrectAnswer ? (
                            <div className="checkbox__checked checkbox__checked--correct" />
                        ) : (
                            <></>
                        )
                    ) : isCorrectAnswer ? (
                        <div className="checkbox__checked checkbox__checked--correct" />
                    ) : (
                        <div className="checkbox__checked checkbox__checked--incorrect" />
                    )}
                </div>
                <Text48 text={text} />
            </label>
        </div>
    );
};

export default Answer;

import React from 'react';
import axios from 'axios';
import ClockLoader from 'react-spinners/ClockLoader';

import { RANDOM_WORD } from '../../constants/urls';

import Button from '../button';
import Text36 from '../text/Text36';
import Text64 from '../text/Text64';
import Text16 from '../text/Text16';
import Answer from './Answer';

import './card.css';

const Card = () => {
    const [word, setWord] = React.useState({});
    const [idAnswer, setIdAnswer] = React.useState(0);
    const [answered, setAnswered] = React.useState(false);
    const [isCorrectAnswer, setIsCorrectAnswer] = React.useState(false);
    const [showButton, setShowButton] = React.useState(false);
    const [classCard, setCardClass] = React.useState(
        'card card--first card--show',
    );
    const [newWord, setNewWord] = React.useState(true);
    const [reload, setReload] = React.useState(true);
    const [reloadTime, setReloadTime] = React.useState(false);

    React.useEffect(() => {
        setIdAnswer(0);
        setAnswered(false);
        setIsCorrectAnswer(false);
        setShowButton(false);

        axios
            .get(RANDOM_WORD)
            .then(({ data }) => {
                setWord(data.payload);
                setCardClass('card card--first card--show');
                setReloadTime(false);
            })
            .catch(() => {
                setReloadTime(true);
            });
    }, [newWord, reload]);

    const changeAnswer = (id) => {
        if (!showButton) setShowButton(true);
        setWord({
            ...word,
            translateWords: word.translateWords.map((rusWord) =>
                rusWord.id === id
                    ? { ...rusWord, isSelected: true }
                    : { ...rusWord, isSelected: false },
            ),
        });
        setIdAnswer(id);
    };
    const checkAnswer = () => {
        setAnswered(true);
        if (word.translateWords.filter((w) => w.id === idAnswer)[0].isCorrect) {
            setIsCorrectAnswer(true);
        } else {
            setIsCorrectAnswer(false);
        }
    };
    const changeWord = () => {
        setCardClass('card card--first card--leave');
        setTimeout(() => {
            setNewWord(!newWord);
        }, 1000);
    };
    const nextWord = () => {
        if (isCorrectAnswer) {
            console.log('Add this word in your lexicon');
            changeWord();
        } else {
            console.log("Don't memorize this word");
            changeWord();
        }
    };
    const memorizeWord = () => {
        console.log('Memorize this word');
        changeWord();
    };

    const reloadCard = () => {
        setReload(!reload);
    };

    return (
        <div className="cont-card">
            <div className="card card--back card--second">
                <div className="center-loader">
                    <ClockLoader size={200} color="#765738" />
                    {reloadTime ? (
                        <div
                            className="reload-card"
                            onClick={() => {
                                reloadCard();
                            }}>
                            {' '}
                            <Text16 text="Перезагрузить" />
                        </div>
                    ) : null}
                </div>
            </div>
            <div className="card card--back card--third" />
            <div className={classCard}>
                {!Object.keys(word).length ? (
                    <div className="center-loader">
                        <ClockLoader size={200} color="#765738" />
                        <div
                            className="reload-card"
                            onClick={() => {
                                reloadCard();
                            }}>
                            {' '}
                            <Text16 text="Перезагрузить" />
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="card__header">
                            <Text36 text={`Word #${word.id}`} />
                            <Text36 text={`Слово #${word.id}`} />
                        </div>
                        <div className="card__word">
                            <Text64 text={word.engWord} />
                            <div className="answers">
                                {word.translateWords.map((rusWord) => (
                                    <Answer
                                        key={rusWord.id}
                                        text={rusWord.text}
                                        id={rusWord.id}
                                        changeAnswer={changeAnswer}
                                        isSelected={rusWord.isSelected}
                                        answered={answered}
                                        isCorrectAnswer={rusWord.isCorrect}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="card__button">
                            {!showButton ? (
                                <div className="empty-button card__button" />
                            ) : !answered ? (
                                <div
                                    onClick={() => {
                                        checkAnswer();
                                    }}>
                                    <Button
                                        engText="Answer"
                                        rusText="Ответить"
                                    />
                                </div>
                            ) : isCorrectAnswer ? (
                                <div
                                    onClick={() => {
                                        nextWord();
                                    }}>
                                    <Button
                                        engText="Next"
                                        rusText="Следующее"
                                        color="#00529E"
                                    />
                                </div>
                            ) : (
                                <div className="buttons">
                                    <div
                                        onClick={() => {
                                            nextWord();
                                        }}>
                                        <Button
                                            engText="Next"
                                            rusText="Следующее"
                                            color="#00529E"
                                        />
                                    </div>
                                    <div
                                        onClick={() => {
                                            memorizeWord();
                                        }}>
                                        <Button
                                            engText="Memorize"
                                            rusText="Запомнить"
                                            color="#00529E"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="card__footer">
                            <div
                                onClick={() => {
                                    changeWord();
                                }}>
                                <Text36 text={`Skip`} color="#9E0000" />
                            </div>
                            <div
                                onClick={() => {
                                    changeWord();
                                }}>
                                <Text36 text={`Пропустить`} color="#9E0000" />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Card;

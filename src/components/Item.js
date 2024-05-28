import React, { useState } from "react";
import "./Items.css";
import image1 from "./images/riddle1.jpg"
import image2 from "./images/riddle2.jpg"
import image3 from "./images/riddle3.jpg"


const Items = () => {
    const riddles = [
        {
            id: 1,
            description: "Что можно увидеть с закрытыми глазами?",
            option1: "Сон",
            option2: "Тьму",
            option3: "Свет",
            option4: "Музыку",
            correct: 1,
            image: image1
        },
        {
            id: 2,
            description: "Что идет, не двигаясь с места?",
            option1: "Время",
            option2: "Тень",
            option3: "Вода",
            option4: "Дорога",
            correct: 1,
            image: image2
        },
        {
            id: 3,
            description: "Что можно приготовить, но нельзя съесть?",
            option1: "Ужин",
            option2: "Задание",
            option3: "Планы",
            option4: "Фотография",
            correct: 3,
            image: image3
        },
    ];

    const [answers, setAnswers] = useState({});

    const handleAnswer = (riddleId, optionIndex) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [riddleId]: optionIndex
        }));
    };

    const riddleItems = riddles.map((riddle) => (
        <div key={riddle.id} className="riddle">
            <h2>Загадка {riddle.id}</h2>
            <img src={riddle.image} alt={`Riddle ${riddle.id}`} className="riddle-image" />
            <p>{riddle.description}</p>
            <div className="options">
                <button
                    className={answers[riddle.id] === 1 ? "selected" : ""}
                    onClick={() => handleAnswer(riddle.id, 1)}
                >
                    {riddle.option1}
                </button>
                <button
                    className={answers[riddle.id] === 2 ? "selected" : ""}
                    onClick={() => handleAnswer(riddle.id, 2)}
                >
                    {riddle.option2}
                </button>
                <button
                    className={answers[riddle.id] === 3 ? "selected" : ""}
                    onClick={() => handleAnswer(riddle.id, 3)}
                >
                    {riddle.option3}
                </button>
                <button
                    className={answers[riddle.id] === 4 ? "selected" : ""}
                    onClick={() => handleAnswer(riddle.id, 4)}
                >
                    {riddle.option4}
                </button>
            </div>
            {answers[riddle.id] && (
                <p className={answers[riddle.id] === riddle.correct ? "correct" : "incorrect"}>
                    {answers[riddle.id] === riddle.correct ? "Правильно!" : "Неправильно!"}
                </p>
            )}
        </div>
    ));

    return <div className="riddles-container">{riddleItems}</div>;
};

export default Items;

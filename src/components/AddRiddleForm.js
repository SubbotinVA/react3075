import React, { useState } from "react";

const AddRiddleForm = ({ onAddRiddle }) => {
  const [riddle, setRiddle] = useState({
    description: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correct: "",
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRiddle((prevRiddle) => ({
      ...prevRiddle,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setRiddle((prevRiddle) => ({
      ...prevRiddle,
      image: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (riddle.correct < 1 || riddle.correct > 4) {
      alert("Введите правильный номер варианта ответа (от 1 до 4).");
      return;
    }
    onAddRiddle(riddle);
    setRiddle({
      description: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      correct: "",
      image: null
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-riddle-form">
      <input
        type="text"
        name="description"
        placeholder="Описание загадки"
        value={riddle.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="option1"
        placeholder="Вариант 1"
        value={riddle.option1}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="option2"
        placeholder="Вариант 2"
        value={riddle.option2}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="option3"
        placeholder="Вариант 3"
        value={riddle.option3}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="option4"
        placeholder="Вариант 4"
        value={riddle.option4}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="correct"
        placeholder="Номер правильного варианта"
        value={riddle.correct}
        onChange={handleChange}
        min="1"
        max="4"
        required
      />
      <input
        type="file"
        name="image"
        onChange={handleFileChange}
        required
      />
      <button type="submit">Добавить загадку</button>
    </form>
  );
};

export default AddRiddleForm;

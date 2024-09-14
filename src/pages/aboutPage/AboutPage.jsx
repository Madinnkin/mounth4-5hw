import React, { useState } from 'react';

const AboutPage = () => {
    const [name, setName] = useState('');
    const [namesList, setNamesList] = useState([]);


    const AddName = () => {
        if (name.trim()) {
            setNamesList([...namesList, name]);
            setName('');
        }
    };


    const ChangeName = (index) => {
        if (name.trim()) {
            const updatedNames = namesList.map((item, i) =>
                i === index ? name : item
            );
            setNamesList(updatedNames);
            setName('');
        }
    };

    return (
        <>
            <h2>Добавление имен</h2>


            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите имя"
            />


            <button onClick={AddName} disabled={!name.trim()}>
                Добавить
            </button>

            {namesList.length === 0 ? (
                <p>Список пуст</p>
            ) : (
                <ul>

                    {namesList.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button
                                onClick={() => ChangeName(index)}
                                disabled={!name.trim()}
                            >
                                Поменять
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default AboutPage;

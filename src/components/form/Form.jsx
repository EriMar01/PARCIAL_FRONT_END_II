import React, { useState } from 'react';
import styles from './Form.module.css';
import Card from '../card/Card';

function Form() {
    const [formData, setFormData] = useState({
        color: '',
        name: '',
    });
    const [showCard, setShowCard] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        //Validations:
        /*
        Debe tener al menos 3 caracteres.
        No debe contener espacios en blanco al comienzo.
        */
        const isNameValid = formData.name.trim().length >= 3 && formData.name[0] !== ' ';

        /*
        Debe tener al menos 6 caracteres.
        */
        const isColorValid = formData.color.length >= 6;

        if (formData.name.trim() === '' && formData.color.trim() === '') {
            setErrorMessage('Por favor, completa ambos campos.');
            setShowCard(false);
        } else if (formData.name.trim() === '') {
            setErrorMessage('Por favor, completa el campo nombre.');
            setShowCard(false);
        } else if (formData.color.trim() === '') {
            setErrorMessage('Por favor, completa el campo color.');
            setShowCard(false);
        } else if (!isNameValid || !isColorValid) {
            setErrorMessage('Por favor chequea que la información sea correcta');
            setShowCard(false);
        } else {
            // Todas las validaciones han pasado
            setErrorMessage('');
            setShowCard(true);
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
            type="text"
            name="name"
            placeholder="Ingresa tu nombre"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            />
            <input
            type="text"
            name="color"
            placeholder="Ingresa tu color favorito (Formato HEX)"
            value={formData.color}
            onChange={handleChange}
            className={styles.input}
            />
            <button type="submit" className={styles.button}>
            Enviar
            </button>
        </form>

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        {showCard && <Card color={formData.color} name={formData.name} />}
        </div>
    );
}

export default Form;

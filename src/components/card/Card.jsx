//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import React from 'react';
import styles from './Card.module.css';

function Card({color, name }) {
  return (
    <div className={styles.card}>
      <h2>Hola {name}!</h2>
      <p>Sabemos que tú color favorito es:</p>
      <div className={styles.colorBox} style={{ backgroundColor: color }}>
        {color}
      </div>
    </div>
  );
}

export default Card;
import React from "react";
import styles from './styles.module.css'
type Props = {
  text: string
}
const Botao = ({ text }: Props) => {
  return (
    <div className={`${styles.square} ${styles.alignElements}`}>
      <button className={styles.botao}>{text}</button>
      <p className={styles.legend}>Legenda</p>
    </div>
  )
}
export default Botao
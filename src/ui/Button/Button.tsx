import styles from './Button.module.css'

interface Props {
  onClick: ()=>void
}

export const Button = ({onClick}: Props) => {
    return (
        <button className={styles.btn} onClick={onClick}>
          Узнать больше
        </button>
      );
}
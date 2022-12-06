import styles from './Prato.module.scss';
import { useLocation } from 'react-router-dom';

export default function Prato() {
  const { state } = useLocation();
  const { prato } = state;

  return (
    <>
      <button className={styles.voltar}>{'< Voltar'}</button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>{prato.title}</h1>
        <div></div>
      </section>
    </>
  );
}

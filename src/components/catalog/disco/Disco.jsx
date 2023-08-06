import styles from './Disco.module.css'

export const Disco = () => {
	return (
		<section className={styles.section}>
			<h2 className={styles.disco}>Дискотека</h2>
			<p className={styles.description}>Каждую пятницу и субботу</p>
		</section>
	)
}
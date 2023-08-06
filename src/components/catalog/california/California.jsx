import styles from './California.module.css'

export const California = () => {
	return (
		<article className={styles.California}>
			<div className={styles.div}>
				<picture>
					<source media="(min-width: 1024px)" srcSet='img/california-logo-big.png 1x, img/california-logo-big-2x.png 2x'/>
					<source media="(min-width: 768px)" srcSet='img/california-logo-medium.png 1x, img/california-logo-medium-2x.png 2x'/>
					<img src='img/california-logo.png' srcSet='img/california-logo-2x.png' className={styles.logo} alt='Логотип Бара'/>
				</picture>
				<p className={styles.p}>Лучший <span className={styles.pink}>концертный бар</span> на Арбате</p>
			</div>
		</article>
	)
}
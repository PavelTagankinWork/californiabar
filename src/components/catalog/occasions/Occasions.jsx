import styles from './Occasions.module.css'

export const Occasions = () => {
	return (
		<section className={styles.section}>
			<picture>
				<source media="(min-width: 1024px)" srcSet='img/occasions-big.png 1x, img/occasions-big-2x.png 2x'/>
				<source media="(min-width: 768px)" srcSet='img/occasions-medium.png 1x, img/occasions-medium-2x.png 2x'/>
				<img src='img/occasions-little.png' srcSet='img/occasions-little-2x.png 2x' className={styles.title} alt="Ближайшие мероприятия"/>
			</picture>
			<ul className={styles.list}>
				<li className={styles.item}>
					<img src='img/card-1.jpg 1x' srcSet='img/card-1-2x.jpg 2x' className={styles.itemImg} alt="Картинка Мероприятия"/>
					<div className={styles.itemDiv}>
						<h3 className={styles.itemTitle}>Моторологические вечера</h3>
						<span className={styles.itemTime}>29.04.23</span>
						<p className={styles.itemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
					</div>
				</li>
				<li className={styles.item}>
					<img src='img/card-2.jpg 1x' srcSet='img/card-2-2x.jpg 2x' className={styles.itemImg} alt="Картинка Мероприятия"/>
					<div className={styles.itemDiv}>
						<h3 className={styles.itemTitle}>Тайм-аут</h3>
						<span className={styles.itemTime}>29.04.23</span>
						<p className={styles.itemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
					</div>
				</li>
				<li className={`${styles.item} ${styles.otherItem}`}>
					<img src='img/card-1.jpg 1x' srcSet='img/card-1-2x.jpg 2x' className={styles.itemImg} alt="Картинка Мероприятия"/>
					<div className={styles.itemDiv}>
						<h3 className={styles.itemTitle}>Моторологические вечера</h3>
						<span className={styles.itemTime}>29.04.23</span>
						<p className={styles.itemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
					</div>
				</li>
			</ul>
		</section>
	)
}
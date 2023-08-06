import styles from './Bar.module.css'

export const Bar = () => {
	return (
		<section className={styles.section}>
			<picture>
				<source media="(min-width: 1024px)" srcSet='img/bar-big.png 1x, img/bar-big-2x.png 2x'/>
				<img src='img/bar-little.png 1x' srcSet='img/bar-little-2x.png 2x' className={styles.title} alt="Новинки бара"/>
			</picture>
			<div className={styles.cocktails}>
				<img src='img/coctail.png 1x' srcSet='img/coctail-2x.png 2x' className={styles.cocktail} alt="Коктейль"/>
				<ul className={styles.list}>
					<li className={styles.item}>
						<h3 className={styles.itemTitle}>Джин-тоник</h3>
						<p className={styles.itemPrice}>360 ₽</p>
						<span className={styles.itemDes}>Джин, тоник, лимон, лёд. 250 мл.</span>
					</li>
					<li className={styles.item}>
						<h3 className={styles.itemTitle}>Отвертка</h3>
						<p className={styles.itemPrice}>340 ₽</p>
						<span className={styles.itemDes}>Водка, апельсиновый сок, апельсин, лёд. 250 мл.</span>
					</li>
					<li className={styles.item}>
						<h3 className={styles.itemTitle}>Джим бим эппл тоник</h3>
						<p className={styles.itemPrice}>360 ₽</p>
						<span className={styles.itemDes}>Джим бим эпл, тоник, яблоко, лёд. 250 мл..</span>
					</li>
					<li className={styles.item}>
						<h3 className={styles.itemTitle}>Раша тудей</h3>
						<p className={styles.itemPrice}>350 ₽</p>
						<span className={styles.itemDes}>Финляндия Водка, ликёр дыня, ликер банан, яблочный сок, коктейльная вишня, лёд. 250мл.</span>
					</li>
				</ul>
			</div>
			<button className={styles.barButton}>Посмотреть барное меню целиком</button>
			<a className={styles.barLink} href="#">Меню <span className={styles.barItem}>Алкошок</span></a>
		</section>
	)
}
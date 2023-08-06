import styles from './Artgallery.module.css'

export const Artgallery = () => {
	return (
		<section className={styles.section}>
			<picture>
				<source media="(min-width: 1024px)" srcSet='img/gallery-big.png 1x, img/gallery-big-2x.png 2x' />
				<img src='img/gallery-little.png, 1x' srcSet='img/gallery-little-2x.png, 2x' alt="Галерея" className={styles.mainLogo} />
			</picture>
			<ul className={styles.list}>
				<li className={styles.item}>
					<picture>
						<source media="(min-width: 1440px)" srcSet="img/gallery-card-1-1440.jpg 1x, img/gallery-card-1-1440-2x.jpg 2x" />
						<source media="(min-width: 1024px)" srcSet="img/gallery-card-1-1024.jpg 1x, img/gallery-card-1-1024-2x.jpg 2x" />
						<source media="(min-width: 768px)" srcSet="img/gallery-card-1-768.jpg 1x, img/gallery-card-1-768-2x.jpg 2x" />
						<source media="(min-width: 425px)" srcSet="img/gallery-card-1-425.jpg 1x, img/gallery-card-1-425-2x.jpg 2x" />
						<img src='img/gallery-card-1-320.jpg' srcSet='img/gallery-card-1-320-2x.jpg 2x' className={styles.itemImg} alt='Карточка галереи'/>
					</picture>
				</li>
				<li className={styles.item}>
					<picture>
						<source media="(min-width: 1440px)" srcSet="img/gallery-card-2-1440.jpg 1x, img/gallery-card-2-1440-2x.jpg 2x" />
						<source media="(min-width: 1024px)" srcSet="img/gallery-card-2-1024.jpg 1x, img/gallery-card-2-1024-2x.jpg 2x" />
						<source media="(min-width: 768px)" srcSet="img/gallery-card-2-768.jpg 1x, img/gallery-card-2-768-2x.jpg 2x" />
						<source media="(min-width: 425px)" srcSet="img/gallery-card-2-425.jpg 1x, img/gallery-card-2-425-2x.jpg 2x" />
						<img src='img/gallery-card-2-320.jpg' srcSet='img/gallery-card-2-320-2x.jpg 2x' className={styles.itemImg} alt='Карточка галереи'/>
					</picture>
				</li>
				<li className={styles.item}>
					<picture>
						<source media="(min-width: 1440px)" srcSet="img/gallery-card-3-1440.jpg 1x, img/gallery-card-3-1440-2x.jpg 2x" />
						<source media="(min-width: 1024px)" srcSet="img/gallery-card-3-1024.jpg 1x, img/gallery-card-3-1024-2x.jpg 2x" />
						<source media="(min-width: 768px)" srcSet="img/gallery-card-3-768.jpg 1x, img/gallery-card-3-768-2x.jpg 2x" />
						<source media="(min-width: 425px)" srcSet="img/gallery-card-3-425.jpg 1x, img/gallery-card-3-425-2x.jpg 2x" />
						<img src='img/gallery-card-3-320.jpg' srcSet='img/gallery-card-3-320-2x.jpg 2x' className={styles.itemImg} alt='Карточка галереи'/>
					</picture>
				</li>
				<li className={styles.item}>
					<picture>
						<source media="(min-width: 1440px)" srcSet="img/gallery-card-4-1440.jpg 1x, img/gallery-card-4-1440-2x.jpg 2x" />
						<source media="(min-width: 1024px)" srcSet="img/gallery-card-4-1024.jpg 1x, img/gallery-card-4-1024-2x.jpg 2x" />
						<source media="(min-width: 768px)" srcSet="img/gallery-card-4-768.jpg 1x, img/gallery-card-4-768-2x.jpg 2x" />
						<source media="(min-width: 425px)" srcSet="img/gallery-card-4-425.jpg 1x, img/gallery-card-4-425-2x.jpg 2x" />
						<img src='img/gallery-card-4-320.jpg' srcSet='img/gallery-card-4-320-2x.jpg 2x' className={styles.itemImg} alt='Карточка галереи'/>
					</picture>
				</li>
				<li className={styles.item}>
					<picture>
						<source media="(min-width: 1440px)" srcSet="img/gallery-card-5-1440.jpg 1x, img/gallery-card-5-1440-2x.jpg 2x" />
						<source media="(min-width: 1024px)" srcSet="img/gallery-card-5-1024.jpg 1x, img/gallery-card-5-1024-2x.jpg 2x" />
						<source media="(min-width: 768px)" srcSet="img/gallery-card-5-768.jpg 1x, img/gallery-card-5-768-2x.jpg 2x" />
						<source media="(min-width: 425px)" srcSet="img/gallery-card-5-425.jpg 1x, img/gallery-card-5-425-2x.jpg 2x" />
						<img src='img/gallery-card-5-320.jpg' srcSet='img/gallery-card-5-320-2x.jpg 2x' className={styles.itemImg} alt='Карточка галереи'/>
					</picture>
				</li>
				<li className={styles.item}>
					<picture>
						<source media="(min-width: 1440px)" srcSet="img/gallery-card-6-1440.jpg 1x, img/gallery-card-6-1440-2x.jpg 2x" />
						<source media="(min-width: 1024px)" srcSet="img/gallery-card-6-1024.jpg 1x, img/gallery-card-6-1024-2x.jpg 2x" />
						<source media="(min-width: 768px)" srcSet="img/gallery-card-6-768.jpg 1x, img/gallery-card-6-768-2x.jpg 2x" />
						<source media="(min-width: 425px)" srcSet="img/gallery-card-6-425.jpg 1x, img/gallery-card-6-425-2x.jpg 2x" />
						<img src='img/gallery-card-6-320.jpg' srcSet='img/gallery-card-6-320-2x.jpg 2x' className={styles.itemImg} alt='Карточка галереи'/>
					</picture>
				</li>
			</ul>
		</section>
	)
}
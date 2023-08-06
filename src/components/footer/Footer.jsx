import styles from './Footer.module.css'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<h2 className={styles.name}>California Bar</h2>
			<span className={styles.info}>ул. Арбат, 23, стр. 1</span>
			<span className={styles.info}>+ 7(499) 579-80-04</span>
			<span className={styles.info}>Работаем круглосуточно</span>
			<ul className={styles.social}>
				<li className={styles.socialItem}>
					<a href='https://instagram.com/v_onch?igshid=MjEwN2IyYWYwYw==' target="_blank" rel="noreferrer">
						<img src='img/inst.svg' alt='Иконка Инстаграма' />
					</a>
				</li>
				<li className={styles.socialItem}>
					<a href='https://vk.com/rokkky' target="_blank" rel="noreferrer">
						<img src='img/vk.svg' alt='Иконка Вконтакте' />
					</a>
				</li>
				<li className={styles.socialItem}>
					<a href='https://instagram.com/swrgod.d?igshid=OGQ5ZDc2ODk2ZA==' target="_blank" rel="noreferrer">
						<img src='img/inst.svg' alt='Иконка Инстаграма' />
					</a>
				</li>
			</ul>
		</footer>
	)
}
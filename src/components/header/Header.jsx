import styles from './Header.module.css'

export const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles.ul}>
					<li className={styles.li}>Барное меню</li>
					<li className={styles.li}>Меню Алкошок</li>
				</ul>
				<a className={styles.mainLogo} href='/'>
					<img src='img/main-logo.png 1x' srcSet='img/main-logo-2x.png 2x' alt='Логотип Бара'/>
				</a>
				<ul className={styles.ul}>
					<li className={styles.li}>Контакты</li>
					<li className={styles.li}>California diner</li>
				</ul>
			</nav>
		</header>
	)
}
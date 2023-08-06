import styles from './Location.module.css'

export const Location = () => {
	return (
		<section className={styles.section}>
			<iframe className={styles.map} title='Карта бара'
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.4637912900876!2d37.5952451!3d55.7504451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a4cd68130fd%3A0xe58d457cc37a5cd7!2z0YPQuy4g0JDRgNCx0LDRgiwgMjMsINGB0YLRgC4gMSwg0JzQvtGB0LrQstCwLCAxMTkwMDI!5e0!3m2!1sru!2sru!4v1691146782802!5m2!1sru!2sru"
				width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"
				referrerPolicy="no-referrer-when-downgrade">
			</iframe>
		</section>
	)
}
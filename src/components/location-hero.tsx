import styles from './location-hero.module.css'

interface LocationHeroProps {
  city: string
  state: string
  image: string
}

export default function LocationHero({ city, state, image }: LocationHeroProps) {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.breadcrumb}>
          <a href="/">Home</a>
          <span>/</span>
          <a href="/#contact">Locations</a>
          <span>/</span>
          <span>{city}</span>
        </div>
        <h1 className={styles.title}>Window Replacement in {city}, {state}</h1>
        <p className={styles.subtitle}>Expert Window Installation Services Throughout the {city} Area</p>
        <div className={styles.cta}>
          <a href="tel:817-592-8870" className={styles.phoneButton}>
            📞 817-592-8870
          </a>
          <a href="#contact" className={styles.contactButton}>
            Free Estimate
          </a>
        </div>
      </div>
    </section>
  )
}



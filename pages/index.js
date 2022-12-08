import styles from '../styles/Home.module.css'
import Link from 'next/link'
const Homepage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome To The Homepage</h1>
      <ul>
        <li>
          <Link href='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  )
}

export default Homepage

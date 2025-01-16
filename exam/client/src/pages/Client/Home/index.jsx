import React from 'react'
import styles from "./index.module.scss"
import ClientProducts from '../ClientProducts'
const Home = () => {
  return (
    <section>
   <main >
    <div className={styles.alldiv}>
    <div>
        <h2>Book a table for yourself at a <br />time convenient for you</h2>
        <button>Book a Table</button>
    </div>
    </div>
   </main>
   <section>
   <ClientProducts/>
   </section>
   </section>
  
  )
}

export default Home
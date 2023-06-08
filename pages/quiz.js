import styles from '../styles/Home.module.css';
import TopBar from '../components/top-bar';
import Head from 'next/head';

export default function About() {
  return (
    <div className={styles.container}>
         <Head>
            <TopBar selected="quiz"></TopBar>
         </Head>
      <main>

        Quiz content will be displayed here
      </main>

      <footer>
        Built using Next + Apollo + PokeAPI (GraphQL)
      </footer>
    </div>
  )
}

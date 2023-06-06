import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ResponsiveGrid from '../components/responsive-grid';
import { gql } from "@apollo/client";
import client from "../components/apollo-client";
import TopBar from '../components/top-bar';

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
        pokemons(limit: 15){
          results {
            name
            artwork
          }
        }
      }
    `,
  });

  return {
    props: {
      pokemons: data.pokemons,
    },
 };
}


export default function Home({pokemons}) {
  return (
    <div className={styles.container}>
      <Head>
        <TopBar selected="search"></TopBar>
        <title>Next + Apollo + PokeAPI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>
          Demo <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <ResponsiveGrid cols="1fr 1fr 1fr 1fr 1fr">
          {pokemons.results.map((pokemon) => (
            <div key={pokemon.name} className={styles.card}>
              <img src={pokemon.artwork} alt="pokemon artwork"/>
              <p>
                {pokemon.name}
              </p>
            </div>
          ))}
        </ResponsiveGrid>


      </main>

      <footer>
        Built using Next + Apollo + PokeAPI (GraphQL)
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }

        nav.selected-true {
          background-color: rgb(252,205,27);
          border-color: rgb(60,94,146);
          color: rgb(60,94,146);
        }
      `}</style>
    </div>
  )
}

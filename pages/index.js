import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ResponsiveGrid from '../components/responsive-grid';
import { gql } from "@apollo/client";
import client from "../components/apollo-client";
import TopBar from '../components/top-bar';
import SearchBar from '../components/search-bar';
import { useState, useEffect } from 'react';

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

  const [records, setRecords] = useState(pokemons)
  useEffect(async () => {
    const { data } = await client.query({
      query: gql`
        query {
          pokemons(limit: 1279){
            results {
              name
              artwork
            }
          }
        }
      `,
    });
    setRecords(data.pokemons)
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <TopBar selected="search"></TopBar>
        <title>Next + Apollo + PokeAPI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SearchBar onSearch={(e)=>alert(e)} placeholder="Type the pokemon name or type"/>
        <ResponsiveGrid cols="1fr 1fr 1fr 1fr 1fr">
          {records.results.map((pokemon) => (
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
          background-color: rgba(252,205,27, .5);
          color: rgb(60,94,146);
        }
      `}</style>
    </div>
  )
}

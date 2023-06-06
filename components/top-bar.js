import ResponsiveGrid from "./responsive-grid.js"
import Image from 'next/image.js'
import styles from '../styles/tob-bar.module.css'
export default function TopBar({selected}){
return (<ResponsiveGrid className={styles.container} cols="1fr 1fr 1fr 100%">
        <Image src="/images/pokeapi.png" height={20} width={150} title="PokeApi Logo"/>
        <Image src="/images/apollo-graphql.png" height={20} width={150} title="Apollo Graphql Logo"/>
        <Image src="/images/nextjs.jpeg" height={20} width={150} title="Next js Logo"/>

        <div className={styles.menus}>
            <nav className={`selected-${selected === 'search'}`}>Search</nav>
            <nav className={`selected-${selected === 'quiz'}`}>Quiz</nav>
            <nav className={`selected-${selected === 'about'}`}>About</nav>
        </div>
</ResponsiveGrid>)
}


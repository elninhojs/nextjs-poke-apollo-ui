import ResponsiveGrid from "./responsive-grid.js"
import Image from 'next/image.js'
export default function LogoPanel(){
return (<ResponsiveGrid cols="1fr 1fr 1fr">
    
    <Image src="/images/pokeapi.png" height={40} width={150} title="PokeApi Logo"/>
    <Image src="/images/apollo-graphql.png" height={40} width={150} title="Apollo Graphql Logo"/>
    <Image src="/images/nextjs.jpeg" height={40} width={150} title="Next js Logo"/>
    

</ResponsiveGrid>)
}


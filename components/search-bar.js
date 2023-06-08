import ResponsiveGrid from "./responsive-grid";
import styles from "./search-bar.module.css"
import { useState } from "react";
export default function SearchBar({onSearch, placeholder}){
    const [term, setTerm] = useState("")

    return <form onSubmit={(e)=>{e.preventDefault(); onSearch(term)}}>
        <ResponsiveGrid cols="5fr 1fr">
            <input className={styles.txt} onChange={(e)=> setTerm(e.target.value)} placeholder={placeholder} type="text"></input>
            <button className={styles.btn} type="submit">Search</button>
        </ResponsiveGrid>
    </form>
}
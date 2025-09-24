import { useEffect, useState } from "react"
import axios from "axios"

function Home() {
    const [data, setData] = useState([])
    
    useEffect(() => { 
        async function fetchData() {
            const { data } = console.log(axios.get("https://jsonplaceholder.typicode.com/users"))
            console.log(data)
        }
        fetchData()
    }, [])
    return <h1>Home</h1>
}

export default Home 
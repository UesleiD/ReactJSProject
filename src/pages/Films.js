import React, {useState, useLayoutEffect} from 'react'

// import { Link } from 'react-router-dom'
import axios from 'axios'
import Banner from '../components/Banner'
export default function Films() {
    // const axios = require('axios');
    let titulo = "films"
    
    const [filmes, setFilmes] = useState([])
    const [msg, setMsg] = useState("")

    const getFilmes = () => {
        axios.get(`https://swapi.dev/api/${titulo}/`)
            .then(retorno => {
                setFilmes(retorno.data.results)
                setMsg("")
        }).catch(() => setMsg("Erro ao coletar dados!"))
        
    } 

    useLayoutEffect(() => {
        getFilmes()
    } ,[])





    return (
        <>
            <Banner titulo="List of Films" mensagem="StarWars" />


            <section id="three" className="wrapper special">
                <div className="inner">
                    <div className="flex flex-2">

                        {msg}
                        {filmes.map((item, chave) =>
                            <article key={chave}>
                            <header>
                                    <h2>{item.title}</h2>
                                    <h5>Producer: {item.producer}</h5>
                                    <h5>Release: {item.release_date}</h5>
                            </header>
                                <p>{item.opening_crawl}.</p>
                            {/* <footer >
                                <Link to={{
                                    pathname: "/Starships",
                                    state: item
                                    }} className="button special">STARSHIPS
                                </Link>
                                <Link to={{
                                    pathname: "/Peoples",
                                    state: item
                                    }} className="button special">PEOPLES
                                </Link>
                                <Link to={{
                                    pathname: "/Planets",
                                    state: item
                                    }} className="button special">PLANETS
                                </Link>
                                <Link to={{
                                    pathname: "/Species",
                                    state: item
                                    }} className="button special">SPECIES
                                </Link>
                                    
                            </footer> */}
                            <br/>
                        </article>
                        
                        
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

import React, { useState, useLayoutEffect} from 'react'

import axios from 'axios'
import Banner from '../components/Banner'
export default function Peoples() {

    let titulo = "people"

    const [pessoas, setPessoas] = useState([])
    const [msg, setMsg] = useState("")

    const getPessoas = () => {
        axios.get(`https://swapi.dev/api/${titulo}/`)
            .then(retorno => {
                setPessoas(retorno.data.results)
                setMsg("")
            }).catch(() => setMsg("Erro ao coletar dados!"))

    }

    useLayoutEffect(() => {
        getPessoas()
    }, [])



    const b = {
        color: "gray"
    }
    const spn ={
        "margin-right": "30px"
    }


    return (
        <>
            <Banner titulo="List of Peoples" mensagem="StarWars" />


            <section id="three" className="wrapper special">
                <div className="inner">
                    <div className="flex flex-2">
                        
                        {msg}
                        {pessoas.map((item, chave) =>
                            <article key={chave}>
                                <header>
                                    <h2>{item.name}</h2>
                                    <p>
                                        <span style={spn}> <b style={b}>Height:</b> {item.height} </span>
                                        <span style={spn}> <b style={b}>Mass:</b> {item.mass} </span>
                                    </p>
                                    <p>
                                        <span style={spn}> <b style={b}>Gender:</b> {item.gender} </span>
                                        <span style={spn}> <b style={b}>Hair:</b> {item.hair_color} </span>
                                    </p>
                                    <p>
                                        <span style={spn}> <b style={b}>Skin:</b> {item.skin_color} </span>
                                        <span style={spn}> <b style={b}>Eye:</b> {item.eye_color} </span>
                                        <span style={spn}> <b style={b}>Birth Year:</b> {item.birth_year} </span>
                                    </p>
                                </header>
                                <br />
                            </article>


                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

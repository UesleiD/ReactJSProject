import React, { useState, useLayoutEffect } from 'react'

import axios from 'axios'
import Banner from '../components/Banner'
export default function Species() {

    const titulo = "species"

    const [especie, setEspecie] = useState([])
    const [msg, setMsg] = useState("")

    const getEspecie = () => {
        axios.get(`https://swapi.dev/api/${titulo}/`)
            .then(retorno => {
                setEspecie(retorno.data.results)
                setMsg("")
            }).catch(() => setMsg("Erro ao coletar dados!"))

    }

    useLayoutEffect(() => {
        getEspecie()
    }, [])


    const b = {
        color: "gray"
    }
    const spn = {
        "margin-right": "30px"
    }


    return (
        <>
            <Banner titulo="List of Species" mensagem="StarWars" />


            <section id="three" className="wrapper special">
                <div className="inner">
                    <div className="flex flex-2">

                        {msg}
                        {especie.map((item, chave) =>
                            <article key={chave}>
                                <header>
                                    <h2>{item.name}</h2>
                                    <p>
                                        <span style={spn}> <b style={b}>Classification:</b> {item.classification} </span>
                                        <span style={spn}> <b style={b}>Designation:</b> {item.designation} </span>
                                    </p>
                                    <p>
                                        <span style={spn}> <b style={b}>Language:</b> {item.language} </span>
                                        <span style={spn}> <b style={b}>Skin:</b> {item.skin_colors} </span>
                                    </p>
                                    <p>
                                        <span style={spn}> <b style={b}>Hair:</b> {item.hair_colors} </span>
                                        <span style={spn}> <b style={b}>Average Lifespan:</b> {item.average_lifespan} </span>
                                    </p>
                                    <p>
                                        <span style={spn}> <b style={b}>Eye:</b> {item.eye_colors} </span>
                                        <span style={spn}> <b style={b}>Average Height:</b> {item.average_height} </span>
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

import React, { useState, useLayoutEffect } from 'react'

import axios from 'axios'
import Banner from '../components/Banner'
export default function Starships() {

    let titulo = "starships"

    const [naves, setNaves] = useState([])
    const [msg, setMsg] = useState("")

    const getNaves = () => {
        axios.get(`https://swapi.dev/api/${titulo}/`)
            .then(retorno => {
                setNaves(retorno.data.results)
                setMsg("")
            }).catch(() => setMsg("Erro ao coletar dados!"))

    }

    useLayoutEffect(() => {
        getNaves()
    }, [])


    const b = {
        color: "gray"
    }
    const spn = {
        "margin-right": "30px"
    }


    return (
        <>
            <Banner titulo="List of Starships" mensagem="StarWars" />


            <section id="three" className="wrapper special">
                <div className="inner">
                    <div className="flex flex-2">

                        {msg}
                        {naves.map((item, chave) =>
                            <article key={chave}>
                                <header>
                                    <h2>{item.name}</h2>
                                    <p>
                                        <span style={spn}> <b style={b}>Model:</b> {item.model} </span>
                                        <span style={spn}> <b style={b}>Class:</b> {item.starship_class} </span>
                                    </p>
                                    <p>
                                        <span style={spn}> <b style={b}>Manufacturer:</b> {item.manufacturer} </span>
                                    </p>
                                    <p>
                                        <span style={spn}> <b style={b}>Length:</b> {item.length} </span>
                                        <span style={spn}> <b style={b}>Passengers:</b> {item.passengers} </span>
                                        <span style={spn}> <b style={b}>Max Speed:</b> {item.max_atmosphering_speed} </span>
                                    </p>
                                    <p>
                                        <span style={spn}> <b style={b}>Cargo Capacity:</b> {item.cargo_capacity} </span>
                                        <span style={spn}> <b style={b}>Consumables:</b> {item.consumables} </span>
                                    </p>
                                    <p>
                                        <span style={spn}> <b style={b}>Hyperdrive:</b> {item.hyperdrive_rating} </span>
                                        <span style={spn}> <b style={b}>MGLT:</b> {item.MGLT} </span>
                                        <span style={spn}> <b style={b}>Cost:</b> {item.cost_in_credits} </span>
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
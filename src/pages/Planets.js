import React, { useState, useLayoutEffect } from 'react'

import axios from 'axios'
import Banner from '../components/Banner'
export default function Planets() {

    let titulo = "planets"

    const [planeta, setPlaneta] = useState([])
    const [msg, setMsg] = useState("")

    const getPlaneta = () => {
        axios.get(`https://swapi.dev/api/${titulo}/`)
            .then(retorno => {
                setPlaneta(retorno.data.results)
                setMsg("")
            }).catch(() => setMsg("Erro ao coletar dados!"))

    }

    useLayoutEffect(() => {
        getPlaneta()
    }, [])


    const b = {
        color: "gray"
    }
    const spn = {
        "margin-right": "30px"
    }


    return (
        <>
            <Banner titulo="List of Planets" mensagem="StarWars" />


            <section id="three" className="wrapper special">
                <div className="inner">
                    <div className="flex flex-2">

                        {msg}
                        {planeta.map((item, chave) =>
                            <article key={chave}>
                                <header>
                                    <h2>{item.name}</h2>
                                    <p>
                                        <span style={spn}> <b style={b}>Diameter:</b> {item.diameter} </span>
                                        <span style={spn}> <b style={b}>Climate:</b> {item.climate} </span>
                                    </p>
                                    <p>
                                        <span style={spn}> <b style={b}>Rotation Period:</b> {item.rotation_period} </span>
                                        <span style={spn}> <b style={b}>Orbital Period:</b> {item.orbital_period} </span>
                                    </p>
                                    <p>
                                        <span style={spn}> <b style={b}>Gravity:</b> {item.gravity} </span>
                                        <span style={spn}> <b style={b}>Terrain:</b> {item.terrain} </span>
                                    </p>
                                    <p>
                                        <span style={spn}> <b style={b}>Population:</b> {item.population} </span>
                                        <span style={spn}> <b style={b}>Surface Water:</b> {item.surface_water} </span>
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

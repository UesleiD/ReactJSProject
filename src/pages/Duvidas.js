import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { useNavigate } from 'react-router-dom'
import MenuOpcoes from '../components/MenuOpcoes'


export default function Duvidas(props) {
    const navigate = useNavigate();

    const [nome, setNome] = useState("")
    const [whatsapp, setWhatsapp] = useState("")
    const [duvida, setDuvida] = useState("")

    const limpar = () => {
        setNome("")
        setWhatsapp("")
        setDuvida("")
    }

    const salvar = async () => {


        const dados = {
            nome: nome,
            whatsapp: whatsapp,
            duvida: duvida
        }

        try {
            
            alert('Salvo com sucesso!')
            navigate('/menu')

        } catch (error) {
            alert(error)
        }


    }

    return (
        <>
            <Grid container style={{ padding: 10 }}>
                <Grid item md={12} xs={12} sm={12}>
                    <Cabecalho />
                </Grid>
                <Grid item md={12} xs={12} sm={12}>

                    <MenuOpcoes />
                    <div className='corpo'>
                        <Grid container style={{ padding: 10 }} spacing={1}>
                            <Grid item md={6} xs={12} sm={12}>
                                <TextField
                                    fullWidth
                                    label="Nome"
                                    variant="outlined"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} sm={12}>
                                <TextField
                                    fullWidth
                                    label="Whatsapp"
                                    variant="outlined"
                                    value={whatsapp}
                                    onChange={(e) => setWhatsapp(e.target.value)}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} sm={12}>
                                <TextField
                                    fullWidth
                                    label="Dúvida"
                                    variant="outlined"
                                    value={duvida}
                                    onChange={(e) => setDuvida(e.target.value)}

                                />
                            </Grid>
                            <Grid item md={12} xs={12} sm={12}>
                                <Button
                                    variant="contained"
                                    style={{ marginRight: 10 }}
                                    onClick={salvar}
                                >Enviar</Button>
                                <Button variant="outlined" onClick={limpar}>Limpar dúvida</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                    <Rodape />
                </Grid>
            </Grid>
        </>

    )
}

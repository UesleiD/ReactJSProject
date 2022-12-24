import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function MenuOpcoes() {

    const navigate = useNavigate();
    const logoff = () => {
        sessionStorage.removeItem("login")
        navigate("/")
    }
    return (
        <div className='menu'>
            <Link to="/menu">
                <div className='itemMenu'>Home</div>
            </Link>
            <Link to="/Cadastro">
                <div className='itemMenu'>Cadastro</div>
            </Link>
            <div className='itemMenu' onClick={logoff}>Logoff</div>
            <Link to="/Films">
                <div className='itemMenu'>Films</div>
            </Link>
            <Link to="/Starships">
                <div className='itemMenu'>Starships</div>
            </Link>
            <Link to="/Planets">
                <div className='itemMenu'>Planets</div>
            </Link>
            <Link to="/Peoples">
                <div className='itemMenu'>People</div>
            </Link>
            <Link to="/Species">
                <div className='itemMenu'>Species</div>
            </Link>
            <Link to="/Duvidas">
                <div className='itemMenu'>Dúvidas</div>
            </Link>
            <Link to="/Sobre">
                <div className='itemMenu'>Sobre</div>
            </Link>
        </div>
    )
}

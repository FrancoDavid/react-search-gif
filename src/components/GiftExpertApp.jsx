import React, { useState } from 'react';
import logo from '../logo.svg';
import '../App.css';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GiftExpertApp = () => {

    const [categorias, setCategorias] = useState([]);

    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Gif ExpertApp React</h2>
                <AddCategory setCategorias={setCategorias}  />
                <div className="Gallery animate__animated animate__bounce">
                    {
                        categorias.map((categoria, index) => {
                            return(<GifGrid key={index} categoria={categoria}   />);
                        }).reverse()
                    }
                </div>
            </header>
        </div>
    );
};

export default GiftExpertApp;

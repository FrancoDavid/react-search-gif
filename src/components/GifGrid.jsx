import React from 'react';
import GifItem from './GifItem';
import '../App.css';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = (props) => {
    // const [gifs, setGifs] = useState([]);
    const {data:gifs, loading} = useFetchGifs(props.categoria);
    
    return (
        <>
        {loading && <p>Cargando gifs...</p>}
        <h4>{props.categoria}</h4>
        <main className="grid">
        {
            gifs.map((gif) => {
                return(<GifItem key={gif.id} image={gif}    />);
            })
        }
        </main>
        </>
    )
}

 
export default GifGrid;
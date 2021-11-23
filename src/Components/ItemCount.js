import React, {useState} from 'react';
import './styles.scss'

const ItemCount = () => {

    // const [date, setDate] = useState("");
    // const [count, setCount] = useState (0);
    // const [color, setColor] = useState ("blue")

    const [contador, setContador] = useState(0);
    const [fecha, setFecha] = useState("");
    const [color, setColor] = useState("white");

    const handleColor = (e) => {
        const colorcito = e.target.value;
        setColor(colorcito);
    }

    const handleClick = () => {
        //No quiero que supere las 10 unidades
        if (contador < 10) {
            setContador(contador + 1);
            const fecha = new Date().toLocaleString();
            setFecha(fecha);
        }
    }

    return (
        <div
        className = "itemCount"
        style = {{
            backgroundColor: color
        }}
        >
            <h4> Ultimo click: {fecha} </h4>
            <button onClick={handleClick}> Click </button>
            <span>{contador}</span>
            <select name="colors" id="colors" onChange={handleColor}>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="blue">Blue</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
                <option value="violet">Violet</option>
            </select>
        </div>
    )
}

export default ItemCount

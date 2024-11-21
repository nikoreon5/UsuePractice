import UsueDisplay from "./components/UsueDisplay";
import './styles/App.css'
import {useEffect, useState} from "react";
import DefInput from "./components/UI/input/DefInput";

const _ = parseInt(Math.random().toString().slice(3, 6))
const x = _ * _
function App() {
    const [y, setY] = useState('')
    const [g, setG] = useState(false)
    useEffect(() => {
        const z = parseInt(y)
        if (z * z === x) {
            setG(true)
        }
    }, [y, setY]);
    return (
        <div className="centered-div">
        {!g
            ? <UsueDisplay title="Фотографии (УрГЭУ)"/>
            : <div>
                <DefInput
                    value={y}
                    onChange={e => setY(e.target.value)}
                />
                <h4>{x}</h4>
            </div>
        }
    </div>
  );
}

export default App;

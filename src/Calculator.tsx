import React, {useState} from "react";


const Calculator: React.FC = () => {
    const [distance, setDistance] = useState<number | string>("");
    const [speed, setSpeed] = useState<number | string>("");
    const [eta, setEta] = useState<number>(0);


    const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (Number.isFinite(event.target.valueAsNumber)){
            setDistance(event.target.valueAsNumber);
        } else if (event.target.value === ""){
            setDistance(event.target.value);
        }
        
    }

    const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (Number.isFinite(event.target.valueAsNumber)){
            setSpeed(event.target.valueAsNumber);
        } else if (event.target.value === ""){
            setSpeed(event.target.value);
        }    
    }

    const calcEta: React.FormEventHandler<HTMLFormElement> = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let eta = Number(distance) / (speed as number);
        console.log(eta);
        setEta(eta);
    }

    return (
        <>
            <form onSubmit={calcEta}>
                <div id="calculator">
                    <label htmlFor="distance">Distance</label>
                    <input
                    type="number"
                    id="distance"
                    value={distance}
                    placeholder="0"
                    onChange={handleDistanceChange}/>

                    <label htmlFor="speed">Speed</label>
                    <input 
                    type="number"
                    id="speed"
                    value={speed}
                    placeholder="0"
                    onChange={handleSpeedChange}/>

                    <input type="submit"/>
                    <p>it will take you {eta} units of time to go {distance} units of measurement</p>
                </div>
            </form>
        
        </>


    )
}

export default Calculator
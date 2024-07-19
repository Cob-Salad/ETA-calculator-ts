import React, {useState} from "react";


const Calculator: React.FC = () => {
    const [distance, setDistance] = useState<number | string>(0)
    const [speed, setSpeed] = useState<number | string>(0)
    const [eta, setEta] = useState<number>(0)


    const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setDistance(event.target.valueAsNumber);
    }

    const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSpeed(event.target.valueAsNumber);
    }

    const calcEta = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        let eta = distance * speed
        console.log(eta)
        setEta(eta)
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
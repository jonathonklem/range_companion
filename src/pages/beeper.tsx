import React, { useEffect } from 'react';

import audio from "../data/audio.jsx"

function Beeper():JSX.Element {
    const [debounce, setDebounce] = React.useState(false);
    const [maxRandomPause, setMaxRandomPause] = React.useState(5);
    const [minRandomPause, setMinRandomPause] = React.useState(1);
    const [parTime, setParTime] = React.useState(0);
    const [debugMessage, setDebugMessage] = React.useState('');
    const [randomPause, setRandomPause] = React.useState(0);

    useEffect(() => {
        audio.load();
    }, []);
    
    const startTimer = () => {
        const randomPause = Math.round((Math.random() * (maxRandomPause - minRandomPause) + minRandomPause)*1000)/1000;
        setRandomPause(randomPause);
        setTimeout(() => {
            beep();
            if (parTime) {
                setTimeout(() => {
                    beep();
                }, parTime * 1000);
            }
        }, randomPause * 1000);   
    }

    const beep = () => {
        if (debounce) return;
        setDebounce(true);
        
        setDebugMessage('Beep!');
        audio.play();
        audio.onended = () => {
            setDebounce(false); 
            setDebugMessage('');
        }
    }

    return (
        <div>
            <h1 className="text-2xl text-center mt-8 tracking-widest">Beeper</h1>
            <em className="text-center green-600 block my-2">{debugMessage}</em>
            <form className="w-5/6  mx-auto">
                <label className="block my-2 mx-auto">
                    <div className="block text-sm font-extralight tracking-wider">Max Random Pause</div>
                    <div className="block w-full p-2 mx-auto"><input type="number" step=".01"  value={maxRandomPause} onChange={(e) => setMaxRandomPause(Number(e.target.value))} name="max_random_pause" /></div>
                </label> 
                <label className="block my-2 mx-auto">
                    <div className="block text-sm font-extralight tracking-wider">Min Random Pause</div>
                    <div className="block w-full p-2 mx-auto"><input type="number" step=".01"  value={minRandomPause} onChange={(e) => setMinRandomPause(Number(e.target.value))} name="min_random_pause" /></div>
                </label> 
                <label className="block my-2 mx-auto">
                    <div className="block text-sm font-extralight tracking-wider">Par Time (leave blank for none)</div>
                    <div className="block w-full p-2 mx-auto"><input type="number" step=".01"  value={parTime} onChange={(e) => setParTime(Number(e.target.value))} name="par_time" /></div>
                </label> 
            </form>
            <button onClick={startTimer} className="rounded-3xl tracking-wider text-lg bg-redbg drop-shadow-lg text-white py-2 px-4 w-1/4 block mx-auto text-center mt-8">Beep</button>
        </div>
    );
}

export default Beeper;
import React from 'react';

function MoaCalculator(): JSX.Element {
    const [rangeUnit, setRangeUnit] = React.useState(914.4);
    const [lengthUnit, setLengthUnit] = React.useState(25.4);
    const [moaUnit, setMoaUnit] = React.useState(25.4);

    // necessary for "0." bug 
    const [rangeText, setRangeText] = React.useState("0");
    const [lengthText, setLengthText] = React.useState("0");
    const [moaText, setMoaText] = React.useState("0");

    const [range, setRange] = React.useState(0);
    const [length, setLength] = React.useState(0);
    const [moa, setMoa] = React.useState(0);

    const [message, setMessage] = React.useState('');

    React.useEffect(() => {
        setRange(Number(rangeText));
    }, [rangeText]);

    React.useEffect(() => {
        setLength(Number(lengthText));
    }, [lengthText]);

    React.useEffect(() => {
        setMoa(Number(moaText));
    }, [moaText]);

    const clear = (e: React.MouseEvent) => {
        e.preventDefault();
        setRange(0);
        setLength(0);
        setMoa(0);
        setRangeText('0');
        setLengthText('0');
        setMoaText('0');
        setMessage('');
    }

    const calculate = (e: React.MouseEvent) => {
        e.preventDefault();

        if (range <= 0) {
            setMessage('Range must be greater than 0');
            return;
        }
        if (length <= 0 && moa <= 0) {
            setMessage('Length or MOA must be greater than 0');
            return;
        }

        const calcRange = range * rangeUnit;
        setMessage('');

        if (length) {
            const moaCalc = Math.round(10000 * (moaUnit * (length * 10800 / Math.PI / calcRange))) / 10000;
            setMoa(moaCalc);
            setMoaText(moaCalc.toString());          
        } else if (moa) {
            const lengthCalc = Math.round(10000*((moa / 10800 * Math.PI * calcRange) / lengthUnit))/10000;
            setLength(lengthCalc);
            setLengthText(lengthCalc.toString());
        }
    }
    
    return (
        <>
            <h1 className="text-2xl text-center mt-8 tracking-widest">MOA Calculator</h1>
            <em className="text-center green-600 block my-2">{message}</em>
            <form className="w-1/2 mx-auto">
                <label className="block my-2 mx-auto">
                    <div className="block text-sm font-extralight tracking-wider">Range</div>
                    <div className="block w-full p-2 mx-auto"><input type="number" step=".0001"  value={rangeText} onChange={(e) => setRangeText(e.target.value)} name="range" /></div>
                    <div className="block w-full p-2 mx-auto"><select value={rangeUnit} onChange={(e) => {setRangeUnit(Number(e.target.value))}}><option value="914.4">Yards</option><option value="304.8">Feet</option><option value="1000">Meters</option></select></div>
                </label> 
                <label className="block my-2 mx-auto">
                    <div className="block text-sm font-extralight tracking-wider">Length</div>
                    <div className="block w-full p-2 w-1/2 mx-auto"><input value={lengthText} onChange={(e) => setLengthText(e.target.value)} type="number" step=".0001"  name="length" /></div>
                    <div className="block w-full p-2 mx-auto"><select value={lengthUnit} onChange={(e) => {setLengthUnit(Number(e.target.value))}}><option value="25.4">Inches</option><option value="10">CM</option><option value="1">MM</option></select></div>
                </label>
                <label className="block my-2 mx-auto">
                    <div className="block text-sm font-extralight tracking-wider">MOA</div>
                    <div className="block w-full p-2 w-1/2 mx-auto"><input value={moaText} onChange={(e) => setMoaText(e.target.value)} type="number" step=".0001" name="moa" /></div>
                    <div className="block w-full p-2 mx-auto"><select value={moaUnit} onChange={(e) => {setMoaUnit(Number(e.target.value))}}><option value="25.4">Inches</option><option value="10">CM</option><option value="1">MM</option></select></div>
                </label>
                <div className="text-center">
                    <button onClick={calculate} className="rounded-3xl tracking-wider text-lg bg-redbg drop-shadow-lg text-white py-2 px-4 w-1/4  text-center mx-4">Calculate</button>
                    <button onClick={clear} className="rounded-3xl tracking-wider text-lg bg-redbg drop-shadow-lg text-white py-2 px-4 w-1/4  text-center mx-4 mt-8">Clear</button>
                </div>

            </form>
        </>
    );
}

export default MoaCalculator;
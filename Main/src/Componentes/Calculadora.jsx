import React , {useState}from "react";
import Button from "./Button";
import Display from "./Display";

export default function Calculadora(props) {
    const [displayValue, setDisplayValue] = useState('')
    function handleClick(digito){
        setDisplayValue(displayValue + digito)
    }
    function handleEqual(){
        setDisplayValue(eval(displayValue))
    }
    function clear() {
        setDisplayValue('')
    }
    return (
        <div className="Calculadora">
            <Display value={displayValue}/>
            <Button label="AC" size={3} onClick={clear}/>
            <Button label="/" operation  onClick={handleClick}/>

            <Button label="7" onClick={handleClick}/>
            <Button label="8" onClick={handleClick}/>
            <Button label="9" onClick={handleClick}/>
            <Button label="*" operation onClick={handleClick} />

            <Button label="4" onClick={handleClick}/>
            <Button label="5" onClick={handleClick}/>
            <Button label="6" onClick={handleClick}/>
            <Button label="-" operation onClick={handleClick} />

            <Button label="1" onClick={handleClick}/>
            <Button label="2" onClick={handleClick}/>
            <Button label="3" onClick={handleClick}/>
            <Button label="+" operation onClick={handleClick} />

            <Button label="0" size={2} onClick={handleClick}/>
            <Button label="." onClick={handleClick}/>
            <Button label="=" operation onClick={handleEqual} />
        </div>
    )
}
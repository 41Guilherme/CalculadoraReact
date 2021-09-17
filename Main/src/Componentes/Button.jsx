import React from 'react';

export default function Button({label, size=1, operation, onClick}) {
    
    const className = `btn btn-${size}` + (operation? ' operation': '')
    
    function handleClick(){
        onClick(label)
    }
    return (
        <button className={className} onClick={handleClick}>{label}</button>
    )
}

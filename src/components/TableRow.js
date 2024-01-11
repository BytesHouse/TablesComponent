import React from 'react';

const TableRow = ({title, homeValue, awayValue}) => {
    if(typeof homeValue === 'object' && typeof awayValue === 'object'){
        const home = Object.values(homeValue);
        const away = Object.values(awayValue);
        return(
            <tr>
                {home.map(item => <td key={Math.random()}>{item}</td>)}
                <td>{title}</td>
                {away.map(item => <td key={Math.random()}>{item}</td>)}
            </tr>
        );
    } else {
        return (
            <tr>
                <td>{homeValue}</td>
                <td>{title}</td>
                <td>{awayValue}</td>
            </tr>
        );
    }

};

export default TableRow;
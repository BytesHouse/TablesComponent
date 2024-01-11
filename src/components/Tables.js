import React from 'react';
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const Tables = ({generalData}) => {
    // Получаем массив ключей входящего обьека 0 индекс home team, 1 индекс away team
    const keys = Object.keys(generalData);
    // Имена всех значений которые есть у Home team - они же будут использоваться как подпись к одному из полей
    const statsNames = Object.keys(generalData[keys[0]])
    // получаем массив значений у команд
    const statsValuesHome = Object.values(generalData[keys[0]])
    const statsValuesAway = Object.values(generalData[keys[1]])
    let titles = []
    // Данную константу нужно формировать по входящему пропсу
    if(statsValuesHome.length){
        titles = Object.keys(statsValuesHome[0])
    }
    return (
        <table>
            {titles.length > 0 ? <TableHead titles={titles}/> : <> </>}
            <tbody>
            {statsNames.map((name, index) => {
                    return <TableRow
                        homeValue={statsValuesHome[index]}
                        title={statsNames[index]}
                        awayValue={statsValuesAway[index]}
                        key={name}
                    />
                }
            )}
            </tbody>
        </table>
    );
};

export default Tables;
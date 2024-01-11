import React from 'react';

// titles это массив заголовков таблицы

const TableHead = ({titles}) => {
    return (
        <thead>
        <tr>
            {titles.map(title => <th key={Math.random()}>{title}</th>).reverse()}
            <th>Statistics</th>
            {titles.map(title => <th key={Math.random()}>{title}</th>)}
        </tr>
        </thead>
    );
};

export default TableHead;
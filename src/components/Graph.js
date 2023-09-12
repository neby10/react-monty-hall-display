import React from 'react';

function Graph({ stats }) {

    return (
        <div className='Graph'>
            {
                Object.entries(stats.stay).map((item, index) => (
                    <p key={index}>{item[0]}, {item[1]}</p>
                ))
            }
        </div>
    )
}

export default Graph;
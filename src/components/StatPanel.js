import React from 'react';

function StatPanel({ stats }) {

    const tableStyle = {
        // borderCollapse: "separate",
        borderSpacing: "12px"
    }


    return (
        <div className='StatPanel'>
            <div>
                <h1>Game Results</h1>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Stays</th>
                            <th>Switches</th>
                            <th>Totals</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Wins</td>
                            <td>{stats.stay.wins}</td>
                            <td>{stats.switch.wins}</td>
                            <td>{stats.stay.wins + stats.switch.wins}</td>
                        </tr>
                        <tr>
                            <td>Losses</td>
                            <td>{stats.stay.losses}</td>
                            <td>{stats.switch.losses}</td>
                            <td>{stats.stay.losses + stats.switch.losses}</td>
                        </tr>
                        <tr>
                            <td>Total Games</td>
                            <td>{stats.stay.totalGames}</td>
                            <td>{stats.switch.totalGames}</td>
                            <td>{stats.stay.totalGames + stats.switch.totalGames}</td>
                        </tr>
                        <tr>
                            <td>Percent Wins</td>
                            {
                                stats.stay.totalGames === 0 && <td>0%</td>
                            }
                            {
                                stats.stay.totalGames > 0 && <td>{((stats.stay.wins / stats.stay.totalGames) * 100).toFixed(1)}%</td>
                            }
                            {
                                stats.switch.totalGames === 0 && <td>0%</td>
                            }
                            {
                                stats.switch.totalGames > 0 && <td>{((stats.switch.wins / stats.switch.totalGames) * 100).toFixed(1)}%</td>
                            }
                            {
                                stats.stay.totalGames === 0 && stats.switch.totalGames === 0 && <td>0%</td>
                            }
                            {
                                (stats.stay.totalGames > 0 || stats.switch.totalGames > 0) && <td>{((stats.stay.wins + stats.switch.wins) / (stats.stay.totalGames + stats.switch.totalGames) * 100).toFixed(1)}%</td>
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StatPanel;
import '../styles/Table.css';
import AbilityScoreRow from './AbilityScoreRow';


function Table() {
    return (
        <div className="Table">
            <table>
                <thead>
                    <tr>
                        <th>Ability</th>
                        <th>Score</th>
                        <th></th>
                        <th>Bonus</th>
                        <th></th>
                        <th>Total</th>
                        <th>Modifier</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <AbilityScoreRow ability="STR"></AbilityScoreRow>
                    <AbilityScoreRow ability="DEX"></AbilityScoreRow>
                    <AbilityScoreRow ability="CON"></AbilityScoreRow>
                    <AbilityScoreRow ability="INT"></AbilityScoreRow>
                    <AbilityScoreRow ability="WIS"></AbilityScoreRow>
                    <AbilityScoreRow ability="CHA"></AbilityScoreRow>
                </tbody>
            </table>
        </div>
    )
}

export default Table;
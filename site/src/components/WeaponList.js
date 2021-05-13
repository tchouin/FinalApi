import React from 'react';
import Weapon from "./Weapon";

class WeaponList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weapons: []
        };
    }

    render(){
        const lines = this.state.weapons.map(weapon => (
            <tr>
                <td>
                    <Weapon name={this.state.weapons['name']} type={this.state.weapons['type']}/>
                </td>
            </tr>
            )
        );

        return (
            <div className="Tableau">
                <h2>Armes Disponible : </h2>
                <table className="WeaponsTable">
                    <thead>
                    <tr>
                        <th>name | </th>
                        <th>type | </th>
                        <th>Modifier |  </th>
                        <th>Supprimer | </th>
                    </tr>
                    </thead>
                    <tbody>
                        {lines}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default (WeaponList);
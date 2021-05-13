import React from 'react';

class Weapon extends React.Component {

    render(){

        return (
            <tr>
                <td>{this.props.weapon.name} : </td>
                <td>{this.props.weapon.type}</td>
                <td>{this.props.wepon.damage}</td>
                <td>
                    <button>Éditer</button>
                </td>
                <td>
                    <button>Supprimer</button>
                </td>
            </tr>
        );
    }
}

export default (Weapon);
import React from 'react';

class Weapon extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){

        return (
            <div>
            <tr>
                <td>{this.props['name']}</td>
                <td>{this.props['type']}</td>
                <td>
                    <button>Modifier</button>
                </td>
                <td>
                    <button>Supprimer</button>
                </td>
            </tr>
                </div>
        );
    }
}

export default (Weapon);
import React from 'react';


class Formulaire extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type:'',
            damage:'',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const weapon = {
            name: this.state.name,
            type: this.state.type,
            damage: this.state.damage,
        };
        this.props.AddWeapons(weapon);
        event.preventDefault();
        this.clearInput();
    }

    render(){

        return (
            <div>

                <form>

                    <table>
                        <thead>
                        <tr>
                            <th colSpan="2"><h3>Ajouter une citation</h3></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><label>Nom de l'arme : </label></td>
                            <td>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    >
                                    </input>
                            </td>
                        </tr>

                        <tr>
                            <td><label>Type : </label></td>
                            <td style={{'textAlign':'right'}}>
                                <input
                                    type="text"
                                    id="type"
                                    name="type"
                                    size="50"
                                    value={this.state.type}
                                    onChange={this.handleChange}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td><label>Dégâts : </label></td>
                            <td style={{'textAlign':'right'}}>
                                <input
                                    type="text"
                                    id="damage"
                                    name="damage"
                                    size="50"
                                    value={this.state.damage}
                                    onChange={this.handleChange}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td> </td>
                            <td style={{'textAlign':'right'}}>
                                <button
                                    color="primary"
                                    onClick={this.handleSubmit}
                                >
                                    Sauvegarder
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>


                </form>
            </div>
        );
    }
}

export default (Formulaire);
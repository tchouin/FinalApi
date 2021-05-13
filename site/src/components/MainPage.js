import React from 'react';
import Api from '../Refs/Api';
import WeaponList from "./WeaponList";
import Formulaire from "./Formulaire";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weapons: [],
            result : 0,
        }

        this.AddWeapons = this.AddWeapons.bind(this);
        this.DeleteWeapons = this.DeleteWeapons.bind(this);

    }

    componentDidMount(){

    }

    list(){
        Api({
            method: 'GET',
            url: '/weapons',
        })
            .then((res) => {
                const returnedData = res.data;
                this.setState({weapons : returnedData });
            });
    }

    AddWeapons(WeaponToAdd) {
        Api({
            method: 'POST',
            url: '/weapons/create',
            data: {
                name: WeaponToAdd.name,
                type: WeaponToAdd.type,
                damage: WeaponToAdd.damage,
            }
        })
            .then((resultat) => {
                WeaponToAdd.name = resultat.data.name;
                const WeaponsAdded = [...this.state.weapons, WeaponToAdd];
                this.setState({weapons: WeaponsAdded});
            });
        console.log("Arme ajoutée")
    }

    DeleteWeapons(id) {
        Api({
            method: 'DELETE',
            url: '/weapons/delete?id=' . id,
        })
            .then((resultat) => {
                this.state.result = resultat.status
            });
        alert("arme supprimée : " . this.state.result);
    }

    render() {
        return (
            <div>
                <h2>Main Page</h2>

                <table className="Table">
                    <tbody>
                    <tr>
                        <td><Formulaire ajouArme={this.AddWeapons}/></td>
                        <td><WeaponList weapons={this.list}/></td>
                    </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}

export default MainPage;
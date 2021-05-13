import React from 'react';
import Api from '../Refs/Api';
import WeaponList from "./WeaponList";
import Formulaire from "./Formulaire";
import FormulaireModif from "./FormulaireModif";

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

    UpdateWeapon(WeaponToUpdate) {
        Api({
            method: 'POST',
            url: '/weapons/update',
            data: {
                name: WeaponToUpdate.name,
                type: WeaponToUpdate.type,
                damage: WeaponToUpdate.damage,
            }
        })
            .then((resultat) => {
                WeaponToUpdate.type = resultat.data.type;
                const WeaponsUpdated = [...this.state.weapons, WeaponToUpdate];
                this.setState({weapons: WeaponsUpdated});
            });
        console.log("Arme modifié")
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

                        <td><Formulaire ajoutArme={this.AddWeapons}/></td>
                        <td><WeaponList weapons={this.list}/></td>
                        <td><FormulaireModif weapon={this.UpdateWeapon}/></td>
                    </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}

export default MainPage;
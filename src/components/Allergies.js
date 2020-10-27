import React from 'react';
import { database } from '../firebase/firebase';

class Allergies extends React.Component {
    constructor(props) {
        super(props);
        this.allergies = [];
        this.state = {
            suggestions: this.allergies,
            added: []
        };
    }

    componentDidMount() {
        database.ref('allergies').once('value')
            .then((snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    this.allergies.push(childSnapshot.val());
                });
                this.allergies.sort((a, b) => b.frequency - a.frequency)
            });
    }

    onTextChange = (e) => {
        const value = e.target.value;
        if (value.length === 0) {
            this.setState(() => ({ suggestions: this.allergies }))
        } else {
            const suggestions = this.allergies.filter(v => v.allergy.toLowerCase().startsWith(value.toLowerCase()))
            suggestions.push({ allergy: value });
            this.setState(() => ({ suggestions }))
        }
    }

    onElClick = (e) => {
        const value = e.target.innerHTML;
        const added = this.state.added;
        added.push(value);
        this.setState(() => ({ added }));

    }

    render() {
        return (
            <div>
                <div className='formelement'>
                    <label>Allergy: </label>
                    <input type='text' id='allergy' onChange={this.onTextChange}></input>
                </div>
                <div className='formelement'>
                    <label>Suggestions: </label>
                    <ul className='suggestions'>
                        {this.state.suggestions.map((allergy) => <li onClick={this.onElClick}>{allergy.allergy}</li>)}
                    </ul>
                </div>
                <div className='formelement'>
                    <label>Allergies added:</label>
                    <ul>
                        {this.state.added.map((add) => (<li>{add}</li>))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Allergies;
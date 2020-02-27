import React, {useState, useEffect} from 'react';
import './Pies.css';
import Pie from './Pie/Pie';

//props are an object
const Pies = (props) => { //props can be named anything because it is just a param
    const [pies, setPies] = useState([]);

    const testDataPies = [
        {
            nameOfPie: 'Pumpkin',
            baseOfPie: 'Pumpkin puree',
            crust: 'Pastry',
            timeToBake: 50,
            servings: 8,
            rating: 4.2
        },
        {
            nameOfPie: 'Apple',
            baseOfPie: 'Jam',
            crust: 'Graham cracker',
            timeToBake: 30,
            servings: 6,
            rating: 4.0
        },
        {
            nameOfPie: 'Chocolate',
            baseOfPie: 'Pudding',
            crust: 'Pastry',
            timeToBake: 20,
            servings: 8,
            rating: 5.0
        }
    ]

    let another = [];

    return (
        <table>
            <thead>
                <tr>
                    <th>Name of Pie</th>
                    <th>Filling</th>
                    <th>Crust</th>
                    <th>Bake Time</th>
                    <th>Servings</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {/* TODO: Render the pies here */}
                {
                    testDataPies.map( (value, index) => {
                        return (
                        <tr key={index}>
                            <Pie testData={value}/>
                        </tr>
                       );
                    })
                }
            </tbody>
        </table>
    )
}

export default Pies;
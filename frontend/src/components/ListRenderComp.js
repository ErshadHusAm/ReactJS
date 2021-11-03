import React from 'react'
import ShowColorsComp from './ShowColorsComp';
// import ShowUserComp from './ShowUserComp';

const ListRenderComp = () => {
    let users = [
        {
            id: 1,
            name: "Yusuf",
            age: 12
        },
        {
            id: 2,
            name: "Tushar",
            age: 15
        },
        {
            id: 3,
            name: "Tarek",
            age: 22
        },
        {
            id: 4,
            name: "Husam",
            age: 14
        }
    ]
    let colors = ['red','black','blue','orange','green'];
    // let names = ['Husam','Tusar','Tarek','Yusuf']

    return (
        <div>
        <h1>User list</h1>
        {
            users.map(ele =>(
                <ul>
                    <li>Name is {ele.name} and age is {ele.age}</li>
                </ul>
            ))
        }
        {
            colors.map((color, index) => <ShowColorsComp color={color} styleClass={(index%2 === 0) ? 'red' : 'blue'}/> )
        }
            
        </div>
    )
}
export default ListRenderComp;
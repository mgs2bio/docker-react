import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    state = {
        users : [
            {name: "John", age: 20},
            {name: "Jill", age: 30},
            {name: "Peter", age: 40}
        ],
        title: "User List",
    }
    makeMeYounger = () => {
          let newState = this.state.users.map((user) => user.age -= 12);

          this.setState({
            newState
          })
    }

    changeName = () => {
        console.log(test.value)
        this.setState({
            title: test.value
        })
        console.log(this.state)
    }


    render(){


        return ( <div>

            <button onClick = {this.makeMeYounger}>Make us 12 years younger</button>
            <br/>

            <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
            <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
            <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
            <p>{this.state.title}</p>
            <br/>
            <button onClick={this.changeName}>Change State</button>
            <br/>
            <input id="test" type="text"/>
            <ul>
                {
                    this.state.users.map((user) => {
                       
                     }
                    )
                }
            </ul>
        </div>)
        
    }
}

export default Users;
import axios from 'axios';
import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class AddFriend extends React.Component {
    state = {
        newFriend: {
            name: "",
            age: "",
            email: "",
        }
    };

handleChange = e => {
    this.setState({
        newFriend: {
          ...this.state.newFriend,
          [e.target.name]: e.target.value
        }
      });  
}

onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/friends', this.state.newFriend)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                      type="text"
                      name="name"
                      value={this.state.newFriend.name}
                      onChange={this.handleChange}
                    />
                    <input
                      type="number"
                      name="age"
                      value={this.state.newFriend.age}
                      onChange={this.handleChange}
                    />
                    <input
                      type="email"
                      name="email"
                      value={this.state.newFriend.email}
                      onChange={this.handleChange}
                    />
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }
};

export default AddFriend;
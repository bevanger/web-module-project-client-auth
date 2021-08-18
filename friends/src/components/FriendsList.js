import React from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
    state = { 
        friends: []
    };

    componentDidMount() { 
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res)
            this.setState({
                friends: res.data
            })
        }).catch(err => {
            console.log(err)
        });
    };
    render() {
        return(
            this.state.friends.map((friend) => {
                return(
                <div key={friend.id}>
                <h4>Name: {friend.name}</h4>
                <h4>Age: {friend.age}</h4>
                <h4>Email: {friend.email}</h4>
                </div>
                )
            })
        )
    }
}

export default FriendsList;
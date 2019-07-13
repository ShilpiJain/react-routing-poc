import React, { Component } from 'react'
import axios from 'axios';

class Post extends Component {
    state = ({
        post : null
    })
    componentDidMount(){
        let id = this.props.match.params.id
        // console.log("console.log(id);" + id);
        axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
        .then(res => {
            let post = res.data;
            // let id = post.id;
            // console.log(id);
            this.setState({
                post
            })
        })      
        
    }

    render() {
        console.log(this.state.post)
        const post = this.state.post ? (
            <div className="text-center">
                <p>ID :- {this.state.post.id}</p>
                <p>User ID :- {this.state.post.userId}</p> 
                <p>Tittle :- {this.state.post.title}</p> 
                <p>Body :- {this.state.post.body}</p>
            </div>
        ) : (
            <div className="text-center">
                 LOADING....
            </div>
        )
        return (
            <>
                {  post }
            </>
        )
    }
}

export default Post;
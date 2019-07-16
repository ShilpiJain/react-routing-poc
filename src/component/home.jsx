import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import leftIcon from "../left.jpg"
class Home extends React.Component {
    state = {
        posts : []
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            let innerPosts = res.data;
            let posts = innerPosts;
            console.log(posts)
            this.setState({
                posts
            })
        }).catch(err => {
            console.log("error", err)
        }); 
    }
    render(){
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map( post => {
                return (
                    <div className="post-card" key={post.id}>
                        <img src={leftIcon} alt="left"/>
                        Name :- <Link to={"/posts/" + post.id}><br/>
                            {post.id}
                        </Link><br/>
                        Tittle :- {post.title}<br/>
                        Body :- {post.body}<br/>
                    </div>
                 ) 
            })
         ) : (
            <div className="no-post">No Post Yet</div>
         )
        return (
            // <div>
            //    <h1 className="text-center">Home</h1> 
            //    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
            // </div>
            <>
                { postList }
            </>
        )
    }
}

export default Home;
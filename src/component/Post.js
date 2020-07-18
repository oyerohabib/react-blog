import React, { Component } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'

class Post extends Component {
    // state = {
    //     post : null
    // }
    // componentDidMount () {
    //     console.log(this.props);
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //         .then(response => {
    //             this.setState({
    //                 post : response.data
    //             })
    //             // console.log(response)
    //         })
    // }
    render () {

        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <div>{this.props.post.body}</div>
            </div>
        ) : (
            <div className="center">Loading Post...</div>
        )

        return (
            <div className="container">
                <h4>{post}</h4>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id  = ownProps.match.params.post_id;
    return {
        post : state.posts.find(post => post.id === id)
    }
}

export default connect(mapStateToProps)(Post)
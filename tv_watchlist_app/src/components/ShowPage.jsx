import React, { Component } from 'react'
import axios from 'axios'

export default class ShowPage extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            id: props.match,
            userId: this.props.userId,
            image: "",
            title: "",
            comments: [],
            body: ""

        }
    }

    getShowById = async () => {
        let { id } = this.state
        let url = `/shows/${id}`
        try {

            let res = await axios.get(url)
            let show = res.data.shows

            this.setState({
                image: show.img_url,
                title: show.title
            })
        } catch (err) {
            console.log(err)
        }
    }



    getShowComments = async () => {
        let { id, comments } = this.state
        let url = `/comments/show/${id}`
        try {
            let res = await axios.get(url)
            console.log('res', res.data.comments)
            let comment_body = res.data.comments
            comment_body.map((el)=>{
                comments.push(el.comment_body)
            })
            
            

        } catch (err) {
            console.log(err)
        }
    }

    onChange = (e) => {
        console.log("value", e.target.value)
        this.setState({
            body: e.target.value
        })

    }

    onSubmit = async (e) => {
        let { comments, body,id, userId } = this.state
        let postObj = {}
        let url = '/comments/comment'
        e.preventDefault()
        comments.push(body)
        postObj.comment_body = body
        postObj.user_id = userId
        postObj.show_id = id
        try{
            let post = await axios.post(url,postObj)

        }catch(err){
            console.log(err)
        }
        
        
        
        
        this.setState({
            body: ""
        })
    }

    componentDidMount() {
        this.getShowById()
        this.getShowComments()
    }

    render() {
        let { image, title, comments, body } = this.state
        console.log('comments',comments)
        // console.log("title", title)
        // console.log("body", body)
        return (
            <div>
                <div>
                    <h1>{title}</h1>
                    <img
                        src={image}
                        alt="broken" />
                </div>

                <div>
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="comment">Comment</label>{" "}
                        <input
                            id="comment"
                            type='text'
                            placeholder='Comment'
                            value={body}
                            onChange={this.onChange} />
                        <button type='submit'>Add</button>
                    </form>
                </div>

                <div>
                    <ul>
                        {comments.map((el,ind)=>{
                            return <li key = {ind}>{el}</li>
                        })}
                    </ul>

                </div>

            </div>
        )
    }
}
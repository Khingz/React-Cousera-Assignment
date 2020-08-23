import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetails extends Component {
    render() {
        console.log(this.props.dish);
        let dishComments = this.props.dish.comments.map(comment => {
            const dateOptions = {year: 'numeric', month: 'short', day: '2-digit' };
            const newCommentDate = new Date(comment.date); 
            const commentDate = newCommentDate.toLocaleDateString('en-US', dateOptions);

            return (
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {commentDate}</p>
                </div>
            )
        })

        return (
            <div className='container'>
                <div className='row'>
                    <Card className='col-12 col-md-5 m-1'>
                        <CardImg width='100%' src={this.props.dish.image}/>
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                    <div className='col-12 col-md-5 m-1 p-3'>
                        <h4>Comments</h4>
                        {dishComments}
                    </div>
                </div>  
            </div>
            
        )
    }
}


export default DishDetails;
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish ({ dish }) {
    return(
        <Card className='col-12 col-md-5 m-1'>
            <CardImg width='100%' src={dish.image}/>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    ) 
}

function RenderComments ( {comment} ) {
    const dateOptions = {year: 'numeric', month: 'short', day: '2-digit' };
    const newCommentDate = new Date(comment.date);
    const commentDate = newCommentDate.toLocaleDateString('en-US', dateOptions);
    return (
        <div key={comment.id}>
            <p>{comment.comment}</p>
            <p>-- {comment.author}, {commentDate}</p>
        </div>
    )
}


const DishDetails = props => {
    let dishComments = props.dish.comments.map(comment => {
        return (
            <RenderComments comment = {comment}/>
        )
    })

    return (
        <div className='container'>
            <div className='row'>
                <RenderDish dish={props.dish}/>
                <div className='col-12 col-md-5 m-1 p-3'>
                    <h4>Comments</h4>
                    {dishComments}
                </div>
            </div>  
        </div>
        
    )

}


export default DishDetails;
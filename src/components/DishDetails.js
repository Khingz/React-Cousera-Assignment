import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Col, Row, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


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

class CommentForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false
        }

        this.toggleCommentModal = this.toggleCommentModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    toggleCommentModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }


    handleSubmit(value) {
        console.log('Current State is: ' + JSON.stringify(value));
        alert('Current State is: ' + JSON.stringify(value));
        this.toggleCommentModal();
        // event.preventDefault();
    }

    render() {
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);

        return (
            <>
                <Button outline onClick={this.toggleCommentModal}><span className="fa fa-pencil fa-lg mr-1"></span>Submit Comment</Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleCommentModal}>
                    <ModalHeader toggle={this.toggleCommentModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Col md={{size: 12, offset: 0}}>
                                <Control.select model=".rating" name="rating"
                                    className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                                <Label htmlFor="author" md={6}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                         <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={6}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:5, offset: 0}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                    </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}


const DishDetails = props => {
    let dishComments = props.comments.map(comment => {
        return (
            <>
                <RenderComments comment = {comment}/>
            </> 
        )
    })

    return (
        <div className='container'>
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/home'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to='/menu'>Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <RenderDish dish={props.dish}/>
                <div className='col-12 col-md-5 m-1 p-3'>
                    <h4>Comments</h4>
                    {dishComments}
                    <CommentForm />
                </div>
            </div>  
        </div>
        
    )

}


export default DishDetails;
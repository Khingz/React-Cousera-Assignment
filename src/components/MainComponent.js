import React, { Component} from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetails from './DishDetails';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, fetchPromos  } from '../redux/ActionCreators';
import { Transition, CSSTransition, TransitionGroup } from 'react-transition-group';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  postComment: (dishid, rating, author, comment) => dispatch(postComment(dishid, rating, author, comment)),
  fetchDishes: () => (dispatch(fetchDishes())),
  fetchComments: () => (dispatch(fetchComments())),
  fetchPromos: () => (dispatch(fetchPromos()))


})

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

// renderDish(dish) {
//     if (dish !== null) {
//         return (
//             <DishDetails dish={this.props.dishes.filter(dish => dish.id === this.props.selectedDish)[0]} />
//         )
//     } else {
//         return (
//             <div></div>
//         )
//     }
// }


  render() {

    const HomePage = () => {
      return (
        <Home dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]} dishesLoading={this.props.dishes.isLoading} dishesErrMess={this.props.dishes.errMess} promotion={this.props.promotions.promotions.filter(promo => promo.featured)[0]} promosLoading={this.props.promotions.isLoading} promosErrMess={this.props.promotions.errMess} leader={this.props.leaders.filter(leader => leader.featured)[0]}/>
      )
    }

    const DishWithId = ({ match }) => {
      return (
        <DishDetails dish={this.props.dishes.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]} isLoading={this.props.dishes.isLoading} errMess={this.props.dishes.errMess} comments={this.props.comments.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))} commentsErrMess={this.props.comments.errMess} postComment={this.props.postComment}/>
      )
    }
  
    return (
      <div className="App">
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames='page' timeout={300}>
            <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes = {this.props.dishes}/> } />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={Contact} />
              <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
              <Redirect to='/home' />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        
        <Footer />
      </div>
    );
  }
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

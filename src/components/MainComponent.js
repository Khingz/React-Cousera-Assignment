import React, { Component} from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetails from './DishDetails';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

renderDish(dish) {
    if (dish !== null) {
        return (
            <DishDetails dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} />
        )
    } else {
        return (
            <div></div>
        )
    }
}


  render() {
    
    const HomePage = () => {
      return (
        <Home />
      )
    }
  
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu dishes = {this.state.dishes}/> } />
          <Redirect to='/home' />
        </Switch>
        {/* <Menu dishes = {this.state.dishes} onClick={dishId => this.onDishSelect(dishId)}/>
        <div>
            {this.renderDish(this.state.selectedDish)}
        </div> */}
        <Footer />
      </div>
    );
  }
  
}

export default Main;

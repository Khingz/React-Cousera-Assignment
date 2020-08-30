import React, { Component} from 'react';
import Menu from './MenuComponent';
import DishDetails from './DishDetails';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({
        selectedDish: dishId
    })
    console.log(this.state.selectedDish);

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
    return (
      <div className="App">
        <Header />
        <Menu dishes = {this.state.dishes} onClick={dishId => this.onDishSelect(dishId)}/>
        <div>
            {this.renderDish(this.state.selectedDish)}
        </div>
        <Footer />
      </div>
    );
  }
  
}

export default Main;

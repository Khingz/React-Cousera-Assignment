import React, { Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetails from './DishDetails';
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
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>Khingz Cushion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.dishes} onClick={dishId => this.onDishSelect(dishId)}/>
        <div>
            {this.renderDish(this.state.selectedDish)}
        </div>
      </div>
    );
  }
  
}

export default Main;

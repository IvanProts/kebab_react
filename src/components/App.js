import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Order from './Order';
import Burger from './Burger';
import MenuAdmin from './MenuAdmin';
import sampleBurgers from '../sample-burgers';
import base from '../base';


class App extends React.Component {

  static propTypes = {
    match: PropTypes.object
  }

  state = {
    burgers: {},
    order: {}
  }

  componentDidMount() {
    const {params} = this.props.match;

    const localStorageRef = localStorage.getItem(params.restaurantId);
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }

    this.ref = base.syncState(`${params.restaurantId}/burgers`, {
      context: this,
      state: 'burgers'
    });
  }

  componentDidUpdate(){
    const {params} = this.props.match;

    localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order));
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  addBurger = (burger) => {
    const burgers = {...this.state.burgers};
    burgers[`burger${Date.now()}`] = burger;
    this.setState({ burgers });
  }

  updateBurger = (key, updatedBurger) => {
    const burgers = {...this.state.burgers};
    burgers[key] = updatedBurger;
    this.setState({burgers});
  }

  deleteBurger = key => {
    const burgers = {...this.state.burgers};
    burgers[key] = null;
    this.setState({ burgers });
  }

  deleteFromOrder = (key) => {
    const order = {...this.state.order};
    delete order[key];
    this.setState({ order });
  }

  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }

  loadSampleBurgers = () => {
    this.setState({
      burgers: sampleBurgers
    });
  }

  render(){
    return(
      <div className="burger-paradise">
        <div className="menu">
          <Header 
          title="Дуже сочні кебабусики"
          />
          <ul className="burgers">
            {Object.keys(this.state.burgers).map(key => {
              return (
              <Burger 
              key={key}
              index={key}
              addToOrder={this.addToOrder}
              details={this.state.burgers[key]}
              />
              );
            })}
          </ul>
        </div>
          <Order 
          burgers={this.state.burgers} 
          order={this.state.order}
          deleteFromOrder={this.deleteFromOrder}
          />
          <MenuAdmin 
          addBurger={this.addBurger}
          loadSampleBurgers = {this.loadSampleBurgers}
          burgers={this.state.burgers}
          updateBurger={this.updateBurger}
          deleteBurger={this.deleteBurger}
          />
      </div>
    )
  }
}

export default App;
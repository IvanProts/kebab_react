import React from 'react';
import Header from './Header';
import Order from './Order';
import Burger from './Burger';
import MenuAdmin from './MenuAdmin';
import sampleBurgers from '../sample-burgers';

class App extends React.Component {

  state = {
    burgers: {},
    order: {}
  }

  addBurger = (burger) => {
    const burgers = {...this.state.burgers};
    burgers[`burger${Date.now()}`] = burger;
    this.setState({burgers});
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
          <Header title="Дуже сочні кебабусики"/>
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
          <Order/>
          <MenuAdmin addBurger={this.addBurger}
          loadSampleBurgers = {
            this.loadSampleBurgers}
          />
      </div>
    )
  }
}

export default App;
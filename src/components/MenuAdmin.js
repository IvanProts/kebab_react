import React from 'react';
import AddBurgerForm from './AddBurgerForm';

class MenuAdmin extends React.Component {
  render() {
    return (
      <div className="menu-admin">
        <h2>Керування Меню</h2>
        <AddBurgerForm addBurger={this.props.addBurger}/>
      </div>
    )
  }
}

export default MenuAdmin;
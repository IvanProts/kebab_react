import React from 'react';
import PropTypees from 'prop-types';
import AddBurgerForm from './AddBurgerForm';
import EditBurgerForm from './EditBurgerForm';

class MenuAdmin extends React.Component {
  static propTypes = {
    burgers: PropTypees.object,
    deleteBurger: PropTypees.func,
    updateBurger: PropTypees.func,
    addBurger: PropTypees.func,
    loadSampleBurgers: PropTypees.func,
  }
  render() {
    return (
      <div className="menu-admin">
        <h2>Керування Меню</h2>
        {Object.keys(this.props.burgers).map(key =>{
          return <EditBurgerForm 
          key={key} 
          burger={this.props.burgers[key]} updateBurger={this.props.updateBurger}
          index={key}
          deleteBurger={this.props.deleteBurger}
          />
        })}
        <AddBurgerForm addBurger={this.props.addBurger}/>
        <button onClick={this.props.loadSampleBurgers}>Загрузити бургери</button>
      </div>
    )
  }
}

export default MenuAdmin;
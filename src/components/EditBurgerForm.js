import React from 'react';

class EditBurgerForm extends React.Component {

  handleChange = event => {
    const updatedBurger={
      ...this.props.burger,
      [event.currentTarget.name]: event.currentTarget.value,
    };

    this.props.updateBurger(this.props.index, updatedBurger);
  };

  render() {
    return (
      <div className='burger-edit'>
        <textarea onChange={this.handleChange} name='desc' value={this.props.burger.desc}></textarea>
        <input onChange={this.handleChange} name='image' type='text' value={this.props.burger.image}/>
        <input onChange={this.handleChange} name='name' type='text' value={this.props.burger.name}/>
        <input onChange={this.handleChange} name='price' type='text' value={this.props.burger.price}/>
        <select onChange={this.handleChange} name='status' className='status' value={this.props.burger.status}>
          <option value='available'>Доступно</option>
          <option value='unavailable'>Неоступно</option>
          </select>

        <button onClick={() =>
        this.props.deleteBurger(this.props.index)
      }
        >Видалити з Меню</button>
      </div>
    );
  }
}

export default EditBurgerForm;
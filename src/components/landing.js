import React from 'react';
import restaurants from "../sample-restaurants";
import PropTypes from 'prop-types';

class Landing extends React.Component {

  static propTypes = {
    history: PropTypes.object
  }

  state = {
    display: false,
    title: "",
    url: ""
  }

  displayList = () => {
    const { display } = this.state;
    this.setState({display: !display});
  };

  getTitle = (restaurants) => {
    const {title, url} = restaurants;
    this.setState({title, url, display: false})
  };

  goToRestourant = () => {
    const {url} = this.state;
    this.props.history.push(`/restaurant/${url}`)
  };

  render() {
    return (
    <div className="restaurant_select">
      <div className = "restaurant_select_top">
        <div onClick={this.displayList} className = "restaurant_select_top-header font-effect-outline">{this.state.title ? this.state.title : "Вибери ресторан"}</div>
        <div className="arrow_picker">
          <div className="arrow_picker-up"></div>
          <div className="arrow_picker-down"></div>
        </div>
      </div>

      {this.state.display ? (
        <div className="restaurant_select_bottom">
        <ul>
          {
            restaurants.map(restaurants => {
              return <li onClick={()=>this.getTitle(restaurants)} key={restaurants.id}>{restaurants.title}</li>
            })
          }
        </ul>
      </div>) : null}
    {this.state.title && !this.state.display ?(<button onClick={this.goToRestourant}>Перейти в ресторан</button>) : null}
  </div>
  )}
}

export default Landing;
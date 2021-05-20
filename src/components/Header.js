import React from 'react';

class Header extends React.Component {
  render() {
    return ( 
      <header className="top">
        <div className="wrap">
          <div className="header-content">

            <div className="header-rating">
              <div className="header-rating_tag">Рейтинг:</div>
            <div className="header-rating_icon">+++</div>
            </div>

            <div className="header-divider"></div>
            <h1 className="fonr-effect-fire-animation">
              Кебаб Шеф
            </h1>
            
            <h3>
              <span>
                Швидка доставка гарячих 
                <span className="sub-header">#кебабів</span>
              </span>
            </h3>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
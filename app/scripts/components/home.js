/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from "react";
import Good from "./good.js";

class Home extends React.Component {
  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof Home
   */
  

  render() {
    if (this.props.goods === null) {
      return <section id="home">There is no data.</section>;
    }
    return (
      <section id="home">
        <div className="content">
          {this.props.goods.map((value, index) => {
            return (
                <Good detail={value}  key={index}/>
            );
          })}
        </div>
      </section>
    );
  }
}

// Export out the React Component
module.exports = Home;

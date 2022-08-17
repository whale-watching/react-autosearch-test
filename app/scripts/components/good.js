/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from "react";

function Good(props) {
  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof Good
   */
  return (
    <section id="good">
      <div>
        <img src={props.detail.picture} alt="sampoo" height="250px" width="100px"/>
      </div>
      <div>
        <div className="name">{props.detail.name}</div>
        <div className="about">{props.detail.about}</div>
      </div>
      <div>
        <div className="price">{props.detail.price}</div>
        <div className="tag">
          {props.detail.tags.map((tvalue, tindex) => {
            return <div key={tindex}>{tvalue}</div>;
          })}
        </div>
      </div>
    </section>
  );
}

// Export out the React Component
module.exports = Good;

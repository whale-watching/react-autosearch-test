/**
 * The Initial React Setup file
 * ...
 *
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 *
 * == JS
 * All files in here start from this init point for the React Components.
 *
 *
 * Firstly we need to import the React JS Library
 */
import React from "react";
import ReactDOM from "react-dom";

import SearchUtil from "./components/filter";
import Menu from "./components/menu";
import Home from "./components/home";

/**
 * We can start our initial App here in the main.js file
 */
class App extends React.Component {
  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */
  constructor(props) {
    super(props);
    this.state = { goods: null, searchWord: "" };
    this.SetData = this.SetData.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:3035/", { mode: "cors" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          goods: data,
          searchWord: "",
        });
      })
      .catch((err) => console.error(err));
  }
  SetData(props) {
    this.setState({
      searchWord: props,
    });
  }

  render() {
    return (
      <div className="App">
        <Menu SetData={this.SetData} />
        <Home
          goods={SearchUtil.filterArrayByString(
            this.state.goods,
            this.state.searchWord
          )}
        />
      </div>
    );
  }
}

// Render this out
ReactDOM.render(<App />, document.getElementById("root"));

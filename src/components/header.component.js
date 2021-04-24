import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>This is Header</h1>
        {/* <main>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
                          
              <li>
                <Link to="/about">about</Link>
              </li>
                          
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </main> */}
      </div>
    );
  }
}

export default Header;

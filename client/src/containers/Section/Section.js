import React, { Component } from 'react';
import './Section.css';
import API from '../../utils/API';
import ScrollTo from 'react-scroll-into-view';

class Section extends Component {
  render() {
    return (
      <section className={this.props.class} id={this.props.name}>
        {this.props.children}
        <div className="content">111</div>
      </section>
    );
  }
}

export default Section;

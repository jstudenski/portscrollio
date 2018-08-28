import React from 'react';
// import PropTypes from 'prop-types';
import ScrollTo from 'react-scroll-into-view';

class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 1,
    };
    this.ref = React.createRef();
    this.focusTextInput = () => {
      const DOMRect = this.ref.current.getBoundingClientRect();
      this.midline = DOMRect.top + (DOMRect.height / 2) + window.scrollY;
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {

  }

  componentDidUpdate() {
      this.focusTextInput();
      this.handleScroll()
  }



handleScroll() {

  let color = '0';

  switch (true) {
    case (this.midline > this.props.windowHeight * 4):
     color = '5';
      break;
    case (this.midline > this.props.windowHeight * 3):
      color = '4';
      break;
    case (this.midline > this.props.windowHeight * 2):
      color = '3';
      break;
    default:
      color = '2';
      break;
  }
  // return color;
  if (this.state.color != color) {
    this.setState({ color: color });
  }

}

  render() {
    return (
      <div>
        <li ref={this.ref} >
          <ScrollTo selector={this.props.selector}>
            {this.props.text}
            {this.state.color}
          </ScrollTo>
        </li>
      </div>
    )
  }
}

// NavItem.propTypes = {
//   // title: PropTypes.string.isRequired,
// };

// NavItem.defaultProps = {
//   // title: 'Hello World',
// };

export default NavItem;

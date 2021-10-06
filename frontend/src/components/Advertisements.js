import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAdvertisements } from '../actions/advertisements';

export class Advertisements extends Component {
  
  static propTypes = {
    advertisements: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.getAdvertisements();
  }

  render() {

    return (
      <div>
        <h1>Advertisements</h1>

        <ul>
          { this.props.advertisements.map((advertisement) => (
            <li><div>
                <p>{advertisement.title} - advertiser: {advertisement.advertiser}</p>
              </div>
            </li>
          )) }
        </ul>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  advertisements: state.advertisement.advertisements
});

export default connect(mapStateToProps, { getAdvertisements })(Advertisements);

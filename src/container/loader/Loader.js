import React from 'react';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import * as actions from '../../actions/books/bookActions';


// const override = css`
//     display: block;
//     margin: 0 auto;
//     border-color: red;
// `;

class Spinner extends React.Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="sweet-loading">
        <ClipLoader
          // css={override}
          sizeUnit="px"
          size={150}
          color="#123abc"
          loading={loading}
        />
      </div>
    );
  }
}
export default Spinner;

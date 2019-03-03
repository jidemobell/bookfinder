import React from 'react';
import { css, jsx } from '@emotion/core';
import { HashLoader } from 'react-spinners';

class Spinner extends React.Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="sweet-loading" style={{ marginTop: "100px" }}>
        <HashLoader
          sizeUnit="px"
          size={50}
          color="#01C4A7"
          loading={loading}
        />
      </div>
    );
  }
}
export default Spinner;

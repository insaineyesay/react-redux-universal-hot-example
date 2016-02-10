import React from 'react';

const Integrations = (props) => {
  const styles = require('./Integrations.scss');
  const {wtf, idk} = props;
  return (
      <div className={styles.integrations + ' well' + wtf + idk}>
        <div className="integrations">
        <p>This is the integrations area</p>
        </div>
      </div>
    );
};
Integrations.propTypes = {
  wtf: React.PropTypes.string,
  idk: React.PropTypes.string
};
export default Integrations;

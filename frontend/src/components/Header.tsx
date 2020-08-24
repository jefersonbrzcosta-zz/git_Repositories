import React from 'react';
import GithubLogo from '../assets/github_logo.png';

const Header: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        margin: 20,
      }}
    >
      <img src={GithubLogo} alt="github_logo" />
    </div>
  );
};

export default Header;

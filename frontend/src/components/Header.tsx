import React from 'react';
import GithubLogo from '../assets/github_logo.png';

const Header: React.FC = () => {
  return (
    <div className="header">
      <img src={GithubLogo} alt="github_logo" />
    </div>
  );
};

export default Header;

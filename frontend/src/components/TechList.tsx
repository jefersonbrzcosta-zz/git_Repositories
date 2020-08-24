import React from 'react';
import {
  PHP,
  Python,
  Javascript,
  Typescript,
  CSharp,
  CPlus,
  Java,
  Others,
  Ruby,
  Nodejs,
} from '../assets/icons';
import {
  List,
  ListItemText,
  ListItem,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';

interface Props {
  handleChoice: Function;
}

const TechList = ({ handleChoice }: Props) => {
  const iconSet = [
    { name: 'PHP', icon: PHP, term: 'php' },
    { name: 'Python', icon: Python, term: 'python' },
    { name: 'Javascript', icon: Javascript, term: 'javascript' },
    { name: 'Typescript', icon: Typescript, term: 'typescript' },
    { name: 'C#', icon: CSharp, term: 'csharp' },
    { name: 'C++', icon: CPlus, term: 'cpp' },
    { name: 'Java', icon: Java, term: 'java' },
    { name: 'Ruby on Rails', icon: Ruby, term: 'ruby' },
    { name: 'Nodejs', icon: Nodejs, term: 'node' },
    { name: 'Others', icon: Others, term: 'others' },
  ];
  return (
    <List>
      {iconSet.map((item) => (
        <ListItem
          button
          key={item.name}
          onClick={() => handleChoice(item.term)}
        >
          <ListItemAvatar>
            <Avatar src={item.icon} />
          </ListItemAvatar>
          <ListItemText primary={`${item.name}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default TechList;

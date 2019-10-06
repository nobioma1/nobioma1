import React from 'react';
import SimpleIcons from 'simple-icons-react-component';

export default (name = '') => {
  switch (name.toLowerCase()) {
    case 'html':
      return <SimpleIcons name="HTML5" />;
    case 'css':
      return <SimpleIcons name="CSS3" />;
    case 'javascript':
      return <SimpleIcons name="JavaScript" />;
    case 'node.js':
      return <SimpleIcons name="Node.js" />;
    case 'reactjs':
      return <SimpleIcons name="React" />;
    case 'python':
      return <SimpleIcons name="Python" />;
    case 'graphql':
      return <SimpleIcons name="GraphQL" />;
    case 'express':
      return <SimpleIcons name="JavaScript" />;
    case 'postgresql':
      return <SimpleIcons name="PostgreSQL" />;
    default:
      return;
  }
};

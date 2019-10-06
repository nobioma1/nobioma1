import bravo from './assets/bravo.png';
import esse from './assets/esse.png';
import politico from './assets/politico.png';
import luncher from './assets/luncher.png';
import droom from './assets/droom.png';

export default {
  bio: `Hello, I'm a Full-Stack Web Developer based in Nigeria. 
    Loving every bit of what I do, creating solutions to real problems that
    can be solved using technology and also improving already existing solutions.`,
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'GraphQL',
    'Python',
    'ReactJs',
    'Node.js',
    'Express',
    'PostgreSQL',
  ],
  projects: [
    {
      name: 'Bravo',
      imag: bravo,
      stacks:
        'React, Redux, Node.js, ExpressJs, PostgreSQL, Knex, React-Testing-Library, Slack API.',
      github: 'https://github.com/bravolabs',
      link: 'https://saybravo.io',
    },
    {
      name: 'Droom',
      imag: droom,
      stacks: 'Node/ExpressJs, PostgreSQL, Knex, Jest',
      github: 'https://github.com/build-week-droom/Droom-BackEnd',
      link: '',
    },
    {
      name: 'Luncher',
      imag: luncher,
      stacks: 'React, Redux',
      github: 'https://github.com/luncher-lambda-buildweek/FrontEnd',
      link: 'https://luncher-donate-meals.netlify.com',
    },
    {
      name: 'Essentialism',
      imag: esse,
      stacks: 'JavaScript',
      github:
        'https://github.com/lambda-essentialism/build-essentialism-WebUI-Noble',
      link: 'https://esse.netlify.com',
    },
    {
      name: 'Politico',
      imag: politico,
      stacks: 'JavaScript, Node.js',
      github: 'https://github.com/nobioma1/Politico',
      link: 'https://nobioma1.github.io/Politico',
    },
  ],
};

import bravo from './assets/bravo.png';
import esse from './assets/esse.png';
import politico from './assets/politico.png';
import luncher from './assets/luncher.png';
import droom from './assets/droom.png';

export default {
  bio: `Hello, I'm a Full-Stack Web Developer based in Nigeria. I love every bit of what I do, especially creating solutions to real problems that can be solved using technology and improving already existing solutions.`,
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
      detail: 'Acknowledge the awesome work done by your co-workers.',
      stacks:
        'React, Redux, Node.js, ExpressJs, PostgreSQL, Knex, React-Testing-Library, Slack API.',
      github: 'https://github.com/bravolabs',
      link: 'https://saybravo.io',
    },
    {
      name: 'Droom',
      imag: droom,
      detail: 'Find jobs by matching users with companies. Tinder for Jobs',
      stacks: 'Node/ExpressJs, PostgreSQL, Knex, Jest',
      github: 'https://github.com/build-week-droom/Droom-BackEnd',
      link: '',
    },
    {
      name: 'Luncher',
      imag: luncher,
      detail:
        'Broadcast the needs of your students who can not aﬀord lunch by declaring some donations and allow individuals to make donations.',
      stacks: 'React, Redux',
      github: 'https://github.com/luncher-lambda-buildweek/FrontEnd',
      link: 'https://luncher-donate-meals.netlify.com',
    },
    {
      name: 'Politico',
      imag: politico,
      detail:
        'Politico enables citizens give their mandate to politicians running for different government offices while building trust in the process through transparency.',
      stacks: 'JavaScript, Node.js',
      github: 'https://github.com/nobioma1/Politico',
      link: 'https://nobioma1.github.io/Politico',
    },
    {
      name: 'Essentialism',
      imag: esse,
      detail: '',
      stacks: 'JavaScript',
      github:
        'https://github.com/lambda-essentialism/build-essentialism-WebUI-Noble',
      link: '', // https://esse.netlify.com
    },
  ],
};

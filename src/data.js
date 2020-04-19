import bravo from './assets/bravo.webp';
// import esse from './assets/esse.webp';
import politico from './assets/politico.webp';
// import luncher from './assets/luncher.webp';
import droom from './assets/droom.webp';
import mud from './assets/mud-game.webp';
import trackopp from './assets/trackopp.webp';

export default {
  bio: `Hello, I'm a Full-Stack Web Developer based in Nigeria. I love every bit of what I do, especially creating solutions to real problems that can be solved using technology and improving already existing solutions.`,
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'GraphQL',
    'ReactJs',
    'TypeScript',
    'Express',
    'PostgreSQL',
    'Django',
    'MongoDB',
  ],
  projects: [
    {
      name: 'TrackOpp',
      imag: trackopp,
      detail:
        'Keep track of the progress on your job applications! Getting a job can be tough, tracking your applications should not.',
      stacks: 'React, Redux, Firebase, ExpressJs, Redis, Puppeteer, Node-cron.',
      github: 'https://github.com/nobioma1/track-opp',
      link: 'https://trackopp.netlify.app/',
    },
    {
      name: 'Multi-User Dungeon Game (MUD) ',
      imag: mud,
      detail:
        'A Full-Stack multiplayer real-time virtual world web application. Players can transverse rooms (North, South, East, West), view descriptions of rooms, and chat with other players in the same room.',
      stacks: 'React, Redux, Django, Pusher',
      github: 'https://github.com/CSEU2-MUD',
      link: 'https://mud-game.netlify.app',
    },
    {
      name: 'Bravo',
      imag: bravo,
      detail: 'Acknowledge the awesome work done by your co-workers.',
      stacks:
        'React, Redux,  ExpressJs, PostgreSQL, Knex, React-Testing-Library, Slack API.',
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
    // {
    //   name: 'Luncher',
    //   imag: luncher,
    //   detail:
    //     'Broadcast the needs of your students who can not aﬀord lunch by declaring some donations and allow individuals to make donations.',
    //   stacks: 'React, Redux',
    //   github: 'https://github.com/luncher-lambda-buildweek/FrontEnd',
    //   link: 'https://luncher-donate-meals.netlify.app',
    // },
    {
      name: 'Politico',
      imag: politico,
      detail:
        'Politico enables citizens give their mandate to politicians running for different government offices while building trust in the process through transparency.',
      stacks: 'Vanilla JavaScript, ExpressJs',
      github: 'https://github.com/nobioma1/Politico',
      link: 'https://nobioma1.github.io/Politico',
    },
    // {
    // name: 'Essentialism',
    // imag: esse,
    // detail: '',
    // stacks: 'JavaScript',
    // github:
    //  'https://github.com/lambda-essentialism/build-essentialism-WebUI-Noble',
    // link: '', // https://esse.netlify.app
    // },
  ],
  articles: [
    {
      title: 'Build a CRUD Django REST API',
      date: 'March 9, 2020',
      link: 'https://dev.to/nobleobioma/build-a-crud-django-rest-api-46kc',
      host: 'dev.to',
      tags: '#django #python #tutorial',
    },
    {
      title: 'Adding Authentication to a REST Framework Django API',
      date: 'March 9, 2020',
      link:
        'https://dev.to/nobleobioma/adding-authentication-to-a-rest-framework-django-api-1e5a',
      host: 'dev.to',
      tags: '#django #python #tutorial',
    },
    {
      title: 'Create a simple REST API with Django',
      date: 'March 9, 2020',
      link:
        'https://dev.to/nobleobioma/create-a-simple-rest-api-with-django-253p',
      host: 'dev.to',
      tags: '#django #python #tutorial',
    },
  ],
};

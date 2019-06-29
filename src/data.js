import politico from './assets/politico.png';
import esse from './assets/esse.png';
import luncher from './assets/luncher.png';

export default {
  bio: `Hello, I'm a Full-Stack Engineer based in Nigeria. 
    Loving every bit of what I do, creating solutions to real problems that
    can be solved using technology and also improving already existing solutions.`,
  languages: ['HTML', 'CSS', 'JavaScript'],
  frameworks: ['React', 'NodeJs'],
  projects: [
    {
      name: 'Luncher',
      imag: luncher,
      tech: ['React'],
      github: 'https://github.com/luncher-lambda-buildweek/FrontEnd',
      link: 'https://luncher-donate-meals.netlify.com',
    },
    {
      name: 'Essentialism',
      imag: esse,
      tech: ['Javascript'],
      github:
        'https://github.com/lambda-essentialism/build-essentialism-WebUI-Noble',
      link: 'https://esse.netlify.com',
    },
    {
      name: 'Politico',
      imag: politico,
      tech: ['Javascript', 'NodeJs'],
      github: 'https://github.com/nobioma1/Politico',
      link: 'https://nobioma1.github.io/Politico',
    },
  ],
};

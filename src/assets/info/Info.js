import self from '../img/self.png';
import project1 from '../img/dis-Covermusic.PNG'
import project2 from '../img/project2.PNG'
import project3 from '../img/project3.PNG'
import project4 from '../img/project4.PNG'
import project5 from '../img/project5.PNG'
import project6 from '../img/project6.PNG'
import project7 from '../img/project7.PNG'
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Xaviar',
  lastName: 'Witherspoon',
  initials: 'XJW', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Full Stack Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: 'FL',
      text: 'based in Florida',
    },
    {
      emoji: '💻',
      text: 'Full Stack Developer',
    },
    {
      emoji: '📧',
      text: 'xjwithers@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://codemonkeyspoon.github.io/React-Portfolio/resume.pdf', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-file',
      label: 'resume',
    },
    // {
    //   link: '',
    //   icon: 'fa fa-instagram',
    //   label: 'instagram',
    // },
    {
      link: 'https://github.com/codemonkeyspoon',
      icon: 'fa fa-github',
      label: 'github',
    },
    // {
    //   link: '',
    //   icon: 'fa fa-linkedin',
    //   label: 'linkedin',
    // },
    // {
    //   link: '',
    //   icon: 'fa fa-twitter',
    //   label: 'twitter',
    // },
  ],
  bio: "Hello! I'm Xaviar Witherspoon. I'm a Full Stack Developer. I studied software development at Keiser University and taken a web-development boot-camp out of UCF, I enjoy building web applications and learning new technologies.",
  skills: {
    // you dont havew to strictly follow the 'languages', 'frameworks', 'databases', 'cloudServices', and 'tools' categories. You can add your own if you'd like.
    // but the structure should be the same, an array of strings and the key should be one word, no spaces.
    languages: ['JavaScript', 'Java', 'Python', 'HTML/CSS'],
    frameworks: [
      'React',
      'Express',
      'Bootstrap/jQuery',
    ],
    databases: ['MySQl', 'MongoDB'],
    // cloudServices: ['AWS S3', 'AWS EC2', 'AWS SNS', 'Google Analytics', 'Heroku', 'Netlify'],
    tools: [
      'Git',
      'Postman',
      'npm',
      'yarn',
    ],
  },
  hobbies: [
    {
      label: 'Video Games',
      emoji: '🎮',
    },
    {
      label: 'Bass Guitar',
      emoji: '🎸',
    },
    {
      label: 'Anime',
      emoji: '🎞',
    },
    {
      label: 'Cooking',
      emoji: '🍳',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title: 'DisCover Music - Online song cover finder using youtube and spotify',
      live: 'https://cooljh2k.github.io/dis-cover-music/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/CoolJH2K/dis-cover-music', // this should be a link to the **repository** of the project, where the code is hosted.
      image: project1,
    },
    {
      title: 'Social Revue - A reddidt style full-stack application',
      live: 'https://social-revue.herokuapp.com',
      source: 'https://github.com/codemonkeyspoon/Social-Revue',
      image: project2,
    },
    {
      title: 'SPA Weather App - Shows API and Javascript prowess',
      live: 'https://codemonkeyspoon.github.io/Weather-Dashboard/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/codemonkeyspoon/Weather-Dashboard', // this should be a link to the **repository** of the project, where the code is hosted.
      image: project3,
    },
    {
      title: 'JATE, just another text editor',
      live: 'https://jate-x.herokuapp.com',
      source: 'https://github.com/codemonkeyspoon/JATE-Text-Editor',
      image: project4,
    },
    {
      title: 'Tech Blog - A blog style website with login and authentication',
      live: 'https://tech-x-blog.herokuapp.com', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/codemonkeyspoon/tech-blog', // this should be a link to the **repository** of the project, where the code is hosted.
      image: project5,
    },
    {
      title: 'Javascript PW Gen - A Javascript password generator',
      live: 'https://codemonkeyspoon.github.io/Javascript-Password-Generator/',
      source: 'https://github.com/codemonkeyspoon/Javascript-Password-Generator',
      image: project6,
    },
    {
      title: 'Threadi - A MERN stack application for creating and sharing threads',
      live: 'https://threadi-mern-fullstack.herokuapp.com/',
      source: 'https://github.com/Jamesgit22/Threadi',
      image: project7,
    },
  ],
};

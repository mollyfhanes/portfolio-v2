const projectsList = [
  {
    id: 1,
    name: 'PixelPet',
    desc: 'A virtual pet that chats with you, reacts to your commands, and senses your emotions.',
    tools:
      'React, Redux, Sequelize, Express, Watson Assitant and Tone Analyzer, A-Frame, Mocha, and Chai',
    contributions: [
      'Trained a Watson Assistant chatbot and combined it with Tone Analyzer, then used API requests to deliver information to Redux store about the chatbot’s response, the user’s mood, and whether or not any user commands were identified',
      'Animated pet moods and command resonses using A-Frame',
    ],
    demo: 'http://pixelpet.rocks',
    github: 'https://github.com/PixelPetCo/pixel-pet',
    img: 'pixelpet.png',
  },
  {
    id: 3,
    name: 'Is It My Dog?',
    desc: 'A React Native app that can take a photo of any object and answer the question, "Is it my dog?" (Developed for Fullstack Academy\'s Hackathon.)',
    tools: 'React Native, Expo, and Clarifai',
    contributions: [
      'Trained a new Clarifai model to recognize my dog, used Expo to access camera and camera roll, and displayed the results using React Native',
    ],
    demo: 'https://youtu.be/xSNl3wCVEk4',
    github: 'https://github.com/ebnhawk/is-it-my-dog',
    img: 'dog.png',
  },
  {
    id: 4,
    name: 'Chocolate Bazaar',
    desc: 'A mock ecommerce platform for artisanal chocolates.',
    tools: 'React, Redux, Sequelize, Express, Mocha, and Chai',
    contributions: [
      'Designed filter components allowing users to filter all products according to a variety of parameters, using Redux',
      'Designed product and category models in Sequelize',
      'Provided styling using CSS and React-Bootstrap',
    ],
    demo: 'http://chocolate-bazaar.herokuapp.com/',
    github: 'https://github.com/grace-hopper-bazaar/bazaar-web',
    img: 'chocolate.png',
  },
]

export default projectsList

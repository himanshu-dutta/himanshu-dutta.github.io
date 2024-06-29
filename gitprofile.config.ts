// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'himanshu-dutta', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Tarantino',
          description:
            'Tarantino is a simple ASGI (Asynchronous Web Server Gateway) web framework intended for learning purposes only. The idea is to cover 70-80% of usecases by building various featues (mostly from scratch) while exploring various alternative solutions to get a better understanding of different concepts used and choices made in more reliable Python web frameworks today.',
          imageUrl: 'tarantino-logo.png',
          link: 'http://github.com/himanshu-dutta/tarantino',
        },
        {
          title: 'Pycoder',
          description:
            'PyCoder is a tool to generate python code out of a few given topics and a description. It uses GPT-2 language model as its engine. Pycoder poses writing Python code as a conditional-Causal Language Modelling(c-CLM). It has been trained on millions of lines of Python code written by all of us. At the current stage and state of training, it produces sensible code with few lines of description, but the scope of improvement for the model is limitless.',
          imageUrl: 'pycoder-logo.png',
          link: 'http://github.com/himanshu-dutta/pycoder',
        },
        {
          title: 'MBC App',
          description:
            'This project consists of building an app, which when shown food ingredients, tells you which dishes these ingredients can be used in. The simple use case of the application is to capture an image of the ingredients, and the app would detect the ingredients itself, and present you with a list of detected ingredients along with the probable recipes in which the ingredients can be used.',
          imageUrl: 'mbc-logo.png',
          link: 'http://github.com/himanshu-dutta/mystery-box-challenge-app',
        },
        {
          title: 'StackHack',
          description: 'Stack Hack is a QA site.',
          imageUrl: 'stackhack-logo.png',
          link: 'http://github.com/himanshu-dutta/stackhack',
        },
      ],
    },
  },
  seo: {
    title: 'Himanshu Dutta | Portfolio',
    description:
      "Hey folks! I'm Himanshu Dutta, a first year master's student in Computer Science and Engineering at Indian Instititute of Technology, Bombay (IITB). I am interested in exploring Machine Learning and Systems domains for my master's thesis. I have a strong foundation in various programming languages, most prominently, Python (Infact, I call it my mothertounge :P) and C++. The various types of projects I have worked on in the past include solving complex problems using Machine Learning to creating my own web framework(s). I have some research experience as well, with published research on Mathematical Optimization and Deepfake prevention techniques. Other than that, I like movies, and sometimes books. In my free time, I mostly like to explore new technologies, and understand how they work under the hood.",
    imageURL: '',
  },
  social: {
    linkedin: 'himanshu-dutta-257875179',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'himanshudutta',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'meet[dot]himanshu[dot]dutta[at]gmail[dot]com',
  },
  resume: {
    fileUrl: 'CV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'TypeScript',
    'JavaScript',
    'C',
    'C++',
    'Go',
    'Shell Script',
    'Pytorch',
    'FastAI',
    'Tensorflow',
    'Django',
    'ReactJS',
    'ReactNative',
    'Selenium',
    'OpenCV',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'Nginx',
    'AWS',
    'Firebase',
  ],
  experiences: [
    {
      company: 'Autodesk',
      position: 'Intern Automation Engineer',
      from: 'June 2021',
      to: 'November 2021',
      companyLink: 'https://www.autodesk.com/',
    },
    {
      company: 'IIT Kanpur',
      position: 'Machine Learning Intern',
      from: 'May 2019',
      to: 'June 2019',
      companyLink: 'https://iitk.ac.in',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'Indian Institute of Technology, Bombay',
      degree: 'M.Tech.',
      from: '2023',
      to: '2025 (Expected)',
      grade: '9.67/10 CPI',
    },
    {
      institution: 'KIIT University, Bhubaneswar',
      degree: 'B.Tech.',
      from: '2018',
      to: '2022',
      grade: '9.65/10 CGPA',
    },
  ],
  publications: [
    {
      title:
        'Wrapper Based Feature Selection Approach Using Black Widow Optimization Algorithm for Data Classification',
      conferenceName:
        'International Conference on Computational Intelligence in Pattern Recognition',
      journalName: '',
      authors: 'Himanshu Dutta, Mahendra Kumar Gourisaria, Himansu Das',
      link: 'https://link.springer.com/chapter/10.1007/978-981-19-3089-8_47',
      description:
        'Feature selection is a crucial preprocessing step for data analysis and further predictive modeling tasks. Various optimization algorithms have been used in the past to achieve better results in terms of evaluation metrics like classification accuracy by selecting an optimal subset of features from a given dataset. In this paper, we propose a wrapper-based method that builds upon the idea of the Black Widow Optimization (BWO) technique, along with certain changes to the originally proposed algorithm to improve its performance. ',
    },
    {
      title:
        'EnsembleDet: ensembling against adversarial attack on deepfake detection',
      conferenceName: '',
      journalName: 'Journal of Electronic Imaging',
      authors: 'Himanshu Dutta, Aditya Pandey, Saurabh Bilgaiyan',
      link: 'https://www.spiedigitallibrary.org/journals/journal-of-electronic-imaging/volume-30/issue-6/063030/EnsembleDet-ensembling-against-adversarial-attack-on-deepfake-detection/10.1117/1.JEI.30.6.063030.full',
      description:
        'Deepfakes and manipulation techniques such as adversarial attacks pose a significant threat to society today. It is essential for the detection methods used against them to be more robust than ever. Generation techniques such as neural texture, along with adversarial attacks, result in visually realistic manipulated media and make it difficult for the current state-of-the-art (SoTA) to detect the manipulation. We propose an ensemble-based approach and a genetic algorithm-based approach for fake imagery detection that has been perturbed using fast gradient sign method and basic iterative method techniques.',
    },
    {
      title: 'Genetically Optimized UFLANN for Uncovering Clusters',
      conferenceName: '',
      journalName: 'IEEE Access',
      authors:
        'Himanshu Dutta, Saurabh Bilgaiyan, Bhabani Shankar Prasad Mishra, Satchidananda Dehuri, Ashish Ghosh',
      link: 'https://ieeexplore.ieee.org/abstract/document/10232984',
      description:
        'In this work, we present a novel clustering approach which is inheriting the best characteristics of Unsupervised Functional Link Artificial Neural Network (UFLANN) and Genetic Algorithms (GAs) for uncovering clusters embedded in dataset. With an aim to realize natural clusters in a linear space UFLANN mapped the input vectors from lower dimension to higher dimension with a greater hope to achieve linearity in higher dimensional space.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'himanshud', // to hide blog section, keep it empty
    limit: 4, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;

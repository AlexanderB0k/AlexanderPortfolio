const projects = [
  {
    slug: 'quoth-the-raven',
    title: 'Quoth the Raven',
    role: 'Front-end Programmer & UI/UX Designer',
    summary:
      "I was part of a five-person team. And I implemented the game's UI systems — pause and main menus, item interaction, and core player/enemy mechanics, and we managed our workflow with Jira, creating milestones and track tasking for the team.",
    tags: ['Godot', 'C#', 'Figma', 'Photoshop', 'Git/GitHub'],
    externalUrl: 'https://not-phoeniix.itch.io/quoth-the-raven',
    externalLabel: 'Play on itch.io',
    media: {
      type: 'image',
      src: '/images/quoth-the-raven-banner.png',
      alt: 'Quoth the Raven pixel-art title logo',
    },
    overview:
      "Quoth the Raven is a pixel-art horror, top-down roguelite built in the Godot engine by a five-person team. Players explore an ever-shifting laboratory, fighting off enemies and collecting piece to find their dad",
    highlights: [
      'Designed and implemented the game\'s UI systems, including the pause menu and main menu, focused on keeping the player oriented without breaking the horror-cute tone of the art direction.',
      'Architected the dynamic item interaction system, letting the team add new pickups and effects without rewriting core logic.',
      'Programmed core player and enemy mechanics, movement, combat, and AI behavior,  that drive the roguelite\'s moment-to-moment gameplay.',
      'Ran sprint planning and task tracking in Jira for the five-person team, boosting workflow efficiency by 40% and keeping communication clear across programmers and artists.',
      'Delivered 100% of the project\'s milestones on schedule.',
    ],
    overviewColumns: [
      "Quoth the Raven is a pixel-art horror, top-down roguelite built in the Godot engine by a five-person team. Players explore an ever-shifting laboratory, fighting off enemies and collecting piece to find their dad",
      "I was part of a five-person team. And I implemented the game's UI systems such as pause and main menus, item interaction, and core player/enemy mechanics, and we managed our workflow with Jira, creating milestones and track tasking for the team.",
    ],
    whatIDidIntro: 'Throughout the project we used Godot and Visual Studio Code, to implement the code for the game. For assets, we used Aesprite and Photoshop for pixel-art asset creation. I was responsible for implementing the game\'s UI systems, core player and enemy mechanics, and task tracking in Jira.',
    whatIDidBlocks: [
      {
        text: 'I designed and implemented the game\'s UI systems, including the pause and main menus, to keep players oriented while maintaining a dual art style for both horror and bubbly. I then built them in Godot, connecting menu navigation, buttons, and screen transitions. I made sure the menus fit the game\'s pixel-art style, with readable text, distinct hover and selected states, and consistent spacing on all screens so they felt part of the world rather than overlaid. During development, I created visual and audio feedback for interactions to enhance the user experience. ',
      },
      {
        text: 'The project\'s key feature was the camera: by right-clicking, the player could see the world as it really is, and I developed the camera and related mechanics. This involved creating the switch between the ordinary view and the hidden \'true\' view, ensuring a smooth, responsive transition, and integrating it into the gameplay. The camera mechanic was central to the game because that\'s how players would find clues, solve puzzles, and navigate the environment. I also implemented the camera\'s interaction with enemies and objects.',
      },
    ],
    whatIDidImages: {
      lead: {
        src: '/images/icon_for_portfolio.jpg',
        alt: 'Tools used on the project: Godot, Visual Studio Code, and Aseprite',
      },
      stackTop: {
        src: '/images/quoth-gameplay-1.png',
        alt: 'Quoth the Raven gameplay: exploring a room with a health bar and enemies on screen',
      },
      stackBottom: {
        src: '/images/quoth-gameplay-2.png',
        alt: 'Quoth the Raven gameplay: an item interaction prompt',
      },
      full: {
        src: '/images/Quoth_of_raven.png',
        alt: 'Quoth the Raven artwork: the main character seen through a camera viewfinder',
      },
    },
    impact: [
      {
        role: 'Visual artist',
        icon: 'palette',
        text: 'I created the game\'s pixel-art assets, including characters, enemies, and environmental tilesets, while collaborating with the team to ensure a cohesive visual style.',
      },
      {
        role: 'UI/UX designer',
        icon: 'figma',
        text: 'I designed the game\'s UI systems, including the pause menu and main menu, focused on keeping the player oriented without breaking the horror-cute tone of the art direction.  ',
      },
      {
        role: 'Gameplay & Programming',
        icon: 'godot',
        text: 'I programmed core player and enemy mechanics, movement, combat, and AI behavior that drive the roguelite\'s moment-to-moment gameplay.',
      },
    ],
    role_detail: 'Front-end Programmer & UI/UX Designer, Team Project',
  },
  {
    slug: 'looking-for-group',
    title: 'Looking for Group',
    role: 'Front-end Programmer',
    summary:
      "A team-formation platform for RIT's College of Computing and Information Sciences (GCCIS). Students post and browse projects games, apps, websites, film, and more and recruit collaborators by role: developers, designers, audio creators, and engineers.",
    tags: ['Front-end Development', 'Figma', 'VS Code', 'UI Design', 'Team Project'],
    externalUrl: 'https://lfg.gccis.rit.edu/',
    externalLabel: 'Visit lfg.gccis.rit.edu',
    media: {
      type: 'placeholder',
      key: 'lfg',
      label: 'LFG',
    },
    overview:
      "Looking for Group (LFG) is a team-formation platform built for students in RIT's College of Computing and Information Sciences. Students post projects — video games, board games, mobile apps, websites, film, software, and more — browse what others are building, and recruit collaborators by the role they need filled.",
    overviewColumns: [
      "Looking for Group (LFG) is a team-formation platform built for students in RIT's College of Computing and Information Sciences. Students post projects — video games, board games, mobile apps, websites, film, software, and more — browse what others are building, and recruit collaborators by the role they need filled.",
      "I worked as a front-end programmer on the team, turning Figma designs into working, responsive pages. I focused on the project discovery experience, the account views for owned and joined projects, and the flow for creating a new project.",
    ],
    whatIDidIntro: 'Throughout the project we used Figma for the designs and wireframes, and VS Code to build the front end. I was responsible for translating the Figma designs into working interfaces, building the project discovery and filtering experience, and contributing to the account and project creation views.',
    whatIDidBlocks: [
      {
        text: 'I built the project discovery experience so students could browse every project on the platform and narrow it down quickly. That meant filtering by category, such as Video Game, Mobile Application, and Website, and by the type of collaborator a project is looking for, such as Developers, Designers, Audio Creators, and Engineers. I kept the layouts faithful to the Figma designs while making sure they stayed responsive across screen sizes.',
      },
      {
        text: 'I also worked on the account-facing views. The Owned Projects and Joined Projects pages let students keep track of what they\'ve started and what they\'ve signed on to, and I collaborated on the project creation flow that lets a student post a new project and start recruiting a team right away.',
      },
    ],
    whatIDidImages: {
      lead: {
        src: '/images/lfg-login.png',
        alt: 'LFG welcome and log in screen',
      },
      stackTop: {
        src: '/images/lfg-sidebar.png',
        alt: 'LFG sidebar navigation: Projects, People, and My Projects',
      },
      stackBottom: {
        src: '/images/lfg-my-projects.png',
        alt: 'LFG My Projects view listing a student’s active, done, and draft projects',
      },
      full: {
        src: '/images/lfg-onboarding.png',
        alt: 'LFG onboarding illustration walking through exploring profiles, following people, and keeping a profile up to date',
      },
    },
    impact: [
      {
        role: 'Front-end Programmer',
        icon: 'code',
        text: 'I translated wireframes into working, responsive interfaces and built the browsing and filtering features students use to find projects.',
      },
      {
        role: 'UI Designer',
        icon: 'figma',
        text: 'I worked from the team\'s Figma designs, keeping spacing, states, and layout consistent so the pages matched the intended look and feel.',
      },
      {
        role: 'Team Collaboration',
        icon: 'users',
        text: 'I collaborated with designers and other developers on the project creation flow and account views so the whole platform fit together.',
      },
    ],
    highlights: [
      'Built front-end UI from Figma designs, translating wireframes into working, responsive interfaces.',
      'Worked on the project discovery experience: browsing all projects, filtering by category (Video Game, Mobile Application, Website, and more), and filtering by the type of collaborator being sought (Developers, Designers, Audio Creators, Engineers).',
      'Contributed to account-facing views. Owned Projects and Joined Projects, so students can track what they\'ve started and what they\'ve joined.',
      'Collaborated on the project creation flow that lets a student post a new project and start recruiting a team.',
    ],
    role_detail: 'Front-end Programmer, Team Project',
  },
  {
    slug: 'cr3d',
    title: 'CR3D',
    role: 'Product Designer Intern — RIT Saunders Kozel Team',
    summary:
      '"Play More." CR3D is the homebase for casual athletes to stay connected to their people and their sports coordinating pickup games, leagues, and play history across golf, basketball, tennis, pickleball, and more. Designed 30+ logo concepts and 20+ wireframes/UI mockups to establish the visual identity, and ran 200+ user interviews that directly shaped the product roadmap.',
    tags: ['Figma', 'UI/UX Design', 'User Research', 'Prototyping', 'Brand Identity'],
    externalUrl: 'https://cr3d.org/',
    externalLabel: 'Visit cr3d.org',
    media: {
      type: 'placeholder',
      key: 'cr3d',
      label: 'CR3D',
    },
    overview:
      'CR3D is a mobile app built through RIT Saunders\' Bernard Kozel StartUp Program, designed to be the homebase for casual athletes — eliminating the friction of organizing pickup games and giving groups a reason to keep playing together, across sports like golf, mini golf, basketball, tennis, and pickleball.',
    overviewColumns: [
      'CR3D is a mobile app built through RIT Saunders\' Bernard Kozel StartUp Program, designed to be the homebase for casual athletes — eliminating the friction of organizing pickup games and giving groups a reason to keep playing together, across sports like golf, mini golf, basketball, tennis, and pickleball.',
      'I joined as a product designer intern on a team of four designers and developers. I designed the brand identity and the app\'s wireframes and UI mockups, and ran user interviews that shaped what the team built next.',
    ],
    whatIDidIntro: 'Throughout the project I used Figma to design logos, wireframes, UI mockups, and prototypes, working alongside the developers building the app. I was responsible for the product\'s visual identity, the design of key app screens, and the user research behind the roadmap.',
    whatIDidBlocks: [
      {
        text: 'I started with the brand, designing 30+ logo concepts to find an identity that felt energetic and social for casual athletes. From there I developed 20+ wireframes and UI mockups, covering player profiles, match result cards, and game coordination and scheduling, and worked with the team to turn them into a functional prototype.',
      },
      {
        text: 'Alongside the design work, I conducted 200+ user interviews to uncover pain points and validate the core idea of social sports connections. What we learned directly shaped the product roadmap, including a community hub with play history, gamification through levels, ranks, and achievements, and league management with drafts, trades, playoffs, and championships.',
      },
    ],
    whatIDidImages: {
      lead: {
        src: '/images/cr3d-profile.png',
        alt: 'CR3D player profile screen showing sport breakdown and recent matches',
      },
      stackTop: {
        src: '/images/cr3d-mini-golf.png',
        alt: 'Mini golf course illustration with a windmill, used in CR3D’s brand art',
      },
      stackBottom: {
        src: '/images/cr3d-crown.png',
        alt: 'Gold jeweled crown illustration, part of CR3D’s gamification and ranks concept art',
      },
      full: {
        src: '/images/cr3d-match-cards.png',
        alt: 'CR3D match result cards for basketball and tennis games',
      },
    },
    impact: [
      {
        role: 'Brand & Visual Design',
        icon: 'palette',
        text: 'I designed 30+ logo concepts and the illustrations and visual style that established CR3D\'s identity from the ground up.',
      },
      {
        role: 'UI/UX Designer',
        icon: 'figma',
        text: 'I developed 20+ wireframes and UI mockups and helped the team turn them into a working app prototype.',
      },
      {
        role: 'User Research',
        icon: 'research',
        text: 'I ran 200+ user interviews that validated the idea and directly shaped the product roadmap.',
      },
    ],
    highlights: [
      'Designed 30+ logo concepts and developed 20+ wireframes and UI mockups to establish the product\'s visual identity from the ground up.',
      'Collaborated with a team of four designers and developers to design and build a functional application prototype.',
      'Conducted 200+ user interviews to uncover pain points and validate the core idea of social sports connections, directly shaping the product roadmap.',
      'Helped define key product surfaces: game coordination and scheduling, a community hub with play history, gamification (levels, ranks, achievements), and league management (drafts, trades, playoffs, championships).',
    ],
    role_detail: 'Product Designer Intern, RIT Saunders College of Business — Kozel Team',
  },
]

export default projects

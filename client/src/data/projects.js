const projects = [
  {
    slug: 'quoth-the-raven',
    title: 'Quoth the Raven',
    role: 'Front-end Programmer & UI/UX Designer',
    summary:
      "A cutesy-horror top-down roguelite built in Godot with a team of 5. Designed and implemented the game's UI systems — pause and main menus, item interaction, and core player/enemy mechanics — while running sprint planning in Jira.",
    tags: ['Godot', 'C#', 'Figma', 'Photoshop', 'Git/GitHub'],
    externalUrl: 'https://not-phoeniix.itch.io/quoth-the-raven',
    externalLabel: 'Play on itch.io',
    media: {
      type: 'image',
      src: '/images/quoth-the-raven-banner.png',
      alt: 'Quoth the Raven pixel-art title logo',
    },
    overview:
      "Quoth the Raven is a cutesy-horror, top-down roguelite built in the Godot engine by a five-person student team. Players explore a shifting dungeon, fighting off enemies and collecting items while trying to survive each run.",
    gallery: [
      {
        src: '/images/quoth-gameplay-1.png',
        alt: 'Quoth the Raven gameplay — exploring a dungeon room with a health bar and enemies on screen',
      },
      {
        src: '/images/quoth-gameplay-2.png',
        alt: 'Quoth the Raven gameplay — an item interaction prompt reading "Press F"',
      },
      {
        src: '/images/quoth-gameplay-3.png',
        alt: 'Quoth the Raven gameplay — a dialogue box reading "Kiddo? Can you hear me?"',
      },
    ],
    highlights: [
      'Designed and implemented the game\'s UI systems, including the pause menu and main menu, focused on keeping the player oriented without breaking the horror-cute tone of the art direction.',
      'Architected the dynamic item interaction system, letting the team add new pickups and effects without rewriting core logic.',
      'Programmed core player and enemy mechanics — movement, combat, and AI behavior — that drive the roguelite\'s moment-to-moment gameplay.',
      'Ran sprint planning and task tracking in Jira for the five-person team, boosting workflow efficiency by 40% and keeping communication clear across programmers and artists.',
      'Delivered 100% of the project\'s milestones on schedule.',
    ],
    role_detail: 'Front-end Programmer & UI/UX Designer, Team Project',
  },
  {
    slug: 'looking-for-group',
    title: 'Looking for Group',
    role: 'Front-end Programmer',
    summary:
      "A team-formation platform for RIT's College of Computing and Information Sciences (GCCIS). Students post and browse projects — games, apps, websites, film, and more — and recruit collaborators by role: developers, designers, audio creators, and engineers.",
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
    gallery: [
      {
        src: '/images/lfg-sidebar.png',
        alt: 'LFG sidebar navigation — Projects, People, and My Projects',
      },
      {
        src: '/images/lfg-notifications.png',
        alt: 'LFG notifications feed showing recent posts and mentions',
      },
      {
        src: '/images/lfg-my-projects.png',
        alt: 'LFG My Projects view listing a student’s active, done, and draft projects',
      },
      {
        src: '/images/lfg-login.png',
        alt: 'LFG welcome and log in screen',
      },
      {
        src: '/images/lfg-onboarding.png',
        alt: 'LFG onboarding illustration walking through exploring profiles, following people, and keeping a profile up to date',
      },
    ],
    highlights: [
      'Built front-end UI from Figma designs, translating wireframes into working, responsive interfaces.',
      'Worked on the project discovery experience: browsing all projects, filtering by category (Video Game, Mobile Application, Website, and more), and filtering by the type of collaborator being sought (Developers, Designers, Audio Creators, Engineers).',
      'Contributed to account-facing views — Owned Projects and Joined Projects — so students can track what they\'ve started and what they\'ve joined.',
      'Collaborated on the project creation flow that lets a student post a new project and start recruiting a team.',
    ],
    role_detail: 'Front-end Programmer, Team Project',
  },
  {
    slug: 'cr3d',
    title: 'CR3D',
    role: 'Product Designer Intern — RIT Saunders Kozel Team',
    summary:
      '"Play More." CR3D is the homebase for casual athletes to stay connected to their people and their sports — coordinating pickup games, leagues, and play history across golf, basketball, tennis, pickleball, and more. Designed 30+ logo concepts and 20+ wireframes/UI mockups to establish the visual identity, and ran 200+ user interviews that directly shaped the product roadmap.',
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
    gallery: [
      {
        src: '/images/cr3d-profile.png',
        alt: 'CR3D player profile screen showing sport breakdown and recent matches',
      },
      {
        src: '/images/cr3d-icon.png',
        alt: 'CR3D mini golf hole icon',
      },
      {
        src: '/images/cr3d-mini-golf.png',
        alt: 'Mini golf course illustration with a windmill, used in CR3D’s brand art',
      },
      {
        src: '/images/cr3d-crown.png',
        alt: 'Gold jeweled crown illustration, part of CR3D’s gamification and ranks concept art',
      },
      {
        src: '/images/cr3d-match-cards.png',
        alt: 'CR3D match result cards for basketball and tennis games',
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

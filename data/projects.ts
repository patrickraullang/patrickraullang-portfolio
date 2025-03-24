export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Inclusive Mobility',
    description:
      'A Solution for Neurodivergent Public Transport Users. 3rd Place at the "Mensch und Computer" Conference 2024 Student Research Competition.',
    logo: '/logos/driwwwle.svg',
    link: 'https://github.com/neuro-inclusive-transit',
    slug: 'NavigationApp',
  },
  {
    title: 'Champion Insights',
    description:
      'Interactive Visualization of League of Legends Esports Data.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/itsnitinr/vscode-portfolio',
    slug: 'vscode-portfolio',
  },
  {
    title: 'UniversityAI',
    description:
      'A LLM trained on module Infomrations from diffrent Masters Programms in Germany. Enables students to find the right programm for them.',
    logo: '/logos/subtrackt.svg',
    link: 'https://github.com/itsnitinr/subtrackt',
    slug: 'subtrackt',
  },
  {
    title: 'MonkeyHealth',
    description:
      'A Health, Diet and Fitness APP build with Flutter to help people reach their fitness and health goals.',
    logo: '/logos/coolify.svg',
    link: 'https://github.com/itsnitinr/coolify-vscode-extension',
    slug: 'coolify-vscode-extension',
  },
];

import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

type Icon = {
  SvgIcon: any;
  title: string;
  class: string;
};

type Project = {
  title: string;
  description: string;
  urlDirect: string;
  srcImage: string;
  icons: Array<Icon>;
};

export const Projects: Array<Project> = [
  {
    title: 'Lunar UX',
    description: 'I created a website for a company that sells services.',
    urlDirect: 'https://fiqtor.sytes.net/lunar-ux',
    srcImage: '/img/projects/lunar-ux.webp',
    icons: [
      {
        SvgIcon: SiNextdotjs,
        title: 'Next JS',
        class: 'fill-stone-950 dark:fill-white'
      },
      {
        SvgIcon: SiTailwindcss,
        title: 'Tailwind CSS',
        class: 'fill-blue-400'
      },
      {
        SvgIcon: SiTypescript,
        title: 'Typescript',
        class: 'fill-blue-800 rounded-[5px]'
      },
    ],
  },
  {
    title: 'Hardware Universe',
    description: 'I created a website for a company that sells services.',
    urlDirect: 'https://fiqtor.sytes.net/hardware-universe',
    srcImage: '/img/projects/hardware-universe.webp',
    icons: [
      {
        SvgIcon: SiNextdotjs,
        title: 'Next JS',
        class: 'fill-stone-950 dark:fill-white'
      },
      {
        SvgIcon: SiTailwindcss,
        title: 'Tailwind CSS',
        class: 'fill-blue-400'
      },
      {
        SvgIcon: SiTypescript,
        title: 'Typescript',
        class: 'fill-blue-800 rounded-[5px]'
      },
    ],
  }
];

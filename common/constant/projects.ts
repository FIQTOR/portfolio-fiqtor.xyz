import { SiFramer, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

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
    title: 'Personal Website',
    description: 'I created personal website for my portfolio.',
    urlDirect: 'https://fiqtor.xyz',
    srcImage: '/img/projects/personal-website.webp',
    icons: [
      {
        SvgIcon: SiNextdotjs,
        title: 'NextJS',
        class: 'fill-black dark:fill-white'
      },
      {
        SvgIcon: SiFramer,
        title: 'FramerMotion',
        class: 'fill-black dark:fill-white'
      },
      {
        SvgIcon: SiTypescript,
        title: 'Typescript',
        class: 'fill-blue-800 rounded'
      },
      {
        SvgIcon: SiTailwindcss,
        title: 'TailwindCSS',
        class: 'fill-blue-400'
      },
    ],
  },
  {
    title: 'Lunar UX',
    description: 'I created a website for a company that sells services.',
    urlDirect: 'https://lunar-ux.vercel.app',
    srcImage: '/img/projects/lunar-ux.webp',
    icons: [
      {
        SvgIcon: SiNextdotjs,
        title: 'NextJS',
        class: 'fill-stone-950 dark:fill-white'
      },
      {
        SvgIcon: SiTailwindcss,
        title: 'TailwindCSS',
        class: 'fill-blue-400'
      },
      {
        SvgIcon: SiTypescript,
        title: 'Typescript',
        class: 'fill-blue-800 rounded'
      },
    ],
  },
  {
    title: 'Hardware Harmony',
    description: 'I created a website for a e-commerce that sells services without database.',
    urlDirect: 'https://hardware-harmony.vercel.app',
    srcImage: '/img/projects/hardware-harmony.webp',
    icons: [
      {
        SvgIcon: SiNextdotjs,
        title: 'NextJS',
        class: 'fill-stone-950 dark:fill-white'
      },
      {
        SvgIcon: SiTypescript,
        title: 'Typescript',
        class: 'fill-blue-800 rounded'
      },
      {
        SvgIcon: SiTailwindcss,
        title: 'TailwindCSS',
        class: 'fill-blue-400'
      },
    ],
  }
];

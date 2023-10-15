
import { TbBrandVscode, TbCloudComputing, TbStack2 } from 'react-icons/tb';

type Project = {
  label: string;
  Svg: any;
  urlDirect: string;
};

export const Menu: Array<Project> = [
  {
    label: "About",
    Svg: TbCloudComputing,
    urlDirect: "/#about"
  },
  {
    label: "Skills",
    Svg: TbBrandVscode,
    urlDirect: "/#skills"
  },
  {
    label: "All Projects",
    Svg: TbStack2,
    urlDirect: "/all-projects"
  },
];

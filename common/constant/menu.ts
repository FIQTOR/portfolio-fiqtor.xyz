
import { TbBrandVscode, TbCloudComputing, TbStack2 } from 'react-icons/tb';

type Project = {
  label: string;
  Svg: any;
  pathName: string;
};

export const Menu: Array<Project> = [
  {
    label: "About",
    Svg: TbCloudComputing,
    pathName: "/#about"
  },
  {
    label: "Skills",
    Svg: TbBrandVscode,
    pathName: "/#skills"
  },
  {
    label: "All Projects",
    Svg: TbStack2,
    pathName: "/all-projects"
  },
];

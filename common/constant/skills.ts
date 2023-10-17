
import {
    SiHtml5, SiCss3, SiJavascript, SiPhp, SiTypescript, SiCplusplus, SiCsharp,
    SiNextdotjs, SiReact, SiTailwindcss, SiBootstrap, SiJquery, SiSass,
    SiLaravel, SiMysql, SiPostgresql,
    SiAmazonaws, SiAmazonrds, SiAmazonec2, SiGit, SiGithubpages,
    SiFacebook,
    SiGithub,
    SiFramer
} from "react-icons/si";
import {
    TbArrowsLeftRight, TbLanguage, TbLayoutDashboard, TbDatabase,
    TbGitFork,
    TbBrandVscode
} from 'react-icons/tb';
import { FcGoogle } from "react-icons/fc";

type Item = {
    SvgIcon: any;
    tooltip: string;
    class?: string;
};

type APIItem = {
    SvgIcon: any;
    class?: string;
    title: string;
    description: string;
}

type Skills = {
    language?: Array<Item>;
    frontend?: Array<Item>;
    backend?: Array<Item>;
    devops?: Array<Item>;
    API?: Array<APIItem>;
};

export const Skills: Skills =
{
    language: [
        { SvgIcon: SiHtml5, tooltip: 'HTML5', class: 'fill-orange-500' },
        { SvgIcon: SiCss3, tooltip: 'CSS3', class: 'fill-blue-400' },
        { SvgIcon: SiJavascript, tooltip: 'Javascript', class: 'fill-yellow-400 rounded-[5px]' },
        { SvgIcon: SiTypescript, tooltip: 'Typescript', class: 'fill-blue-800 rounded-[5px]' },
        { SvgIcon: SiPhp, tooltip: 'PHP', class: 'fill-purple-500' },
        { SvgIcon: SiCplusplus, tooltip: 'C++', class: 'fill-blue-600' },
        { SvgIcon: SiCsharp, tooltip: 'CSharp', class: 'fill-green-600' },
    ],
    frontend: [
        { SvgIcon: SiNextdotjs, tooltip: 'NextJS', class: 'fill-stone-950 dark:fill-white' },
        { SvgIcon: SiReact, tooltip: 'ReactJS', class: 'fill-blue-500' },
        { SvgIcon: SiTailwindcss, tooltip: 'TailwindCSS', class: 'fill-blue-400' },
        { SvgIcon: SiBootstrap, tooltip: 'Bootstrap', class: 'fill-purple-500' },
        { SvgIcon: SiJquery, tooltip: 'JQuery', class: 'fill-blue-600' },
        { SvgIcon: SiSass, tooltip: 'Sass', class: 'fill-pink-600' },
        { SvgIcon: SiFramer, tooltip: 'FramerMotion', class: 'fill-stone-950 dark:fill-white' },
    ],
    backend: [
        { SvgIcon: SiLaravel, tooltip: 'Laravel', class: 'fill-red-600' },
        { SvgIcon: SiMysql, tooltip: 'MySQL', class: 'fill-orange-500' },
        { SvgIcon: SiPostgresql, tooltip: 'PostgreSQL', class: 'fill-blue-700' },
    ],
    devops: [
        { SvgIcon: SiAmazonaws, tooltip: 'AWS', class: 'fill-orange-500' },
        { SvgIcon: SiAmazonrds, tooltip: 'AmazonRDS', class: 'fill-blue-700' },
        { SvgIcon: SiAmazonec2, tooltip: 'AmazonEC2', class: 'fill-orange-500' },
        { SvgIcon: SiGit, tooltip: 'Git', class: 'fill-red-600' },
        { SvgIcon: SiGithubpages, tooltip: 'GithubPages', class: 'fill-slate-900 dark:fill-white' },
    ],
    API: [
        {
            SvgIcon: FcGoogle,
            title: "Google O2Auth",
            description: `Google Authenticator API is not directly provided by Google. 
            However, Google offers the OAuth 2.0 API, 
            which allows developers to integrate their authentication services with Google accounts.
            By using OAuth 2.0, users can grant permission for third-party applications to access their Google accounts securely.`
        },
        {
            SvgIcon: SiFacebook, class: 'fill-blue-700',
            title: "Facebook Auth",
            description: `The Facebook Authentication API, often referred to as Facebook Login,
            is a set of tools and resources provided by Facebook for developers to
            implement authentication and user authorization in their applications or websites.
            This API allows users to log in to third-party services or apps using their Facebook credentials, 
            simplifying the registration and login processes while providing an additional layer of security.`
        },
        {
            SvgIcon: SiGithub, class: 'fill-stone-900 dark:fill-white',
            title: "Github API",
            description: `The GitHub API is a valuable resource for developers looking to build applications that interact with GitHub's
            extensive ecosystem of repositories and collaborative development tools. It enables the automation of various tasks,
            the integration of GitHub features into external applications, and the extraction of data for analysis and reporting.`
        },
    ],
};

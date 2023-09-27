export const METADATA = {
  creator: 'FIQTOR',
  description:
    'Personal website, portfolio, fullstack website developer',
  keyword:
    'fiqtor, taufiiqul hakim, programming tips, belajar javascript, belajar typescript',
  authors: {
    name: 'Taufiiqul Hakim',
    url: process.env.DOMAIN,
  },
  openGraph: {
    url: process.env.DOMAIN,
    siteName: 'FIQTOR',
    locale: 'id-ID',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: {
      rel: 'favicon',
      url: '/favicon.ico',
    },
  },
  exTitle: '| FIQTOR',
  profile: 'https://avatars.githubusercontent.com/u/117913964?v=4',
  githubUsername: 'fiqtor',
  githubToken: process.env.GITHUB_TOKEN,
};
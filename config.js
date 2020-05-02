const profile = {
  fullName: 'Moses Christopher',
  description: 'Embedded Linux Developer',
  // The basepath is the assets folder
  /// the file sould be imported in assets-import.js
  avatarPath: 'moses.png',
  about: {
    title: `
    Founder, CarrotPi`,
    description: `CarrotPi is an organization established with the motto of Enhancing Knowledge through practical education using minimalistic hardware which anyone can easily program and integrate for faster prototyping cycles. 
   
    Currently this project is aimed at contributing to opensource projects to enhance the skill and learning experience.`,
    findMeOn: [
//      {
//        iconName: 'mdi-linkedin',
//        text: '@moseschristopher',
//        url: 'https://www.linkedin.com/in/moseschristopher',
//        hoverColor: '#e9641c'
//      },
//      {
//        iconName: 'twitter',
//        text: '@thecarrotpi',
//        url: 'https://twitter.com/thecarrotpi',
//        hoverColor: '#1da1f2'
//      },
//      {
//        iconName: 'location',
//        text: 'Bengaluru, India',
//        url: '',
//        hoverColor: '#546e7a'
//      },
//      {
//        iconName: 'email',
//        text: 'moseschristopherb@gmail.com',
//        url: 'mailto://moseschristopherb@gmail.com',
//        hoverColor: '#546e7a'
//      }
    ]
  },
  social: [
    {
      iconName: 'mdi-linkedin',
      url: 'https://www.linkedin.com/in/moseschristopher',
      text: "I'm on LinkedIn",
      hoverColor: '#0088cc'
    },
    {
      iconName: 'twitter',
      url: 'https://twitter.com/thecarrotpi',
      text: "I'm on Twitter",
      hoverColor: '#1da1f2'
    },
    {
      iconName: 'github',
      url: 'https://github.com/carrotpi',
      text: "I'm on Github",
      hoverColor: '#000'
    },
    {
      iconName: 'email',
      url: 'mailto:moseschristopherb@gmail.com',
      text: 'Send me an email',
      hoverColor: '#000'
    }
  ]
}

const projects = [
  {
    title: 'U-Boot Open Source Contributions',
    img: '',
    description: 'Consolidated U-Boot Patches submitted to mainline u-boot project, till date.',
    categories: ['Open Source', 'U-Boot'],
    siteUrl: 'https://patchwork.ozlabs.org/project/uboot/list/?series=&submitter=76881&state=*&q=&archive=both&delegate=',
  },
  {
    title: 'Linux Open Source Contributions',
    img: '',
    description: 'Consolidated Linux Patches submitted to mainline u-boot project, till date.',
    categories: ['Open Source','Linux'],
    siteUrl: 'https://lore.kernel.org/patchwork/project/lkml/list/?series=&submitter=25985&state=*&q=&archive=both&delegate='
  },
  {
    title: 'U-Boot Guardian Patch #1',
    img: '',
    description: 'Update Guardian Board',
    categories: ['Open Source', 'U-Boot'],
    sourceCodeUrl: 'https://gitlab.denx.de/u-boot/u-boot/-/commit/b1476b52b3bbac8f1e5b49e930d431259a6a7a0a'
  },
  {
    title: 'U-Boot Guardian Patch #2',
    img: '',
    description: 'Adapt Guardian Board to u-boot\'s Driver Model',
    categories: ['Open Source', 'U-Boot'],
    sourceCodeUrl: 'https://gitlab.denx.de/u-boot/u-boot/-/commit/51d4e47afa9cbd6b83cfc4143bbd7a1fd9981321'
  },
]

const formUrl = 'http://carrotpi.com:4000'
const ReCAPTCHAKey = '6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu'
const missingProjectIcon = './assets/no-work-icon.jpg'
const patchIcon = './assets/patch-icon.jpg'

export {
  profile,
  projects,
  formUrl,
  ReCAPTCHAKey,
  missingProjectIcon,
  patchIcon
}

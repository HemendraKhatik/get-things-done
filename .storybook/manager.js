import { create } from '@storybook/theming';
import Logo from './assets/logo.svg';
import favicon from './assets/favicon.svg';
import React from "react";
import { addons, types } from '@storybook/addons';

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);

const myTheme = create({
    base: 'dark',
    brandTitle: 'Get things done',
    brandUrl: 'https://github.com/HemendraKhatik/get-things-done',
    brandImage: Logo,
    brandTarget: '_self',

    colorSecondary: '#04AA6D',

    appBg: '#000000',
    appContentBg: '#121212',
    appBorderColor: 'grey',
    appBorderRadius: 4,

     // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  });

addons.setConfig({
  theme: myTheme
});





// addons.register('my/tab', () => {
//     addons.add('my-panel-addon/tab', {
//       type: types.TAB,
//       title: 'About',
//       //👇 Checks the current route for the story
//       route: ({ storyId, refId }) => {
//           return (refId ? `/About/${refId}_${storyId}` : `/About/${storyId}`)
//       },
//       //👇 Shows the Tab UI element in mytab view mode
//       match: ({ viewMode }) =>{
//           return  viewMode === 'mytab'
//       },
//       render: () => (
//         <div>
//           <h2>About Get things done</h2>
//         </div>
//       ),
//     });
//   });
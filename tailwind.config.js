/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'Poppins', 'Verdana', 'sans-serif'],
      },
      boxShadow: {
        'divider-horizontal': '0 2px 1px 0 rgba(111, 106, 106, 0.50)',
        'divider-vertical': '1px 3px 1px 0 rgba(111, 106, 106, 0.50)',
        'knob-outer': 'inset 0 -1px 1px 0 rgba(93, 95, 99, 0.21), inset 0 1px 1px 0 #121212',
        'knob-inner': '0 4px 5px 0 rgba(0, 0, 0, 0.62), inset 0 -1px 1px 0 rgba(23, 23, 23, 0.49), inset 0 1px 1px 0 rgba(131, 130, 130, 0.46)',
        'knob-grip': 'inset 0 -1px 1px 0 rgba(23, 23, 23, 0.16), inset 0 1px 1px 0 rgba(96, 98, 104, 0.48)',
        'readout': 'inset 0 -1px 1px 0 rgba(95, 95, 95, 0.62), inset 0 1px 1px 0 #121212',
        'fader': 'inset 0 -1px 1px 0 rgba(93, 95, 99, 0.62), inset 0 1px 1px 0 #101215',
        'fader-grip': '0 3px 8px 0 rgba(0, 0, 0, 0.30), inset 0 1px 0 0 #4B4C52',
        'toggle-bg': 'inset -1px 0 1px 0 #5f5f5f9e, inset 1px 0 1px 0 #121212',
        'toggle-inner': '4px 0 8px 0 rgba(0, 0, 0, 0.43), inset 0 -2px 0 0 #5f5f5f9e',
        'toggle-inner-span': '0 0 3px 0 #fbb615',
        'toggle-btn-bg': 'inset 0 -1px 1px 0 #5f5f5f9e, inset 0 1px 1px 0 #121212',
        'pill-btn-active': '0 4px 8px 0 rgba(0, 0, 0, 0.30)',
        'pill-btn': '0 4px 8px 0 rgba(0, 0, 0, 0.30), inset 0 2px 0 0 #5f5f5f9e'
      },
      dropShadow: {
        'knob-legend': '1px 1px 0 rgba(0, 0, 0, 0.1)',
        'header-1': '1px 1px 0 rgba(255, 255, 255, 0.1)',
        'header-2': '1px 1px 0 rgba(0, 0, 0, 0.1)',
        'span-text-active': '0 0 8px #fbb615bf',
        'span-text-active-red': '0 0 8px #ef4444bf',
        'span-text-active-green': '0 0 8px #059669bf',
      },
      colors: {
        'background': '#141414',

        'hlt': '#5f5f5f9e',
        'hlb': '#121212',
        'bgt': '#202227',
        'bgb': '#3b3d43',
        'bght': '#2a2c33',
        'bghb': '#43464d',
        
        'cbg': '#1c1e23',
        'cbgb': '#24262a',

        'glow': '#fbb615bf',

        'p1': '#f26e25',
        'p1h': '#f26e259C',
        'p2': '#fbb615',
        'p2h': '#fbb6159C',
        'pb': '#1a1a1a',
        'pw': '#f3f3f3',

        's1': '#ef3e23',
        's2': '#f37b21',
        'sb': '#231f20',
        'sw': '#fff',

        // 979797 > 500
        // 262626 > 900
      }
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false, // if disabled, borders and some other things don't work
  // },
  prefix: 'mll-'
}


/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {

    },
    colors: {
      'transparent': 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      'redSaber': '#EB212E', 
      'greenSaber': '#2FF924',
      'purpleSaber': '#b100cd',
      'blueSaber': '#2E67F8',
      'yellowSaber': '#FFF36D',
      'orangeSaber': '#ED820E',
      'chewbacca': '#945222',
      'nav': '#181818',
      '581E85' : '#581E85',
      '18082f' : '#18082f',
      'dark-bg': '#451868',
      'BA66E9': '#BA66E9',
      '3B145A': '#3B145A',
      '481268': '#481268',
      '320D4E': '#320D4E',
      '511C77': '#511C77', 
      '230B36': '#230B36',
      '3F084B': '#3F084B', 
      '230B36': '#230B36',
      '230B36ttt': '#h230B36 transparent transparent transparent', 
      '220A39': '#220A39'
    },
    fontFamily: {
      'dosis': ['"dosis"', '"sans-serif"'],
      'jedi':['"Starjedi"']
    },
    extend: {
      boxShadow: {
        redSaber: '1px 1px 6px 6px #EB212E',
        greenSaber: '1px 1px 6px 6px #2FF924',
        purpleSaber: '1px 1px 6px 6px #b100cd',
        blueSaber: '1px 1px 6px 6px #2E67F8',
        yellowSaber: '1px 1px 6px 6px #FFF36D',
        orangeSaber: '1px 1px 6px 6px #ED820E',
      },

      height: {
        '2': '2px',
        "220": '220px',
        "240": '240px',
        "290": '290px',
        "260": '260px',
        "300": '300px',
        '540': '540px',
        '570': '570px',
      },
      width: {
        '2': '2px',
        '18': '18px',
        '25': '25px',
        "240": '240px',
        "260": '260px',
        "290": '249px',
        "300": '300px',
        '550': '550px',
        '570': '570px',
      },

      borderRadius: {
        '2': '2px',
        '50': '50%',
      },
      zIndex: {
        '2': '2',
      }, 
      backgroundImage: {
        'charactersBg': "url('../../static/images/background.png')",
        'site': "url('../../static/images/stars.jpeg')",
        'weapons': "url('../../static/images/weapons.png')",
        'xwing': "url('../../static/images/xwing.jpg')",
        'planet': "url('../../static/images/planet.jpg')",
      },
    },
  },

  plugins: [
    
  ],
}

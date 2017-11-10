const quotes = [
`…and this one time, at band camp`,
`A martini shaken, not stirred`,
`Badges? We don’t have no badges We don’t need no badges. I don’t have`,
`Beetlejuice, Beetlejuice, Beetlejuice!`,
`Bond…James Bond.`,
`Bueller….Bueller…Bueller?`,
`Cowabunga!`,
`Dammit, man, I’m a DOCTOR, not a – `,
`Damn you. Goddamn you all to hell!`,
`Ding-dong, the witch is dead!`,
`E.T. phone home.`,
`Forget it, Jake. It’s Chinatown.`,
`Frankly, my dear, I don’t give a damn.`,
`Get off my plane.`,
`Go ahead, make my day.`,
`Gooble gobble, gooble gobble. We accept her! We accept her!`,
`Good morning, Vietnam!`,
`Goonies never say die!`,
`Greed, for lack of a better word, is good.`,
`Hakuna Matata!`,
]

export default () => {
  return quotes[Math.floor(Math.random() * 20)]
}

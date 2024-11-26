const typesGroup = [
  {
    title: 'analysts',
    title_locale: '分析家',
    types: [{
      type: 'INTJ',
      name_local: '建筑师',
      name: 'architect',
      snippet: '富有想象力和战略性思维，一切皆在计划之中。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/intj-architect.svg', 
      animation:'/animations/avatars/defaults/architect.json'
      
    },
    {
      type: 'INTP',
      name_local: '逻辑学家',
      name: 'logician',
      snippet: '具有创造力的发明家，对知识有着不可抑制的渴望。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/intp-logician.svg', 
      animation:'/animations/avatars/defaults/logician.json'
    },
    {
      type: 'ENTJ',
      name_local: '指挥官',
      name: 'commander',
      snippet: '大胆、富有想象力且意志强大的领导者，总能找到或创造解决方法。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/entj-commander.svg', 
      animation:'/animations/avatars/defaults/commander.json'
    },
    {
      type: 'ENTP',
      name_local: '辩论家',
      name: 'debater',
      snippet: '聪明好奇的思考者，无法抵挡智力挑战的诱惑。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/entp-debater.svg', 
      animation:'/animations/avatars/defaults/debater.json'
    },
  ]
  },
  {
    title: 'diplomats',
    title_locale: '外交家',
    types: [{
      type: 'INFJ',
      name_local: '提倡者',
      name: 'advocate',
      snippet: '安静神秘，但非常鼓舞人心且不知疲倦的理想主义者。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/infj-advocate.svg', 
      animation:'/animations/avatars/defaults/advocate.json'
    },
    {
      type: 'INFP',
      name_local: '调停者',
      name: 'mediator',
      snippet: '富有诗意、善良且无私的人，总是热衷于帮助正义事业。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/infp-mediator.svg', 
      animation:'/animations/avatars/defaults/mediator.json'
    },
    {
      type: 'ENFJ',
      name_local: '主人公',
      name: 'protagonist',
      snippet: '具有魅力并能激励人心的领导者，能够让听众为之着迷。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/enfj-protagonist.svg', 
      animation:'/animations/avatars/defaults/protagonist.json'
    },
    {
      type: 'ENFP',
      name_local: '竞选者',
      name: 'campaigner',
      snippet: '充满活力，富有创意，善于交际的自由之人，总能找到微笑的理由。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/enfp-campaigner.svg', 
      animation:'/animations/avatars/defaults/campaigner.json'
    },]
  },
  {
    title: 'sentinels',
    title_locale: '守护者',
    types: [
      {
      type: 'ISTJ',
      name_local: '物流师',
      name: 'logistician',
      snippet: '务实且注重事实的人，可靠性不容怀疑。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/istj-logistician.svg', 
      animation:'/animations/avatars/defaults/logistician.json'
    },
      {
      type: 'ISFJ',
      name_local: '守卫者',
      name: 'defender',
      snippet: '非常专注和热情的保护者，总是随时准备保护他们所爱的人。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/isfj-defender.svg', 
      animation:'/animations/avatars/defaults/defender.json'
    },
      {
      type: 'ESTJ',
      name_local: '总经理',
      name: 'executive',
      snippet: '出色的管理者，在管理事物或人的方面无与伦比。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/estj-executive.svg', 
      animation:'/animations/avatars/defaults/executive.json'
    },
      {
      type: 'ESFJ',
      name_local: '执政官',
      name: 'consul',
      snippet: '非常关心他人，善于社交，受人欢迎，总是乐于助人。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/esfj-consul.svg', 
      animation:'/animations/avatars/defaults/consul.json'
    }
  ]
  },
  {
    title: 'explorers',
    title_locale: '探险家',
    types: [{
      type: 'ISTP',
      name_local: '鉴赏家',
      name: 'virtuoso',
      snippet: '非常关心他人，善于社交，受人欢迎，总是乐于助人。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/istp-virtuoso.svg', 
      animation:'/animations/avatars/defaults/virtuoso.json'
    },{
      type: 'ISFP',
      name_local: '探险家',
      name: 'adventurer',
      snippet: '非常关心他人，善于社交，受人欢迎，总是乐于助人。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/isfp-adventurer.svg', 
      animation:'/animations/avatars/defaults/adventurer.json'
    },{
      type: 'ESTP',
      name_local: '企业家',
      name: 'entrepreneur',
      snippet: '非常关心他人，善于社交，受人欢迎，总是乐于助人。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/estp-entrepreneur.svg', 
      animation:'/animations/avatars/defaults/entrepreneur.json'
    },{
      type: 'ESFP',
      name_local: '表演者',
      name: 'entertainer',
      snippet: '非常关心他人，善于社交，受人欢迎，总是乐于助人。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/esfp-entertainer.svg', 
      animation:'/animations/avatars/defaults/entertainer.json'
    }]
  },
]

function index(req, res) {
  res.render('16personalities', {
    typesGroup:typesGroup
  });
}
module.exports = index
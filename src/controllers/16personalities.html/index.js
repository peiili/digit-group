const typesGroup = [
  {
    title: 'analysts',
    title_locale: '分析家',
    types: [{
      type: 'INTJ',
      name: '建筑师',
      snippet: '富有想象力和战略性思维，一切皆在计划之中。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/intj-architect.svg', 
      animation:''
      
    },
    {
      type: 'INTP',
      name: '逻辑学家',
      snippet: '具有创造力的发明家，对知识有着不可抑制的渴望。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/intp-logician.svg', 
      animation:''
    },
    {
      type: 'ENTJ',
      name: '指挥官',
      snippet: '大胆、富有想象力且意志强大的领导者，总能找到或创造解决方法。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/entj-commander.svg', 
      animation:''
    },
    {
      type: 'ENTP',
      name: '辩论家',
      snippet: '聪明好奇的思考者，无法抵挡智力挑战的诱惑。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/entp-debater.svg', 
      animation:''
    },
  ]
  },
  {
    title: 'diplomats',
    title_locale: '外交家',
    types: [{
      type: 'INFJ',
      name: '提倡者',
      snippet: '安静神秘，但非常鼓舞人心且不知疲倦的理想主义者。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/infj-advocate.svg', 
      animation:''
    },
    {
      type: 'INFP',
      name: '调停者',
      snippet: '富有诗意、善良且无私的人，总是热衷于帮助正义事业。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/infp-mediator.svg', 
      animation:''
    },
    {
      type: 'ENFJ',
      name: '主人公',
      snippet: '具有魅力并能激励人心的领导者，能够让听众为之着迷。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/enfj-protagonist.svg', 
      animation:''
    },
    {
      type: 'ENFP',
      name: '竞选者',
      snippet: '充满活力，富有创意，善于交际的自由之人，总能找到微笑的理由。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/enfp-campaigner.svg', 
      animation:''
    },]
  },
  {
    title: 'sentinels',
    title_locale: '守护者',
    types: [
      {
      type: 'ISTJ',
      name: '物流师',
      snippet: '务实且注重事实的人，可靠性不容怀疑。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/istj-logistician.svg', 
      animation:''
    },
      {
      type: 'ISFJ',
      name: '守卫者',
      snippet: '非常专注和热情的保护者，总是随时准备保护他们所爱的人。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/isfj-defender.svg', 
      animation:''
    },
      {
      type: 'ESTJ',
      name: '总经理',
      snippet: '出色的管理者，在管理事物或人的方面无与伦比。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/estj-executive.svg', 
      animation:''
    },
      {
      type: 'ESFJ',
      name: '执政官',
      snippet: '非常关心他人，善于社交，受人欢迎，总是乐于助人。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/esfj-consul.svg', 
      animation:''
    }
  ]
  },
  {
    title: 'explorers',
    title_locale: '探险家',
    types: [{
      type: 'ISTP',
      name: '鉴赏家',
      snippet: '非常关心他人，善于社交，受人欢迎，总是乐于助人。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/istp-virtuoso.svg', 
      animation:''
    },{
      type: 'ISFP',
      name: '探险家',
      snippet: '非常关心他人，善于社交，受人欢迎，总是乐于助人。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/isfp-adventurer.svg', 
      animation:''
    },{
      type: 'ESTP',
      name: '企业家',
      snippet: '非常关心他人，善于社交，受人欢迎，总是乐于助人。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/estp-entrepreneur.svg', 
      animation:''
    },{
      type: 'ESFP',
      name: '表演者',
      snippet: '非常关心他人，善于社交，受人欢迎，总是乐于助人。',
      img:'https://www.16personalities.com/static/images/personality-types/avatars/esfp-entertainer.svg', 
      animation:''
    }]
  },
]

function index(req, res) {
  res.render('16personalities', {

  });
}
module.exports = index
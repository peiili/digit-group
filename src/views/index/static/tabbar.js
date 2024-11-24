const loadTabbar = () => {
  const tabbarDiv = document.createElement('div')
  tabbarDiv.classList.add('tabbar')
  tabbarDiv.innerHTML = `
    <a class="tabbar_item" href="/">
      <img class="tabbar_item_icon" src="static/img/tabbar_1.png">
      <p class="tabbar_item_title">首页</p>
    </a>
    <a class="tabbar_item" href="/personalitytype.html">
      <img class="tabbar_item_icon" src="static/img/tabbar_2.png">
      <p class="tabbar_item_title">类型</p>
    </a>
    <a class="tabbar_item" href="javascript:void(0)" onclick="jumpStandard()">
      <img class="tabbar_item_icon" src="./img/tabbar_3.png">
      <p class="tabbar_item_title">标准版测试</p>
    </a>
    <a class="tabbar_item" href="javascript:void(0)" onclick="jumpProfessional()">
      <img class="tabbar_item_icon" src="./img/tabbar_4.png">
      <p class="tabbar_item_title">专业版测试</p>
    </a>
  `
  const tabbarHolderDiv = document.createElement('div')
  tabbarHolderDiv.classList.add('tabbar-holder')
  document.querySelector('body').appendChild(tabbarDiv)
  document.querySelector('body').appendChild(tabbarHolderDiv)
}
// 标准版
function jumpStandard() {
  let msg='你是否愿意测试：更准确的知己专业版MBTI呢？'
  if (confirm(msg) == true) {
    window.location.href = 'https://iqeq.com.cn/mbtics-v2.html?vip'
  } else {
    window.location.href = '/mbti16go.aspx'
  }
}
// 专业版
function jumpProfessional() {
  window.location.href = 'https://iqeq.com.cn/mbtics-v2.html?vip'
}

// window.addEventListener('load', loadTabbar)
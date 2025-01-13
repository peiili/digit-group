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
    <a class="tabbar_item" href="/app/1.html">
      <img class="tabbar_item_icon" src="./img/tabbar_3.png">
      <p class="tabbar_item_title">标准版测试</p>
    </a>
    <a class="tabbar_item" href="/app/8.html">
      <img class="tabbar_item_icon" src="./img/tabbar_4.png">
      <p class="tabbar_item_title">专业版测试</p>
    </a>
  `
  const tabbarHolderDiv = document.createElement('div')
  tabbarHolderDiv.classList.add('tabbar-holder')
  document.querySelector('body').appendChild(tabbarDiv)
  document.querySelector('body').appendChild(tabbarHolderDiv)
}


// window.addEventListener('load', loadTabbar)
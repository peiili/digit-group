const loadNavbar = () => {
  const navbarDiv = document.createElement('div')
  navbarDiv.classList.add('navbar')
  navbarDiv.innerHTML = `
    <div class="navbar-pc">
        <img class="navbar-pc-logo" src="./index/static/logo.svg">
      <div class="navbar-pc-right">
        <div class="navbar-pc-login">登录</div>
        <div class="navbar-pc-language">
       <svg t="1723131116408" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10765" width="20" height="20"><path d="M960 512c0-246.4-201.6-448-448-448-80 0-156.8 22.4-220.8 57.6-48 25.6-86.4 60.8-112 92.8A441.6 441.6 0 0 0 64 512c0 246.4 201.6 448 448 448 19.2 0 38.4-3.2 57.6-3.2h6.4c67.2-3.2 118.4-28.8 160-57.6 134.4-76.8 224-220.8 224-387.2z m-64 0c0 92.8-32 179.2-89.6 246.4-28.8-16-115.2-54.4-131.2-64-16-6.4-41.6-3.2-70.4 12.8-3.2-3.2-3.2-6.4-6.4-9.6l-105.6-102.4c0-9.6 0-22.4 6.4-25.6 9.6 0 35.2 19.2 51.2 41.6 6.4 9.6 19.2 12.8 28.8 9.6 12.8-3.2 19.2-9.6 25.6-19.2 3.2-6.4 25.6-76.8-9.6-115.2l-3.2-3.2c3.2-16 60.8-48 89.6-64 54.4-32 99.2-57.6 105.6-96 3.2-16 6.4-38.4-105.6-118.4-12.8-9.6-32-6.4-41.6 3.2L566.4 288l-48-32 64-35.2c12.8-6.4 19.2-19.2 16-32-3.2-12.8-12.8-22.4-25.6-25.6l-118.4-25.6c16-6.4 38.4-9.6 57.6-9.6 211.2 0 384 172.8 384 384z m-268.8 364.8c9.6-41.6 6.4-83.2 0-108.8 9.6-6.4 22.4-12.8 28.8-12.8 16 6.4 60.8 28.8 96 44.8-12.8 16-32 32-57.6 48-22.4 12.8-44.8 22.4-67.2 28.8z m-195.2-265.6c-6.4-9.6-9.6-16-16-25.6-44.8-70.4-76.8-115.2-112-121.6h-9.6c-9.6 0-16 3.2-25.6 6.4-19.2-19.2-48-96-67.2-179.2 6.4-9.6 19.2-28.8 35.2-48l3.2-3.2c0-3.2 3.2-3.2 6.4-6.4 19.2-16 41.6-35.2 67.2-51.2 16-9.6 35.2-16 54.4-22.4l54.4 32c3.2 0 6.4 3.2 9.6 3.2l44.8 9.6-35.2 19.2c-9.6 6.4-16 16-16 25.6s6.4 22.4 12.8 28.8l115.2 73.6c12.8 9.6 28.8 6.4 41.6-6.4l73.6-76.8c22.4 16 41.6 35.2 51.2 44.8-12.8 12.8-48 32-70.4 44.8-57.6 32-112 64-118.4 112-3.2 12.8 0 28.8 9.6 44.8-22.4-12.8-48-19.2-70.4-3.2-38.4 25.6-41.6 70.4-38.4 99.2zM128 512c0-51.2 9.6-99.2 28.8-140.8 19.2 67.2 51.2 144 92.8 160 16 6.4 32 3.2 44.8-3.2 16 12.8 51.2 64 67.2 92.8 38.4 57.6 57.6 92.8 89.6 92.8 12.8 3.2 67.2 19.2 112 35.2v16s19.2 76.8-6.4 128c-16 3.2-28.8 3.2-44.8 3.2-211.2 0-384-172.8-384-384z" fill="#666666" p-id="10766"></path></svg>
          <span class="navbar-pc-language-text">CH</span>
        </div>
      </div>
      <div class="navbar-pc-list">
        <a class="navbar-pc-list-item" href="/">人格测试</a>
        <a class="navbar-pc-list-item" href="/personalitytype.html">人格类型</a>
        <a class="navbar-pc-list-item" href="/testprompt.html">测试提示</a>
        <a class="navbar-pc-list-item" href="/article.html">相关文章</a>
      </div>
    </div>
    <div class="navbar-h5">
      <img class="navbar-h5-logo" src="./index/static/logo.svg">
      <div class="navbar-h5-right">
        <div class="navbar-h5-language">
          <svg t="1723131116408" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10765" width="20" height="20"><path d="M960 512c0-246.4-201.6-448-448-448-80 0-156.8 22.4-220.8 57.6-48 25.6-86.4 60.8-112 92.8A441.6 441.6 0 0 0 64 512c0 246.4 201.6 448 448 448 19.2 0 38.4-3.2 57.6-3.2h6.4c67.2-3.2 118.4-28.8 160-57.6 134.4-76.8 224-220.8 224-387.2z m-64 0c0 92.8-32 179.2-89.6 246.4-28.8-16-115.2-54.4-131.2-64-16-6.4-41.6-3.2-70.4 12.8-3.2-3.2-3.2-6.4-6.4-9.6l-105.6-102.4c0-9.6 0-22.4 6.4-25.6 9.6 0 35.2 19.2 51.2 41.6 6.4 9.6 19.2 12.8 28.8 9.6 12.8-3.2 19.2-9.6 25.6-19.2 3.2-6.4 25.6-76.8-9.6-115.2l-3.2-3.2c3.2-16 60.8-48 89.6-64 54.4-32 99.2-57.6 105.6-96 3.2-16 6.4-38.4-105.6-118.4-12.8-9.6-32-6.4-41.6 3.2L566.4 288l-48-32 64-35.2c12.8-6.4 19.2-19.2 16-32-3.2-12.8-12.8-22.4-25.6-25.6l-118.4-25.6c16-6.4 38.4-9.6 57.6-9.6 211.2 0 384 172.8 384 384z m-268.8 364.8c9.6-41.6 6.4-83.2 0-108.8 9.6-6.4 22.4-12.8 28.8-12.8 16 6.4 60.8 28.8 96 44.8-12.8 16-32 32-57.6 48-22.4 12.8-44.8 22.4-67.2 28.8z m-195.2-265.6c-6.4-9.6-9.6-16-16-25.6-44.8-70.4-76.8-115.2-112-121.6h-9.6c-9.6 0-16 3.2-25.6 6.4-19.2-19.2-48-96-67.2-179.2 6.4-9.6 19.2-28.8 35.2-48l3.2-3.2c0-3.2 3.2-3.2 6.4-6.4 19.2-16 41.6-35.2 67.2-51.2 16-9.6 35.2-16 54.4-22.4l54.4 32c3.2 0 6.4 3.2 9.6 3.2l44.8 9.6-35.2 19.2c-9.6 6.4-16 16-16 25.6s6.4 22.4 12.8 28.8l115.2 73.6c12.8 9.6 28.8 6.4 41.6-6.4l73.6-76.8c22.4 16 41.6 35.2 51.2 44.8-12.8 12.8-48 32-70.4 44.8-57.6 32-112 64-118.4 112-3.2 12.8 0 28.8 9.6 44.8-22.4-12.8-48-19.2-70.4-3.2-38.4 25.6-41.6 70.4-38.4 99.2zM128 512c0-51.2 9.6-99.2 28.8-140.8 19.2 67.2 51.2 144 92.8 160 16 6.4 32 3.2 44.8-3.2 16 12.8 51.2 64 67.2 92.8 38.4 57.6 57.6 92.8 89.6 92.8 12.8 3.2 67.2 19.2 112 35.2v16s19.2 76.8-6.4 128c-16 3.2-28.8 3.2-44.8 3.2-211.2 0-384-172.8-384-384z" fill="#666666" p-id="10766"></path></svg>
          <span class="navbar-h5-language-text">CH</span>
        </div>
        <div class="navbar-h5-menu">
          <div class="navbar-h5-menu-line"></div>
          <div class="navbar-h5-menu-line"></div>
          <div class="navbar-h5-menu-line"></div>
        </div>
      </div>
    </div>
  `

  const drawerMenuDiv = document.createElement('div')
  drawerMenuDiv.classList.add('drawer-menu-mask')
  drawerMenuDiv.innerHTML = `
    <div class="drawer-menu">
      <div class="drawer-menu-header">
        <div class="drawer-menu-header-test">开始测试</div>
        <div class="drawer-menu-header-close">
          <img class="drawer-menu-header-close-icon" src="./img/drawer_menu_close_icon.png">
        </div>
      </div>
      <div class="drawer-menu-list">
        <a class="drawer-menu-list-item" href="/">测试首页</a>
        <a class="drawer-menu-list-item" href="/personalitytype.html">人格类型</a>
        <a class="drawer-menu-list-item" href="/testprompt.html">测试提示</a>
        <a class="drawer-menu-list-item" href="/article.html">相关文章</a>
      </div>
      <div class="drawer-menu-login">
        登录
      </div>
    </div>
    `

  const loginPopDiv = document.createElement('div')
  loginPopDiv.classList.add('login-mask')
  loginPopDiv.innerHTML = `
    <!-- 登录 -->
    <div id="loginPop" class="login">
      <div class="login-title">登录</div>
      <div class="login-block">
        <div class="login-smtitle">电子邮件</div>
        <div class="login-wrapper">
          <div class="login-icon email">
            <img src="./img/login_email.png">
          </div>
          <input class="login-input" type="text" placeholder="your@email.com">
        </div>
      </div>
      <div class="login-block">
        <div class="login-smtitle">密码</div>
        <div class="login-wrapper">
          <div class="login-icon password">
            <img src="./img/login_password.png">
          </div>
          <input class="login-input" type="password" placeholder="********">
          <div id="passwordvisible" class="login-icon">
            <img src="./img/login_password_hide.png">
          </div>
        </div>
      </div>
      <button id="submitLogin" class="login-submit">登录</button>
      <div id="switchForgot" class="login-forgot">忘记密码？</div>
      <div id="loginPopClose" class="login-close">
        <img src="./img/login_close_icon.png" class="login-close-icon">
      </div>
    </div>
    <!-- 忘记密码 -->
    <div id="forgotPasswordPop" class="login">
      <div class="login-title">忘记密码？</div>
      <div class="login-tip">输入你的电子邮件地址。</div>
      <div class="login-block">
        <div class="login-smtitle">电子邮件</div>
        <div class="login-wrapper">
          <div class="login-icon email">
            <img src="./img/login_email.png">
          </div>
          <input class="login-input" type="text" placeholder="your@email.com">
        </div>
      </div>
      <button id="submitForgot" class="login-submit">发送</button>
      <div id="switchLogin" class="login-forgot">登录</div>
      <div id="forgotPasswordPopClose" class="login-close">
        <img src="./img/login_close_icon.png" class="login-close-icon">
      </div>
    </div>
  `
  document.querySelector('body').appendChild(navbarDiv)
  document.querySelector('body').appendChild(drawerMenuDiv)
  document.querySelector('body').appendChild(loginPopDiv)

  let strUrl = location.href
  let arrUrl = strUrl.split("/")
  const strPage = arrUrl[arrUrl.length - 1]
  const list = document.querySelectorAll('.navbar-pc-list-item')
  if (strPage === 'personalitytype.html') {
    list[1].classList.add('navbar-pc-list-current')
  } else if (strPage === 'testprompt.html') {
    list[2].classList.add('navbar-pc-list-current')
  } else if (strPage === 'article.html') {
    list[3].classList.add('navbar-pc-list-current')
  }

  const navbarH5Menu = document.querySelector('.navbar-h5-menu')
  const drawerMenuMask = document.querySelector('.drawer-menu-mask')
  const drawerMenu = document.querySelector('.drawer-menu')
  const drawerMenuClose = document.querySelector('.drawer-menu-header-close')
  const drawerMenuTestBtn = document.querySelector('.drawer-menu-header-test')
  const drawerMenuLoginBtn = document.querySelector('.drawer-menu-login')
  const navbarLoginBtn = document.querySelector('.navbar-pc-login')
  const loginMask = document.querySelector('.login-mask')
  const loginPop = document.getElementById('loginPop')
  const forgotPasswordPop = document.getElementById('forgotPasswordPop')
  const loginPopClose = document.getElementById('loginPopClose')
  const forgotPasswordPopClose = document.getElementById('forgotPasswordPopClose')
  const switchLogin = document.getElementById('switchLogin')
  const switchForgot = document.getElementById('switchForgot')
  const passwordvisible = document.getElementById('passwordvisible')
  const submitLogin = document.getElementById('submitLogin')
  const submitForgot = document.getElementById('submitForgot')

  const inputsDiv = document.querySelectorAll('.login-wrapper')
  inputsDiv.forEach(input => {
    input.addEventListener('click', function() {
      inputsDiv.forEach(otherInput => {
        if (otherInput !== this) {
          const email = otherInput.querySelector('.email')
          const password = otherInput.querySelector('.password')
          otherInput.style.borderColor = '#CCCFD4'
          if (email) {
            email.innerHTML = `<img src="./img/login_email.png">`
          }
          if (password) {
            password.innerHTML = `<img src="./img/login_password.png">`
          }
        }
      })
      const email = this.querySelector('.email')
      const password = this.querySelector('.password')
      if (email) {
        email.innerHTML = `<img src="./img/login_email_active.png">`
      }
      if (password) {
        password.innerHTML = `<img src="./img/login_password_active.png">`
      }
      this.style.borderColor = '#4298B4'
    })
  })

  navbarH5Menu.addEventListener('click', function() {
    openDrawerPop()
  })
  drawerMenuMask.addEventListener('click', function() {
    closeDrawerPop()
  })
  drawerMenu.addEventListener('click', function(e) {
    e.stopPropagation()
  })
  drawerMenuClose.addEventListener('click', function() {
    closeDrawerPop()
  })
  drawerMenuTestBtn.addEventListener('click', function() {
    closeDrawerPop()
    location.href = '/'
  })
  navbarLoginBtn.addEventListener('click', function() {
    openLoginMask()
  })
  drawerMenuLoginBtn.addEventListener('click', function() {
    openLoginMask()
  })
  loginMask.addEventListener('click', function() {
    closeLoginMask()
  })
  loginPop.addEventListener('click', function(e) {
    e.stopPropagation()
  })
  forgotPasswordPop.addEventListener('click', function(e) {
    e.stopPropagation()
  })
  loginPopClose.addEventListener('click', function() {
    closeLoginMask()
  })
  forgotPasswordPopClose.addEventListener('click', function() {
    closeLoginMask()
  })
  switchLogin.addEventListener('click', function() {
    forgotPasswordPop.style.display = 'none'
    loginPop.style.display = 'flex'
  })
  switchForgot.addEventListener('click', function() {
    loginPop.style.display = 'none'
    forgotPasswordPop.style.display = 'flex'
  })
  passwordvisible.addEventListener('click', function() {
    const input = this.previousElementSibling
    if (input.type === 'password') {
      input.type = 'text'
      this.innerHTML = `<img src="./img/login_password_show.png">`
    } else {
      input.type = 'password'
      this.innerHTML = `<img src="./img/login_password_hide.png">`
    }
  })
  submitLogin.addEventListener('click', function() {
    closeLoginMask()
  })
  submitForgot.addEventListener('click', function() {
    closeLoginMask()
  })
  // 打开登录弹窗
  function openLoginMask() {
    loginMask.style.display = 'block'
    loginMask.style.opacity = '1'
  }
  // 关闭登录弹窗
  function closeLoginMask() {
    loginMask.style.opacity = '0'
    setTimeout(() => {
      loginMask.style.display = 'none'
      forgotPasswordPop.style.display = 'none'
      loginPop.style.display = 'flex'
    }, 300)
  }
  // 打开侧边菜单栏
  function openDrawerPop() {
    drawerMenuMask.style.display = 'block'
    drawerMenuMask.style.opacity = '1'
    setTimeout(() => {
      drawerMenu.style.transform = 'translateX(0%)'
    })
  }
  // 关闭侧边菜单栏
  function closeDrawerPop() {
    drawerMenu.style.transform = 'translateX(100%)'
    drawerMenuMask.style.opacity = '0'
    setTimeout(() => {
      drawerMenuMask.style.display = 'none'
    }, 300)
  }
}

window.addEventListener('load', loadNavbar)
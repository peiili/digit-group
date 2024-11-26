function isWeChatBrowser() {  
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;  
    return userAgent.indexOf('MicroMessenger') >= 0;  
}

var rowEle = document.getElementById('goods-placehold')

/**
 * 
 * @param {Object} options 
 * @param {String} options.url 
 * @param {String} options.method 
 * @param {Any} options.body 
 * @param {CallableFunction} cb 
 */
function request(options, cb){
    var xhr = new XMLHttpRequest();
    xhr.open(options.method || 'get', options.url, true); // 第三个参数是异步（true）或同步（false）  
    xhr.onload = function () {  
        if (xhr.status >= 200 && xhr.status < 300) {  
            var data = JSON.parse(xhr.responseText);  
            cb(data)
        } else {  
            console.error('Request failed. Returned status of ' + xhr.status);  
        }  
    };  
    xhr.setRequestHeader('Content-Type', 'application/json');  
    // 监听请求出错的情况  
    xhr.onerror = function () {  
        console.error('Request error');  
    };      
    // 发送请求  
    if(options.body){
        try {
            var jsonData = JSON.stringify(options.body);  
            xhr.send(jsonData);
            
        } catch (error) {
            console.error(error);
        }
        return
    }
    xhr.send();
}
var rowDom = ''
var goodsDom = ''
var list= ''
var currentGoodsId = '12';
var currentInfoId = '';

var url = '/mbti_api/goods/list?goods='+ encodeURIComponent("'10','11','12'")
var options = {
    url: url,
    method: 'GET'
}
request(options, function(data){
   list = data.data
   list.forEach(e=>{
    if(e.id==currentGoodsId){
        currentInfoId = e.infomation_id 
    }
})
   renderList()
})

function renderList(){
    goodsDom = ''
    list.forEach((e,index)=> {
        goodsDom+=`<div class="col ${currentGoodsId==e.id?'col_active':''}" data-id='${e.id}' data-info='${e.infomation_id}'>
                    <div class="img">
                        <img src=${e.cover} alt="" />
                    </div>
                    <div class="h_2">
                        ${e.goods_name}
                    </div>
                    <div class="h_1">
                        ${e.goods_description}
                    </div>
                    <div class="choose" style="display:${currentGoodsId==e.id?'block':'none'}"><svg t="1722355831246" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3295" width="20" height="20"><path d="M407.04 739.008L195.904 528a29.824 29.824 0 0 0-30.976-8 29.76 29.76 0 0 0-22.528 22.528 32.128 32.128 0 0 0 8.512 31.488l256 256 512-512a32.448 32.448 0 0 0-1.536-45.504 30.272 30.272 0 0 0-21.952-9.536 32.832 32.832 0 0 0-22.528 8.96l-465.92 467.072z" fill="#ffffff" p-id="3296"></path></svg></div>
                </div>`
    })
    rowDom = ` <div class="row">
                    ${goodsDom}         
                </div>
                <div class="button">
                    <p class="button_text" >开始测试</p>
                </div>`

    rowEle.innerHTML = rowDom
    var goodsCol = document.querySelectorAll('.col');
    goodsCol.forEach(e=>{
           e.addEventListener('click', function(){
                goodsCol.forEach(child=>{
                    child.classList.remove('col_active');
                    child.querySelector('.choose').style.display = 'none'
                })
                this.querySelector('.choose').style.display = 'block'
                currentGoodsId = this.dataset.id
                currentInfoId = this.dataset.info
                this.classList.add('col_active')
           }) 
    })
    var btn = document.querySelector('.button_text');
    var throttling = false;
    var time = 0;
    btn.addEventListener('click', function(){
        if(throttling){
            return
        }
        time = setTimeout(()=>{
            throttling = false
        },500)
        throttling = true

        var url = '/mbti_api/order/create'
        var body = {
            bd_vid: "",
            from: "",
            goods_id: currentGoodsId,
            host: window.location.href,
            info_id: currentInfoId,
            openid: ""
        }
        var options = {
            url:url,
            method: 'POST',
            body: body
        }
        request(options, function(res){
            if(res.success) {
                clearTimeout(time)
                throttling = false
                sessionStorage.setItem('sn_id', res.data.id)
                window.location.href = `/main/info?sn_id=${res.data.id}&goods_id=${currentGoodsId}&info_id=${currentInfoId}`
            }
        })
    })
    
}


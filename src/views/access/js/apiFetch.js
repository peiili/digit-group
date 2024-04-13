function Api (){
    this.baseUrl = 'http://127.0.0.1:5166'
}
Api.prototype.apiFetch = function (url, method = 'GET', data = null, headers = {}) {  
    // 设置默认请求头  
    const defaultHeaders = {  
        'Content-Type': 'application/json',  
    };  
  
    // 合并默认请求头和自定义请求头  
    const requestHeaders = { ...defaultHeaders, ...headers };  
  
    // 创建一个请求选项对象  
    const options = {  
        method, // 请求方法：GET, POST, PUT等  
        headers: requestHeaders, // 请求头  
        // credentials: 'include', // 包含跨站凭证  
    };  
  
    // 如果需要发送数据（POST或PUT请求），则将其转换为JSON格式  
    if (data) {  
        options.body = JSON.stringify(data);  
    }  
  
    // 发送fetch请求  
    return fetch(this.baseUrl+url, options)  
        .then(response => {  
            // 检查响应状态是否成功（200-299）  
            if (!response.ok) {  
                throw new Error(`HTTP error! status: ${response.status}`);  
            }  
            // 解析JSON数据  
            return response.json();  
        })  
        .catch(error => {  
            console.error('Fetch error:', error);  
            throw error;  
        });  
}

Api.prototype.toUrlSearchParams = function (obj) {  
    const params = new URLSearchParams();  
    for (const key in obj) {  
        if (obj.hasOwnProperty(key)) {  
            const value = obj[key];  
            if (value !== undefined && value !== null) {  
                params.append(key, value);  
            }  
        }  
    }  
    return params.toString();  
}

Api.prototype.get = function (url) {
    return this.apiFetch(url)
}

Api.prototype.post = function (url, data) {
    return this.apiFetch(url, 'POST', data)
}

Api.prototype.put = function (url, data) {
    return this.apiFetch(url, 'PUT', data)  
}

Api.prototype.del = function(url, data) {
    return this.apiFetch(url, 'DELETE')  
}
var api = new Api()

window.apiFetch = api
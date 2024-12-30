export function initRoute() {
  // 定义路由及其相应内容  
  const routes = {  
    home: {  
        template: `<h2>首页</h2><p>这是首页内容。</p>`  
    },  
    about: {  
        template: `<h2>关于</h2><p>这是关于页面的内容。</p>`  
    },  
    contact: {  
        template: `<h2>联系</h2><p>这是联系页面的内容。</p>`  
    },  
  };  
   
  /**
   * 渲染页面内容
   * @param {string} route 
   */
  function renderPage(route) {  
    const contentDiv = document.getElementById('#app');  
    const page = routes[route] ? routes[route].template : `<h2>404</h2><p>未找到页面。</p>`;  
    contentDiv.innerHTML = page;  
  }  
  
  // 路由处理  
  function routeHandler() {  
    const hashPrefixNum = 1;
    const hash = window.location.hash.slice(hashPrefixNum);
    renderPage(hash ? hash : 'home');
  }  
  
  // 监听哈希变化  
  window.addEventListener('hashchange', routeHandler);  
  window.addEventListener('load', routeHandler);
}
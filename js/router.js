// 动态路由处理
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    
    // 优先检查是否是www开头的路径，如果是则自动重定向
    if (path.startsWith('/www/')) {
        // 删除www前缀并重定向
        const newPath = path.replace('/www/', '/');
        const newUrl = window.location.origin + newPath + window.location.search + window.location.hash;
        window.location.replace(newUrl);
        return;
    }
    
    // 检查是否是博客文章路径
    if (path.startsWith('/blog/')) {
        const articleName = path.replace('/blog/', '');
        if (articleName && articleName !== '') {
            // 重定向到博客页面并传递文章名称
            const newUrl = `/createIdea.html?title=${encodeURIComponent(articleName)}`;
            window.location.href = newUrl;
        } else {
            // 重定向到博客列表
            window.location.href = '/createIdea.html';
        }
    } else if (path === '/blog' || path === '/blog/') {
        // 重定向到博客列表
        window.location.href = '/createIdea.html';
    }
}); 
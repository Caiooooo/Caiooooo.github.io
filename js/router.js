// 动态路由处理
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    
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
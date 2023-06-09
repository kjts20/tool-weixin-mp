import { httpServer, setRoutes, setTabBar } from '@kjts20/tool-weixin-mp';
import { host } from '../config/env';

// 扩展页面
import './extend/extend-page';
// 扩展组件
import './extend/extend-component';
// 兼容方法
import './extend/polyfill';
// tabbar加载
import { tabBar } from '@/config/tabbar';
// 路由加载
import { routes } from '@/config/route';
// 消息加载
import { startSystemMesssage, stopSystemMessage } from './tools/systemMessage';

/**
 * 启动系统（在app之前进行初始化）
 */
export const startApp = function () {
    // 初始化请求
    httpServer.host = host;
    // 初始化路由与tabbar
    setRoutes(routes);
    setTabBar(tabBar);
    // 启动系统消息获取
    startSystemMesssage();
};

/**
 * 在App中的onHide钩子中运行
 */
export const hideApp = function () {
    // 停止消息获取
    stopSystemMessage();
};

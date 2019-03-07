/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1551422558440_4947';

  // add your middleware config here
  config.middleware = ['graphql'];

  // add your user config here
  const userConfig = {

    security: {
        csrf: {
            enable: false
        }
    },

    graphql: {
      router: '/graphql',
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
      graphiql: true,
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};

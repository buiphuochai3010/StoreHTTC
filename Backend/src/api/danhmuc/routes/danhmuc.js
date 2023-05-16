'use strict';

/**
 * danhmuc router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::danhmuc.danhmuc')

// const defaultRouter = createCoreRouter('api::danhmuc.danhmuc')
// const customRouter = (innerRouter, extraRoutes = []) => {
//     let routes;
//     return {
//         get prefix() {
//             return innerRouter.prefix;
//         },
//         get routes() {
//             if (!routes) routes = innerRouter.routes.concat(extraRoutes);
//             return routes;
//         },
//     };
// };

// const myExtraRoutes = [
//     {
//         method: 'GET',
//         path: '/danhmucs/detail',
//         handler: 'danhmuc.findDetail',
//     },
// ];

// module.exports = customRouter(defaultRouter, myExtraRoutes);
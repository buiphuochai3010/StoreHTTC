'use strict';

/**
 * danhmuc router
 */

module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/danhmucs/detail',
            handler: 'danhmuc.findDetail',
        },
    ]
}
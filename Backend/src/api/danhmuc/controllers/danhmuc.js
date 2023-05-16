'use strict';

/**
 * danhmuc controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::danhmuc.danhmuc', ({ strapi }) => ({
    async findDetail(ctx) {
        const query = strapi.db.query('api::danhmuc.danhmuc')
        try {
            const data = await query.findWithCount({
                select: ['TenDM'],
                populate: { theloai: true },
            })
            ctx.body = data
        } catch (e) {
            ctx.body = e
        }
    },
}));


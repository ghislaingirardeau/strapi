'use strict';

/**
 * starter controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::starter.starter');

'use strict';

/**
 * starter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::starter.starter');

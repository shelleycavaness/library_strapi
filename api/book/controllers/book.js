'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require("strapi-utils");
module.exports = {
  async findByAuthor(ctx) {
    let entities;
    console.log('ctx', ctx)
    // return ctx
    
      entities = await strapi.services.book.findByAuthor(ctx.params.id);
  //  return "bonjour"
    return entities
  },
};

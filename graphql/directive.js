
const { mapSchema, getDirective, MapperKind } = require('@graphql-tools/utils');
const { defaultFieldResolver } = require('graphql');
const { AuthenticationError } = require('apollo-server-koa')

function upperDirectiveTransformer(schema, directiveName) {
    return mapSchema(schema, {
  
      // Executes once for each object field in the schema
      [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
  
        // Check whether this field has the specified directive
          const upperDirective = getDirective(schema, fieldConfig, directiveName)?.[0];
        if (upperDirective) {
          // Get this field's original resolver
          const { resolve = defaultFieldResolver } = fieldConfig;
  
          // Replace the original resolver with a function that *first* calls
          // the original resolver, then converts its result to upper case
          fieldConfig.resolve = async function (source, args, context, info) {
            const result = await resolve(source, args, context, info);
            if (typeof result === 'string') {
              return result.toUpperCase();
            }
            return result;
          }
          return fieldConfig;
        }
      }
    });
}
  
function authDirectiveTransformer (schema, directiveName) {
    return mapSchema(schema, {
  
      // Executes once for each object field in the schema
      [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
  
        // Check whether this field has the specified directive
          const authDirective = getDirective(schema, fieldConfig, directiveName)?.[0];
        if (authDirective) {
          // Get this field's original resolver
          const { resolve = defaultFieldResolver } = fieldConfig;
  
          // Replace the original resolver with a function that *first* calls
          // the original resolver, then converts its result to upper case
          fieldConfig.resolve = async function (source, args, context, info) {
            const user = context.session.userId || null;
            if (!user) {
                throw new AuthenticationError(`You are not logged in`);
            }
            const result = await resolve(source, args, context, info);
            return result;
          }
          return fieldConfig;
        }
      }
    });
}

module.exports = {
  upperDirectiveTransformer,
  authDirectiveTransformer
}
  
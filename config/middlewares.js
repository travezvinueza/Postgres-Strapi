// config/middlewares.js
module.exports = ({ env }) => [
  'strapi::errors',
  {
      name: 'strapi::security',
      config: {
          contentSecurityPolicy: {
              useDefaults: true,
              directives: {
                  'connect-src': ["'self'", 'https:'],
                  'img-src': ["'self'", 'data:', 'blob:', 'embed.api.video', 'cdn.api.video/vod/'],
                  'frame-src': ["'self'", 'data:', 'blob:', 'embed.api.video'],
                  upgradeInsecureRequests: null,
              },
          },
      },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
]

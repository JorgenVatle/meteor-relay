Package.describe({
  name: 'jorgenvatle:relay',
  version: '1.1.1',
  // Brief, one-line summary of the package.
  summary: 'A Meteor v3 compatible fork of zodern:relay',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/zodern/meteor-relay.git#release',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['3.0']);
  api.use('typescript');
  api.use('ddp-rate-limiter');
  api.use('zodern:types@1.0.9');
  api.mainModule('server-main.ts', 'server');
  api.mainModule('client-main.ts', 'client');
});


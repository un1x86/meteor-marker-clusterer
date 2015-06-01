Package.describe({
  name: 'oakworks:marker-clusterer',
  version: '0.0.1',
  summary: 'A marker clustering library for the Google Maps JavaScript API v3, packaged for Meteor',
  git: 'https://github.com/oakworks/meteor-marker-clusterer',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('lib/js-marker-clusterer/src/markerclusterer_compiled.js', 'client');
});

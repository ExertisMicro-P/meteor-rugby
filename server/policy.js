BrowserPolicy.framing.disallow();
BrowserPolicy.content.disallowInlineScripts();
BrowserPolicy.content.disallowEval();
BrowserPolicy.content.allowInlineStyles();
BrowserPolicy.content.allowFontDataUrl();

var trusted = [
  '*.google-analytics.com',
  'fonts.googleapis.com',
  'fonts.gstatic.com'
  //'*.mxpnl.com',
  //'*.zendesk.com'
];

_.each(trusted, function(origin) {
  origin = "http://" + origin;
  BrowserPolicy.content.allowOriginForAll(origin);
  origin_s = "https://" + origin;
  BrowserPolicy.content.allowOriginForAll(origin_s);
});


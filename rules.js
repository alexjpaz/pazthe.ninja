const fs = require('fs');

let model = {
  "IndexDocument": {
    "Suffix": "index.html"
  },
  "RoutingRules": []
};

function addhttpsredirect(prefix, hostname, path) {
  model.RoutingRules.push({
    "Condition": {
      "KeyPrefixEquals": prefix
    },
    "Redirect": {
      "HostName": hostname,
      "HttpRedirectCode": "307",
      "Protocol": "https",
      "ReplaceKeyWith": path
    }
  });
}

addhttpsredirect('docs', 'github.move.com', '/ProSoft/controllo/tree/gh-pages/docs');

console.log(JSON.stringify(model, null, 2));

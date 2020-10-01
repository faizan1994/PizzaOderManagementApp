var jsonConcat = require('json-concat');
jsonConcat({
src: "api/db",
dest: "api/db.json",
}, function(json){
console.log(json);
});
const fs = require('fs');
const path = require('path');

module.exports = {
    render: render
}

function render(template, params, callback) {
    if(typeof params === "function"){
        callback = params;
        params = {};
    }
    fs.readFile(path.join('view', 'templates',template), function(data, err){
        if(err) return callback(err);
        callback(err, data);
    });
}
const fs = require('fs'),
    httpStatus = require('http-status-codes'),
    contentTypes = require('./content-types');

module.exports = {
    getFile: (file, res) => {
        fs.readFile(`./${file}`, (error, data) => {
            if(error){
                res.writeHead(httpStatus.NOT_FOUND, contentTypes.html);
                res.end("error");
            }
            res.end(data);
        });
    }
};
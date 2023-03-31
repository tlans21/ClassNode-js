const fs = require('fs'),
    httpStatus = require('http-status-codes'),
    contentTypes = require('./content-types');

module.exports = {
    getFile: (file, res) => {
        fs.readFile(`./${file}`, (error, data) => {
            if(error){
                res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html);
                res.end("에러");
            }
            res.end(data);
        });
    }
};
const EventEmitter = require('events').EventEmitter;
const http = require('http');
const https = require('https');
const util = require('util');

/**
 * An Event emitter to get a treehouse student profile
 * 
 * @param username
 * @constructor
 */
function Profile (username) {
	EventEmitter.call(this);
	const profileEmitter = this;
  
	const url = `https://teamtreehouse.com/${username}.json`;
	const request = https.get(url, (res) => {
		let body = '';

		// check for non-successful request
		if (res.statusCode !== 200) {
			request.abort();
			profileEmitter.emit('error', new Error(`There was an error getting profile for ${username}. (${http.STATUS_CODES[res.statusCode]})`));
		}
    
		// read and get response data
		res.on('data', (chunkData) => {
			body += chunkData;
			profileEmitter.emit('data', chunkData);
		});
    
		res.on('end', () => {

			if(res.statusCode === 200) {
				// parse data from JSON to js object
				try{
					const profile = JSON.parse(body);
					profileEmitter.emit('end', profile);
				} catch(error){
					profileEmitter.emit('error', error);
				}
			}
		}).on('error', (error) => {
			profileEmitter.emit('error', error);
		});
	});
}

util.inherits(Profile, EventEmitter);
module.exports = Profile;
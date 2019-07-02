const Profile = require('./profile.js');
const renderer = require('./renderer.js');
const queryString = require('querystring');
const fs = require('fs');

// handle home route request
const home = (req, res) => {
	if (req.url === '/') {
		if(req.method.toLowerCase() === 'get') {
			res.writeHead(200, {
				'Content-Type': 'text/html',
			});
			renderer.view({templateName: 'header', res});
			renderer.view({templateName: 'search', res});
			renderer.view({templateName: 'footer', res});
			res.end();
		} else {
			req.on('data', (postBody) => {
				// get post body data
				let body = postBody.toString();
				// parse post body data from string to object
				const query = queryString.parse(body);
				// redirect to profile page
				// NOTE: the request is a POST and redirect as a GET to profile page
				res.writeHead(303, {'Location': `/${query.username}`});
				res.end();
			});
		}
	}
};

// handle user route
const user = (req, res) => {
	// get user profile name
  
	const username = !(req.url === '/favicon.ico') ? req.url.replace('/', '') : '';
	// Check if username exist
	if (username.length > 0) {
		// set response headers (e.g) content-type
		res.writeHead(200, {
			'Content-Type': 'text/html',
		});
    
		renderer.view({templateName: 'header', res});
    
		// create new instance of request object
		const studentProfile = new Profile(username);
		// bind end event to http object
		studentProfile.on('end', (profileJSON) => {
			// get values out of response data
			const values = {
				avatarUrl: profileJSON.gravatar_url,
				username: profileJSON.profile_name,
				badges: profileJSON.badges.length,
				javascriptPoints: profileJSON.points.JavaScript
			};
      
			renderer.view({templateName: 'profile', values, res});
			renderer.view({templateName: 'footer', res});
			res.end();
		});
    
		// bind error event to http object
		studentProfile.on('error', (error) => {
			const values = {
				errorMessage: error.message,
			};
      
			renderer.view({templateName: 'error', values, res });
			renderer.view({templateName: 'search', res});
			renderer.view({templateName: 'footer', res});
			res.end();
		});
	}
};

// handle css route
const css = (req, res) => {
	// check if current path is /css/style.css
	if ((req.url.indexOf('.css') !== -1) && (req.url.indexOf('.css'))) {
		const file = fs.readFileSync(`.${req.url}`, 'UTF-8');
		res.write(file);
		res.end();
	}
};

module.exports.home = home;
module.exports.user = user;
module.exports.css = css;

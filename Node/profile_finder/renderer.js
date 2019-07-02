const fs = require('fs');

const bindValues = (values, content) => {
	for (let key in values) {
		content = content.replace(`{{${key}}}`, values[key]);
	}

	return content;
};

/**
 * Generate html to the views
 * 
 * @param {object}   
 */
const view = ({templateName, values = {}, res}) => {
	const fileContents = fs.readFileSync(`./views/${templateName}.html`, 'UTF-8');
	res.write(bindValues(values, fileContents));
};

module.exports.view = view;
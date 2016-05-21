var mdcss   = require('mdcss');
var fs      = require('fs');
var path    = require('path');
var plugin  = require('./');
var test    = require('tape');

test('mdcss-theme-github', function (t) {
	t.plan(1);

	var message = 'Test mdcss GitHub';
	var options = { theme: plugin({ title: 'mdcss GitHub' }), destination: 'demo' };
	var warning = 0;
	var warningMsg = message + ' (# of warnings)';

	var inputPath  = path.resolve('assets/style.css');
	var inputCSS   = '';

	try {
		inputCSS = fs.readFileSync(inputPath,  'utf8');
	} catch (error) {
		fs.writeFileSync(inputPath, inputCSS);
	}

	mdcss.process(inputCSS, options).then(function (result) {
		t.equal(result.warnings().length, warning, warningMsg);
	});
});

var exec  = require('child_process').exec;
var chokidar = require('chokidar');

var watch = Object(require('./package').watch);

Object.keys(watch).forEach(function (script) {
	var tree = watch[script];

	chokidar.watch(tree, { ignoreInitial: true }).on('all', function () {
		exec('npm run ' + script, function (err, stdout) {
			if (!err) console.log(stdout);
		});
	});
});

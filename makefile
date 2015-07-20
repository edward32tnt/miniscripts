default:
	jsx public/javascripts/src public/javascripts/build
	browserify public/javascripts/build/clientapp.js | uglifyjs -cm > public/javascripts/bundle.js

watch:
	jsx --watch public/javascripts/src public/javascripts/build

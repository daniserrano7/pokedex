const glob = require('glob');
const Router = require('express').Router

const routes = (version) => (
    glob
    .sync('**/*.js', {cwd: `${__dirname}/`})
    .filter(filename => filename.startsWith(version))
    .map(file => {return require(`./${file}`)})
    .filter(router => Object.getPrototypeOf(router) == Router)
    .reduce((rootRouter, route) => rootRouter.use('/', route), Router())
)

module.exports = routes;
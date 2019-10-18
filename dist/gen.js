#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nunjucks_1 = require("nunjucks");
var fs_1 = require("fs");
var path_1 = require("path");
var yargs_1 = __importDefault(require("yargs"));
function render_vars(vars_file, template_path) {
    var versions = fs_1.readFileSync(vars_file, "utf-8");
    var template_str = fs_1.readFileSync(template_path, "utf-8");
    var rendered = nunjucks_1.renderString(template_str, JSON.parse(versions));
    return rendered;
}
var argv = yargs_1.default
    .usage("Usage: $0 -v vars.json -t tmpl_file")
    .demandOption(['v', 't'])
    .example('$0 -v vars.json -t docker-compose.njk', '')
    .option('var_file', {
    alias: 'v',
    type: 'string',
    describe: "var file",
}).option('tmpl_file', {
    alias: 't',
    type: 'string',
}).help().argv;
var var_file = path_1.resolve(argv.var_file);
var tmpl_file = path_1.resolve(argv.tmpl_file);
var str = render_vars(var_file, tmpl_file);
console.log(str);
//# sourceMappingURL=gen.js.map
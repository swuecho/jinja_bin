#!/usr/bin/env node

import { renderString } from "nunjucks";
import { readFileSync } from "fs";
import { resolve } from "path";
import yargs from "yargs";


function render_vars(vars_file: string, template_path: string): string {
    let versions = readFileSync(vars_file, "utf-8");
    let template_str = readFileSync(template_path, "utf-8");
    let rendered = renderString(template_str, JSON.parse(versions));
    return rendered
}

let argv = yargs
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
let var_file: string = resolve(argv.var_file as string)
let tmpl_file: string = resolve(argv.tmpl_file as string)

let str = render_vars(var_file, tmpl_file);

console.log(str);

# Install

    npm i @echowuhao/jinja_bin

## Usage

render jinja template based on vars 

```
Usage: jinja_bin -v vars.json -t tmpl_file

Options:
  --version        Show version number                  [boolean]
  --var_file, -v   var file                    [string] [required]
  --tmpl_file, -t                              [string] [required]
  --help           Show help                            [boolean]

Examples:
  jinja_bin -v vars.json -t docker-compose.njk
```

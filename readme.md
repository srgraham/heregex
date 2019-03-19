# heregex
ES6 tagged template to make regular expressions more easily readable.

Add comments using the `#` character prefixed with a space. All whitespace gets
removed (so use \s for actual whitespace matching). Any flags go in `${'gim'}`
at the end of the string.


## Examples
```js
heregex = require('heregex')

let regex_github_repo = heregex`
  ^                    # start of string
  (?:https?:\/\/)?     # optional http/https
  (?:www\.)?           # optional "www."
  github\.com          # website address
  \/
  ([a-z0-9_-]+)        # username ($1)
  \/
  ([a-z0-9_-]+)        # repo ($2)
  (?:\.git)?           # optional .git
  ${'i'}
`;
```

Which creates this end result:
```js
/^(?:https?:\/\/)?(?:www\.)?github\.com\/([a-z0-9_-]+)\/([a-z0-9_-]+)(?:\.git)?/i
```

The end result of that example is still readable, but if you're doing even
slightly more complex regular expressions, multiple lines with comments becomes
a lot easier to read:

```js
heregex = require('heregex')

let regex_number = heregex`
    ^0b[01]+                   # binary
  | ^0o[0-7]+                  # octal
  | ^0x[0-9a-f]+               # hex
  | ^\d*\.?\d+ (?:e[+-]?\d+)?  # decimal
  ${'i'}
`;
```

which compiles down to the harder to read version:
```js
/^0b[01]+|^0o[0-7]+|^0x[0-9a-f]+|^\d*\.?\d+(?:e[+-]?\d+)?/i
```

## Installation
```
npm install --save heregex
```
or
```
yarn add heregex
```

If you'd like to use it without requiring it everywhere, you can add it to the list of node globals:
```js
global.heregex = require('heregex');
```

## Questions

##### How do I make a literal `#`?
Get rid of any whitespace immediately preceding it. For heregex to consider
something a comment, it must have a space before the `#` or be the first
character on a new line. If you need the space or if its the first character on
a new line, escape it to `\#`. `\#` gets passed through directly as `\#`.
This is not an issue, since an escaped `#` is still `#`.

```js
let regex_basic_css_selector = heregex`
    ^\.([_a-z][_a-z0-9-]*)   # classname
  | ^#([_a-z][_a-z0-9-]*)    # id
  | ^([a-z0-9]+)             # type
  ${'i'}
`;
```
which evaluates to:
```js
/\.([_a-z][_a-z0-9-]*)|#([_a-z][_a-z0-9-]*)|([a-z0-9]+)/i
```



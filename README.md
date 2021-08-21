# kenify
 
 Somtimes you just need to randomly say "ken" and Kenify is a package that helps you to do exactly that! 
 Kenify randomly pushes "ken" to your string where there are spaces, in a random matter (50% chance for each space).

 use this module and get your string kenified today!

## How to install

 ```
npm install kenify
```

## How to use

 ```javascript
import kenify from 'kenify';
```

OR in node.js

 ```javascript
const kenify = require('kenify');
```

and then just pass your string to kenify as an argument

 ```javascript
const kenified = kenify("This sentence needs to be kenified right now"); // returns a kenified string
```

Optional outputs for the kenified string in the above example are:
 - This ken sentence needs ken to be kenified ken right now
 - This sentence ken needs to be ken kenified right now ken
 - This sentence ken needs to be kenified ken right ken now

**Notice:** kenify will never insert "ken" at the beginning of the sentence. its just not the way we roll.
### underscorejs
---
https://github.com/jashkenas/underscore


```
npm install underscore
meteor add underscore
require(["underscore"]...)
bower install underscore
component install jashkenas/underscore
```

```js
_.each([1, 2, 3], alert);
_.each({one: 1, two: 2, three: 3}, alert);

_.map([1, 2, 3], function(){ return num * 3; });
_.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
_.map([[1, 2], [3, 4]], _.first);

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);

var list = [[1, 2], [3, 4], [4, 5]];
var flat = _.reduceRight(list, function(a, b){ return a.concat(b); []});

var list = [[0, 1], [2, 3], [4, 5]];
var flat = _.reduceRight(list, function(a, b){ return a.concat(b); }, []);

var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });

var evens = _.filter([1, 2, 3, 4, 5], function(num){ return num % 2 == 0; });

_.findWhere(publishServicePulitzers, {newsroom: "The New York Times"});

_.where(listOfPlays, {author: "Shakespeare", year: 1611});

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });

_.every([2, 4, 5], function(num){ return num % 2 == 0; });

_.some([null, 0, 'yes', false]);

_.contains([1, 2, 3], 3);

_.invoke([[5, 1, 7], [3, 2,1]], 'sort');

var stooges = [{name: 'tky1', age: 40}, {name: 'tky2', age: 50}, {name: 'tky3', age: 60}];
_.pluck(stooges, 'name');

var stooges = [{name: 'tky1', age: 40}, {name: 'tky2', age: 50}, {name: 'tky3', age: 60}];
_.max(stooges, function(stooge){ return stooge.age; });

var numbers = [10, 5, 100, 2, 1000];
_.min(numbers);

_.sortBy([1, 2, 3, 4, 5, 6], function(){ return Math.sin(num); });

var stooges = [{name: 'tky1', age: 40}, {name: 'tky2', age: 50}, {name: 'tky3', aeg: 60}];
_.sortBy(stooges, 'name');

_.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); );

_.groupBy(['one', 'two', 'three'], 'length');
```

```
```



# percolate:paginated-subscription

This package is an experiment that adds pagination to Meteor's standard subscriptions. It's a byproduct of the [Telescope project](http://telesc.pe).

## Installation

Install via  [Meteorite](https://github.com/oortcloud/meteorite/):


``` sh
$ meteor add percolate:paginated-subscription
```

## Usage

This package makes available a single function `Meteor.subscribeWithPagination`. Like the built in `Meteor.subscribe`, it returns a handle, which should be used to keep track of the state of the subscription:

```js
var handle = Meteor.subscribeWithPagination('posts', {}, 10);
```

The arguments are as usual to `Meteor.subscribe`, with an exception:

1. The last argument must be a number, indicating the number of documents per page.
This can be followed by callback functions in style of `Meteor.subscribe`.

The paginated subscription expects you to have a publication setup, as normal, which expects as a final argument the *current* number of documents to display (which will be incremented, in a infinite scroll fashion):

```js
Meteor.publish('posts', function(limit, filter) {
  return Posts.find({filter}, {limit: limit});
});
```

The important part of all this is the `handle`, which has the following API:

 - `handle.loaded()` - how many documents are currently loaded via the sub
 - `handle.limit()` - how many have we asked for
 - `handle.filter()` - filter currently applied
 - `handle.loadNextPage()` - fetch the next page of results
 - `handle.loadPreviousPage()` - fetch the previous page of results
 - `handle.filterPage()` - apply specific filter

The first three functions are reactive and thus can be used to correctly display an 'infinite-scroll' like list of results.


## License

MIT. (c) Percolate Studio, maintained by Tom Coleman (@tmeasday).

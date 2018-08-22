Package.describe({
  name: 'senad1946:paginated-subscription',
  summary: "Easily paginate a subscription that takes a limit parameter.",
  version: "0.3.1",
  git: "https://github.com/SenadZaimovic/paginated-subscription"
});

Package.onUse(function(api, where) {
  api.versionsFrom("METEOR@0.9.0");
  api.addFiles('paginated_subscription.js', 'client');
});

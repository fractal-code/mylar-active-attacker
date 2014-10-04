Package.describe({
  summary: "Provide security against active attacker"
});

Package.onUse(function (api) {
    api.addFiles('active.js', ['client', 'server']);

    api.export("MYLAR_ACTIVE_ATTACKER");
});

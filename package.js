Package.describe({
    summary: "Provide security against active attacker",
    name: "mylar:active-attacker",
    git: "https://github.com/gliesesoftware/mylar-active-attacker.git"
});

Package.onUse(function (api) {
    api.addFiles('active.js', ['client', 'server']);

    api.export("MYLAR_ACTIVE_ATTACKER");
});

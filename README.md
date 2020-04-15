## @grundstein/hosts

### WIP. NOT IN PRODUCTION, TESTED AND/OR BENCHMARKED YET!

### grundstein host list

### features:

#### central config "database"

this library exports a list of all active hosts
for the grundstein instance at [grundstein.it](https://grundstein.it).

#### installation

if you forked this repository, your file will not be published to npm.

to install from git using npm, the following pattern can be used.

please not that your git username (grundstein) will be different.

do not rename this library in the package.json,
grundstein/legung will import @grundstein/hosts to get the config.

```bash
npm i github:grundstein/hosts
```

#### usage

this library should never be used standalone,
instead [grundstein/legung](https://docs.grundstein.it/legung).

#### your own server

to get your own grundstein settings,
fork this repository and then adapt the settings to your liking.

leave the name in the package.json file as it is, this will be used to import it in
the [@grundstein/legung](https://docs.grundstein.it/grundsteinlegung) when setting up your server.

once your config is done and set up,
head to the [grundstein/legung git](https://github.com/grundstein/legung),
fork the repository and follow the instructions in the readme.

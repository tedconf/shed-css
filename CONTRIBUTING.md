## For maintaniers

### Publishing a new release

[Note: you must be a member of the [`tedconf`](https://www.npmjs.com/org/tedconf) org to publish to npm]

* `npm version $TYPE -m "message about this version"` where $TYPE indicates the semver release type, eg. `patch`, `major` or `minor`. see the [npm-version docs](https://docs.npmjs.com/cli/version) and [semver docs](http://semver.org/) if you're not sure which applies.
* `npm publish`
* `git push --tags`
* update the [changelog](https://github.com/tedconf/shed-css/blob/master/CHANGELOG.md)

### Updating the github pages docs site

* `npm run push_pages`

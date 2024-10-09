# OpenTiny documentation
This project maintains the documentation for OpenTiny, originally forked from the [TinyMCE documentation](https://www.tiny.cloud/docs).

This project is built using [Antora](https://antora.org/).

## License

Since this repository is based on the TinyMCE documentation, please adhere to the terms of the original TinyMCE documentation license when contributing or redistributing. Any significant modifications should include a reference to the original repository (https://github.com/tinymce/tinymce-docs).

## Contributing to the OpenTiny Documentation

If you would like to contribute to the OpenTiny project please read the OpenTiny Documentation Contributor’s Guide at:

- [GitHub - How to contribute to OpenTiny’s documentation](https://github.com/mild-blue/opentiny-docs/blob/release/docs-6/CONTRIBUTING.md#how-to-contribute-to-opentinys-documentation).

## Working on OpenTiny documentation

### Compiling or building the documentation

The following procedure assists with building (or compiling) the documentation locally. Tiny recommends testing and reviewing changes locally prior to submitting a pull request.

#### First time set up

Once you have installed any missing prerequisites, in a terminal or on a command prompt:

1. Clone the git repository:
    ```
    git clone git@github.com:mild-blue/opentiny-docs.git
    ```

2. Change directory into the cloned git repository:
    ```
    cd opentiny-docs
    ```

3. Run yarn install
    ```
    yarn install
    ```

#### Run the development version of the documentation

To create a development version of the documentation, run:

```
yarn build
yarn serve
```


To view the documentation; in a web browser, navigate to [http://127.0.0.1:4000](http://127.0.0.1:4000).

> **Note**: The development version of the documentation will update automatically when you save changes locally.

The `yarn build` step will download the latest OpenTiny package and generate new API reference content from source code. To change the version of OpenTiny API, open the `-scripts/api-reference.sh` file and edit the API_VERSION to the OpenTiny version you would like to generate API docs for.  Alternatively, to build using a local version of OpenTiny, `yarn build-local ../path/to/local/OpenTiny`.

> **Note**: The development server does not need to be stopped prior to running the `yarn build` command, antora should pick up the new changes generated by the build step.

#### OpenTiny API documentation

The OpenTiny API documentation is maintained within the [OpenTiny project repository](https://github.com/mild-blue/opentiny) and compiled for the documentation site using [MoxieDoc](https://github.com/tinymce/moxiedoc).

To update the published API documentation:

1. Change the version in `.api-version`.
2. Run `yarn build`.
3. Commit the changes.

Running `yarn build` downloads the OpenTiny package specified in `.api-version` and generates new API reference content from source.

**Note:** The API documentation should never be edited manually.

##### Prerequisites

- [Node.js](https://nodejs.org/en/).


### Live Demos

New live demos can be added to the [modules/ROOT/examples/live-demos directory](modules/ROOT/examples/live-demos). It then can be referenced in your doc with the following code:

```
  liveDemo::{sub-directory-name}[]
```

#### Overriding the tinymce URL in live demos

All live demos usually get their `tinymce.min.js` URL from the `tinymce_live_demo_url` setting in the `antora.yml` file.
However, there are some instances where you wish to override this, e.g.

 - You want to push/deploy a branch for a new feature that's only on the 'dev' channel.
 - You want to run the site locally, but test out the live demos in a different channel.

To help with this, there are two mechanisms for overriding the `tinymce.min.js` URL.

 1. Change the URL for all live demos by setting the `tinymce_live_demo_url` attribute in `antora-playbook-dev.yml`. For example:
    ```
      asciidoc
        attributes:
          tinymce_live_demo_url: URL_to_script_file
    ```

 2. Change the URL for an individual live demo by setting `script_url_override` attribute in the live demo markup. For example:
    ```
      liveDemo::{sub-directory-name}[script_url_override='URL_to_script_file']
    ```

    - This is useful if you want to deploy the develop branch for a feature only in the 'dev' channel.
    - This only overrides the URL for one live demo.
    - Don't use this in more than one live demo on a page.
    - Don't use this long-term - when the feature is fully rolled-out, use the standard channel.

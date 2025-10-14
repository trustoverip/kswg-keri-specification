# Editing the Specification

To contribute changes to the specification, please 

- Review the [Contributions policy](CONTRIBUTING.md) for this specification and ensure that you and your organization are willing to abide by the policy.
  - **Pull requests submitted to this repository imply acceptance of the [Contributions policy](CONTRIBUTING.md).**

- Submit a pull request by:
  - forking this repo
  - editing the appropriate markdown files in the [`/spec`](/spec) folder

The specification source consists of the markdown files listed in
[specs.json](/specs.json) and found in the [`/spec`](/spec) folder and the [`/spec/terms-definitions`](/spec/terms-definitions) subfolder. The
specification is automatically rendered (using
[Spec-Up-T](https://github.com/trustoverip/spec-up-t)) to the `/docs`
 folder of the current branch of your choice of this repository. 

Currently the locally generated `index.html` has to be push to a branch and GitHub user account of your choice to then offer a PR to the `main` branch.  The spec is published (using GitHub Pages) on the basis of `main` branch and the `index.html` in the `/docs` folder of this repository.

## Testing your Edits Locally

Full guidance for using Spec-Up is in its
[repository](https://github.com/trustoverip/spec-up-t)and in its [User Guide](https://trustoverip.github.io/spec-up-t-website/docs/getting-started/intro).

The short version of the instructions to render this specification locally while you are
editing is:

- Install the prerequisites: `node` and `npm`
- Run `npm install` from the root of the repository
- Run `npm install spec-up-t` from the root of the repository

- Run `npm run menu` from the root of the repository to perform various actions on the document with live updates to the `docs/index.html` as you edit the source files.

- Open the rendered file in a browser and refresh to see your updates as you work.
- When you are done, hit `Ctrl-c` to exit the live rendering.

Please check your edits locally before you submit a pull request! The `docs/index.html` will be included in your pull request (currently NOT .gitignore'd).

### Beware:

The user guide of Spec-Up-T is leading: [Local installation](https://trustoverip.github.io/spec-up-t-website/docs/getting-started/local-installation/installation)

### Soon to be implemented:

On each pull request merge (using a GitHub Action), and then published (using GitHub Pages) in the `gh-pages` branch of this repository.

#### Handling the Rendered Specification File

Future working: When you create a pull request to update the specification, the `docs/index.html` will be
.gitignore'd and **not** included in your pull request. A GitHub Action triggered on merging pull requests automagically renders the full
specification (`docs/index.html`) to the `gh-pages` branch in the repository and the
specification is published (via GitHub Pages) from there.

## Adding a New Source Markdown File

If you add a source markdown file to the specification, you must also add a reference
to it in the [specs.json](/specs.json) in the root of the repository.

If you add a source markdown file to the `terms-definitions` folder, at generation time a the markdown file will be automatically included in the "Terms definitions" section of the specification. Use at least one of the dedicated tags `[[DEF]]` or `[[TREF]]` in each atomic Markdown file; i.e. one file per term definition.

You must specify the configuration details in the [specs.json](/specs.json) in the root of the repository.
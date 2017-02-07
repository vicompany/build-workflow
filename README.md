# Build Workflow

This repository is to research different build workflows for VI Company.

Although the focus of this repository is mainly different JavaScript bundlers, other tasks, such as compilation/optimisation of styles and images, should also be taken into consideration when comparing the different tools.

Our main concerns are:

- Task readability and maintainability
- Task scalability
- Output size
- Performance (speed of compiling/optimising)

## Tools

First, we need a tool to define tasks. We have been using Grunt in the past, but we are willing to move on. Options are:

- gulp
- npm scripts

Secondly, we need to pick tools used in the tasks. Tasks like compiling Sass and optimising images are straightforward. The main focus is building JavaScript bundles.

- [x] npm scripts
  - [x] browserify
  - [x] rollup
  - [x] webpack
- [x] gulp
  - [x] browserify
  - [x] rollup
  - [ ] ~~webpack~~ (running webpack via a task runner seems overkill)

## Usage

Run `npm run build` to execute _all_ tasks.

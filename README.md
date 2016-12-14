# Build Workflow

This repository is to research different build workflows for VI Company.

Although the focus of this repository is mainly different JavaScript bundlers, other tasks, such as compilation/optimisation of styles and images, should also be taken into consideration when comparing the different tools.

Our main concerns are:

- Task readability and maintainability
- Task scalability
- Bundle size
- Performance (speed of compiling/optimising)

## Tools

Below are the tools and combinations we wish to test. All of the following combinations should also transpile using Babel, and minify using Uglify. 

- [x] gulp + browserify
- [ ] gulp + webpack
- [ ] npm + browserify
- [x] npm + rollup
- [ ] npm + webpack

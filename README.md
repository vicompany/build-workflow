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

## Conclusion

All ratings are on a 1-3 scale.

### npm scripts

Although npm scripts are easy to use, we should be cautious with them. Piping several commands with a handful of arguments quickly gets messy and difficult to interpret.

|             | Rating |
|-------------|--------|
| Readability | 1      |
| Scalability | 2      |
| Performance | 3      |
| Total       | 6      |

### Gulp

Gulp proved to be easy to use, easy to scale and it performs quite well.

|             | Rating |
|-------------|--------|
| Readability | 3      |
| Scalability | 3      |
| Performance | 3      |
| Total       | 9      |

### Browserify

Browserify stood the test of time, but transforms/plugins aren't always up-to-date.

|             | Rating               |
|-------------|----------------------|
| Readability | 2                    |
| Scalability | 2                    |
| Output size | 2 (14.739kb gzipped) |
| Performance | 2 (2.968449457s)     |
| Total       | 8                    |

### Rollup

Rollup is a good script bundler. It is not very convenient if you want to export multiple bundles.

|             | Rating               |
|-------------|----------------------|
| Readability | 2                    |
| Scalability | 3                    |
| Output size | 3 (13.465kb gzipped) |
| Performance | 2 (3.253960194s)     |
| Total       | 10                   |

### WebPack

WebPack is a great tool for bundling scripts. Not so great for other assets.

|             | Rating               |
|-------------|----------------------|
| Readability | 2                    |
| Scalability | 2                    |
| Output size | 2 (14.412kb gzipped) |
| Performance | 3 (2.951653554s)     |
| Total       | 9                    |

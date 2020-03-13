# About This Project

This repository holds the source code of the official website for the Luxembourg Tech School (LTS). Build using [Jekyll](https://jekyllrb.com), [Bootstrap 3](http://getbootstrap.com) and hosted on [GitHub Pages](https://pages.github.com).


&copy; 2016 Luxembourg Tech School.

## Run locally

Using Docker:

    docker run --rm --volume="$PWD:/srv/jekyll" -p 4000:4000 -it jekyll/minimal jekyll serve
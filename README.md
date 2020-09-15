# About This Project

The official website of the Luxembourg Tech School (LTS). \
Built using [Jekyll](https://jekyllrb.com) and [Bootstrap 3](http://getbootstrap.com).\
Hosted on [GitHub Pages](https://pages.github.com).

&copy; 2016-2020 Luxembourg Tech School.

## Run locally

### Docker on Linux/OSX

```bash
docker run --rm --volume="$PWD:/srv/jekyll" -p 4000:4000 -it jekyll/minimal jekyll serve
```

### Docker on Windows

```powershell
docker run --rm --volume="${PWD}:/srv/jekyll" -p 4000:4000 -it jekyll/minimal jekyll serve
```

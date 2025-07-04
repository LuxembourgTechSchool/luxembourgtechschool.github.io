# About This Project

The official website of the Luxembourg Tech School (LTS).
Built using [Jekyll](https://jekyllrb.com).

Hosted on [GitHub Pages](https://pages.github.com).

&copy; 2023 Luxembourg Tech School.

## Run locally

### Docker on Linux/OSX

```bash
docker run --rm --volume="$PWD:/srv/jekyll" -p 4000:4000 -it jekyll/minimal jekyll serve
```

If you get errors on Apple Silicon, try this:

```bash
docker run --platform linux/amd64 --rm --volume="$PWD:/srv/jekyll" -p 4000:4000 -it jekyll/minimal /bin/bash -c "gem install webrick && jekyll serve --livereload"
```

### Docker on Windows

```powershell
docker run --rm --volume="${PWD}:/srv/jekyll" -p 4000:4000 -it jekyll/minimal jekyll serve
```
<br>

***

## CSS / SASS

The SASS was based on Bulma. **Although** it was modified and adapted to the design and **should not** be updated anymore.

### A few new classes were added:

- ### Main Title
>```title title--main``` ( should be used on ```h1```): will create the big title that should be used for the main title of a page

- ### Title
>```title```: can be used for all the section headings

>```title title--white```: will change the title color to white

- ### Subtitle
>```subtitle``` (should be used on ```h2```): will create the gray descriptive text under the main title

- ### List
>```list``` (should be used on ```ul```): will create the special list type visible on **Program**

> ```list list--big```: can be used to create the huge list visible on **Home**

## Some components were modified:

- ### Buttons
The button component has been simplified to only allow the buttons that were planned in the design and can be used like so:
>```button ```: will create the standard button, it appears black and goes blue on hover

>```button button--blue```: adding button--blue will slightly change the shape and invert the colors

>```button button--big```: will make the button huge; can be combined with button--blue

### All in all, the recommendation is to look at already created pages and use the classes similarly.

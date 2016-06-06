# My Online Resume

### Resume

[http://coderfee.me](http://coderfee.me)

Get data from a `resume.json` and generate the static web page. Deploy to GitHub Pages. Written with Gulp, SCSS, PostCSS and Jade.

### Build

1. Clone the repo to your computer

   ```sh
   $ git clone https://github.com/coderfe/resume.git
   ```

2. Install dependencies

   ```shell
   $ npm install
   ```

3. Fill your information in `data/resume.json`

4. Generate static page `index.html`

   ```shell
   $ gulp
   ```

5. Test your webpage hosted locally at `http://localhost:3000`

### Deploy to GitHub Pages

1. Remove my `origin remote` and add your `origin remote`

   ```sh
   $ git remote remove origin gh-pages
   $ git remote add origin git@github.com:you/resume.git
   ```

2. Deploy, make sure you have removed my infomation in `data/resume.json`

   ```sh
   $ git add .
   $ git commit -m 'first commit'
   $ git push -u origin gh-pages
   ```

3. Visit [http://yourname.github.io/resume](http://yourname.github.io/resume)

#### The informations you must to delete or replace before you deploy

1. Replace my **informations** to **yours** in `data/resume.json`
2. Repalce **domain** in `CNAME` or delete `CNAME` if you don't need it
3. Relpace contents of `download` folder to yours

### Develop

1. Run `gulp`, then open `http://localhost:3000`
2. Development

### TODO

- [ x ] Update resume.pdf
- [ x ] Update readme
- [ ] Imporve details
- [ ] Mobile experience

### LICENSE

(MIT License)

Copyright (c) 2015 coderfee

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
# react-hot-reloading-with-ssr


React Sample Boilerplate for SSR and Hot Reloading
This boilerplate contains Server side rendering with hot reloading enabled
Edit some text in [src/components/Sample.js](https://github.com/john1jan/react-hot-reloading-with-ssr/blob/master/src/components/Sample.js)


Thanks to [Glen Mailer](https://github.com/glenjamin) for [helping](https://github.com/glenjamin/webpack-hot-middleware/issues/147) me out for setting up this.

I use Glen's [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) which is a awesome middlewear for enabling hot reloading 
who use server side rendering


<div>
    <h1>React Sample Boilerplate for SSR and Hot Reloading</h1>
    <h4>This boilerplate contains Server side rendering with hot reloading enabled</h4>
    <div> Edit some text in src/components/Sample.js</div>
    <div>There are two routes <a href="http://localhost:3001/ssr">SSR Page</a> and <a href="http://localhost:3001/normal" >Normal Page</a>
        <p>- SSR - This Page is rendered from server using express and renderToString and markup is embedded in client. You can viewpage source of this
page and check the markup </p>
        <p>- Normal - This page is not having any SSR enabled. So it loads as normal reaact page. You compare the page source of this page and ssr
page</p>
    </div>
</div>


Usage
======

npm install


npm run dev  - for running dev server

npm start    - for running production server


Open  http://localhost:3001/   for opening the page.





## Table of Contents

- [View my project](#view-my-project)
- [Course in Webdevelopment](#course-in-webdevelopment)
  - [Learning objectives](#learning-objectives)
  - [Course program](#course-program)
- [Technologies used](#technologies-used)
  - [React](#react)
  - [Nivo](#nivo)
  - [Firebase](#firebase)
  - [REST API](#rest-api)
  - [CSS Flexbox](#css-flexbox)
- [Next steps](#next-steps)
- [Get in touch](#get-in-touch)

## View my project

Check out my [GitHub Pages](https://sarakinell.github.io/thevisproject/) and tick the `Home` button to get started. You may enter the different blog posts by clicking on their interactive graphics. The navigation helps you to find the `Home` page (also via the logo in the top left corner), the `Blog` page (where all posts are listed), and the `About` page with general information as well as a contact form at the very bottom. Thank you for your time in browsing through my very first website project!

## Course in Webdevelopment

Since the course in [Web Engineering](https://globis.ethz.ch/#!/course/web-engineering-2017/) at ETH Zürich after Spring 2017 no longer takes place, I was delighted to find the course in [Webentwicklung für Datenjournalisten](https://lms.uzh.ch/olat/dmz/) at the University of Zürich.

This hands-on, project-based course is centered around the challenge of creating a **responsive website with interactive graphics**. Nowadays, it is certainly important with responsiveness, due to the increasingly large usage of mobile devices and all kinds of screen sizes, but _also_ because of Search Engine Optimization and the decreased chances of being [found on the world wide web](https://moz.com/blog/mobile-first-indexing-seo) when not providing an adaptive website.

### Learning objectives

- Master the foundations of webdevelopment
- Fetch data from a database
- Display data from a database on a webpage
- Learn webdevelopment through independent practise and information gathering


#### Additional objectives

- Use Open Source
- Create a website with Home, Blog and About pages
- Make the blog dynamic by using a database


### Course program

1.  Introduction
2.  HTML
3.  Advanced HTML
4.  CSS & Responsive Layout
5.  CSS Bootstrap
6.  PHP
7.  PHP/SQL
8.  Wordpress
9.  Javascript & JSON
10. D3
11. Interactive Charts
12. Responsive D3


## Technologies used

I focused on using technologies that would fulfil the project purpose of creating a responsive website with interactive graphics. All are based on the different components treated as part of the [course program](#course-program).


### React

[React](https://reactjs.org/) is a component-based JavaScript library, well suited for interactive websites. As soon as data changes in the application, the interface is efficiently rendered. What's more, [getting started](https://reactjs.org/docs/hello-world.html) with React is fun and quick.


### Nivo

[Nivo](https://nivo.rocks/) is built for [React](#react) _and_ upon the D3 library treated in the course. It provides server side rendering and beautiful charts.


### Firebase

[Firebase](https://firebase.google.com/) has been used for the contact form on the `About` page. The form has a clean design and stores the email address and message written when `Send` is pressed by the user. How the [React](#react) state is used to render the input in the email and message fields before sending the information off to the database, can all be followed in the console.


### REST API

By making a POST call to the [Statistics Sweden](https://www.scb.se/en/), a JSON query can be used to fetch the information of interest. The API originally uses HTTP protocols to identify response status, and cannot be used when deploying a website via HTTPS for example. The naming conventions make the API like a REST API. The number of calls to the API are limited to 10 per 10s.


### CSS Flexbox

[CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) is an efficient way to create a layout, align and distribute space between containers, and among components within them. Different building blocks of a webpage can with CSS Flexbox therefore fill the available space, hence accomodate all kinds of displays and screen sizes. Therefore, this is a fantastic module to use for responsive behaviour. 


## Next steps

Next steps and additional considerations would be to include more blog posts, do a deeper analysis of the data from the [ Statistics Sweden](https://www.scb.se/en/), and complement quantitative information with qualitative. In order to optimise the design and intuition of the interface, more user tests as well as A/B testing would need to be performed. So far, the project has been presented to approximately 20 potential users.

By using the Nivo framework, the format could not be combined with the information fetched from the REST API. Hence, the data was hardcoded into data files, except for statistics being pulled and printed in the browser console. The development of dynamic graphics would clearly be an interesting next step.


## Get in touch

You can reach me [here](https://github.com/sarakinell), via [email](mailto:skinell@ethz.ch) or [Twitter](https://twitter.com/sarakinell). Don't hesistate to reach out if you have any kind of feedback, questions, comments or complaints (or if you are evaluating my project and cannot access the [Firebase](https://firebase.google.com/) backend, for example).

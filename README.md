[<img align="right" src="https://lh3.googleusercontent.com/PE3VSM8Z3yVnGvLCMCKt7xtA0jfzBQn4sw1druqS_AkipOzQV5DAzSs6bABqRKr6eVllCgCoUQLcZRoW9C-xeC6tPhgGDLc60v1TRaEM7qpOR3ArWnpSjK4IW3IBSyrnO6u-rckUm1s8IVE91qSz9J2jiF_TqVXkSI_zUFUxjVywHJLNiTRNkIvkKEgIt0W2XdzxXyIexbV61_zGDvaYh9P_gqvIdJt4ZDDcvCqPqgG_mTGa4rsWhNhpztDi158pbreuLJjkHqwfVRJitJJXppoPPBCwgFR1mHNFo0EN8A3gyZTvfmY_xjNfJPo4vN_sTqKHCMTgUz98iLbs9TWaa55szZu3AKVW_S-OFm17Xo9HoqhS8CZJ1RIL8vZ96FcwSYTIe_y3fMve9JZqXHgSLZbk-8eIHQgWgibG11r4HeIfYYOqDkit4k8QQDVNjiLWHtPDLciAXjLdUkoXQcKmaQgtC1ZpmZu8vfihjjFL9m5_t9QYbLB8Lg-A494uNpVAVg_X7pi2n621LdWXNhdf_KvxqUsmD9Q5SGp_a41AGGuOVSA7R0fECo0vLbnIt8p4zKvYQsU-AAfgmZcUXHkZJUjP1UK3hDw2jZxwZSU=w520-h363-no" width="260px" alt="Good morning Reeds!">]()


# myreads
MyReads is a simple bookshelf application (something like a [goodreads](https://www.goodreads.com/) clone) built with ReactJs as a part of [React Nanodegree by Udacity](https://in.udacity.com/course/react-nanodegree--nd019).  Having its own styles and code, this particular project is my version of myreads, and called as _**GOOD MORNING REEDS!**_. The project focuses on using fundamentals of React and other technologies to create a full blown application.

```
Repo Location : https://github.com/Arjith-Natarajan/myreads
```

## Demo

Here is a working live demo :  https://goodmorning-reeds.herokuapp.com/

## Getting Started

 The only steps that you ever gonna need to have this project up and running. Let's set it up in record time :alarm_clock:, ready?

### Prerequisites
- [Node.js](https://nodejs.org) & NPM installed on your environment
- Any modern web-browser with debugging tools like [Chrome](https://www.google.co.in/chrome/), [FireFox](https://www.mozilla.org/en-US/firefox/new/)

### Installation & Deployment
- Begin by grabbing the code repo
```
git clone https://github.com/Arjith-Natarajan/myreads.git
```
or just Download as a [zip file :arrow_down:](https://github.com/Arjith-Natarajan/myreads/archive/master.zip) and extract it

- Navigate to root directory by `cd myreads` or equivalent method

- Installing necessary packages and dependencies
```
npm install
```
Stretch a little while packages are downloaded

- Deploy the app on local test server
```
npm start
```
Fires up the application server at port 3000

- Visit `http://localhost:3000` in your favourite browser to play around with the application :confetti_ball:


## :nut_and_bolt: Built With


* [create-react-app](https://github.com/facebook/create-react-app) - bootstrapped the project using this starter
* [ReactJs](http://www.dropwizard.io/1.0.2/docs/) - a JavaScript library for building user interfaces
* [React Router v4](https://reacttraining.com/react-router/) - used to navigate between pages and provide URL's to bookmark
* [sort-by](https://github.com/kvnneff/sort-by) - a simple library to sort array based on object's certain properties
* [npm](https://www.npmjs.com/) - Dependency Management
* [FontAwesome 5.0](https://fontawesome.com/) - Truly awesome svg icon packs for the Web
* [Fira Sans](https://fonts.google.com/specimen/Fira+Sans) - Clean modern Typefaces from google
* [Atom](https://atom.io/) - my fav text editor along with its minion army (plugins! :p)


## :star: Highlights
-  Attempted for **maximum code reuse** by structuring code and data flow

  **Issue : ** format for displaying shelves is same except with diff of shelf names.

  Instead of having a single component displaying all three shelves at once as a monolithic `render()` like this:

  ```
  render(){
    return(<div>
      <div>
        <h2>Currently Reading</h2>
        <div>
          <img src="" alt="">
          <h3 class="book-title"></h3>
          <h4 class="book-authors"></h4>
        </div>
        ...
      </div>
      <div>
        <h2>Want To Read</h2>
        ...
      </div>
      <div>
        <h2>Read</h2>
        ...
      </div>
      </div>)
  }
  ```
  tried to decompose into set of re-usable components, by utilising a `BookSections` Component as follows:
  ```
  return(
    <div className="list-books">
        <BookSections
          books={books.currentlyReading}
          shelfName="Currently Reading"
        />
        <BookSections
          books={books.wantToRead}
          shelfName="Want to Read"
        />
        <BookSections
          books={books.read}
          shelfName="Read"
        />

    </div>
    )
  ```
  where `BookSections` is a stateless component, thus achieveing improved readablity and much cleaner code.
- Has tried to adhere to udacity guidelines for HTML, CSS, JS
- use of :heart: version control from beginning, with commits done iteratively



## Functionalities
- List Books under 3 diff shelves : **Currently Reading, Want to Read and Read**
- Ability to change the shelf of the books by clicking on them and selecting
- Search for different books and list search results
- Ability to add new books from search results to one of 3 shelves
-  Maintain and display same shelf for a book in shelf as well as search results



## :white_check_mark: TODOS/ Ideas
- [x] task: Deploy application to Heroku
- [ ] task: Include demo gif in README
- [ ] feat: add rating to books
- [ ] feat: show some Stats
- [ ] feat: put up a **bookDetail View**
- [ ] feat: show some content on hovering
- [ ] idea: use Bootstrap v4
- [ ] idea: go thru docs for performance. Refer [here](https://reactjs.org/docs/optimizing-performance.html)


## Missing Something?

Do have some more cool ideas for this project? Maybe you found some [bugs? or few typos?](https://github.com/Arjith-Natarajan/myreads/issues)
Can't scratch off the itch to make this even more awesome?

Guess what, I have been looking for you! :tada: **Open an issue or submit a pull!**

### Contributing
1. Fork it!
2. Create your feature branch:
`git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Acknowledgements
A salute and heartful thanks to everyone who made this repo possible
1. React Nanodegree instructors @Udacity - [Tyler McGinnis](https://tylermcginnis.com/), [Ryan](https://medium.com/@ryanflorence) & [Michael](https://twitter.com/mjackson?lang=en)
2. Neighbours - for not disturbing me with loud music
3. Roommates - who put up with me burning the midnight Oil
6. all Devs who posted at @Stackoverflow
4. Crucio - Her Majesty of felines :cat:
5.  And all my friends who work at Udacity!


## Creator(s)

Good morning Reeds! was created by and is maintained by, of course me, **[Arjith Natarajan](https://github.com/Arjith-Natarajan/)**, SDE at [Sigaram Technologies](http://sigaramtech.com/).

* https://twitter.com/arjithnat
* http://linkedin.com/in/arjithnatarajan/

_Have an interesting project to collaborate? [Reach out to me](mailto:arjith@sigaramtech)_ :smile:

## Resources

* [**Official ReactJs Docs**](https://reactjs.org/docs/jsx-in-depth.html)- Best resource to pick up advanced concepts in Library
* [**Choose A License**](http://choosealicense.com/) - Helpful website for picking out a license for your project.
* [**Writing READMES: Code is for Humans too!**](https://classroom.udacity.com/courses/ud777) - A short course on writing documentation & READMEs from Udacity
* [**Emojis in README**](https://gist.github.com/rxaviers/7360908) - Complete list of github markdown emoji markup


## License

The contents of this repository are covered under the [MIT License](LICENSE).

# Booksy

Booksy is a collection of small, browser-based front-end projects built with HTML, CSS, and vanilla JavaScript. Its main page is a book-list interface for adding and removing book cards; the repository also includes a quiz prototype and a to-do interface prototype.

These projects are self-contained static pages intended for learning and experimentation. They do not use a server, database, or persistent storage.

## Projects and features

### Booksy book list

Open `BOOKSY/booksy.html` to view the book-list interface. It includes:

- A form for entering a book title, description, and author.
- Book cards that can be added to and removed from the page.
- A light/dark theme toggle.
- Responsive styling for smaller screens.

Added cards exist only in the current page session; refreshing the page removes them. The initial card is sample content.

### Quiz

The `Quizz_app` folder contains an IPL-themed multiple-choice quiz. Its JavaScript defines nine question entries, with three prompts repeated, and includes score-tracking logic. The quiz is a prototype: answer validation and the transition at the end of the question list are incomplete, so a complete quiz run is not currently reliable.

### To-do interface

`TODO_app/new.html` contains the to-do interface markup and inline styles. The repository also contains `BOOKSY/app.js`, with JavaScript for adding and removing to-do items. However, `new.html` loads `app.js` relative to the `TODO_app` directory, where that file is not present, so the page's script is currently not wired to the available JavaScript. The script does not save items between page loads.

## Technology stack

- **HTML** for page structure.
- **CSS** for layout, responsive rules, and visual styling.
- **Vanilla JavaScript** for page interactions.
- **Google Fonts** referenced by the Booksy page.
- **Font Awesome 6.4.0** referenced by the to-do page through cdnjs.

There is no framework, package manager, build system, backend API, or database configured in the repository. The Google Fonts and Font Awesome assets require an internet connection; the pages themselves are static files.

## Repository structure

```text
.
├── BOOKSY/
│   ├── booksy.html   # Main book-list page, with its interaction script inline
│   ├── booksy.css    # Book-list layout, theme styles, and responsive rules
│   └── app.js        # To-do interaction helpers; not wired to TODO_app/new.html
├── Quizz_app/
│   ├── quizz.html    # Quiz page markup
│   ├── quizz.css     # Quiz page styling
│   └── quizz.js      # Hard-coded questions and quiz interaction logic
├── TODO_app/
│   └── new.html      # To-do page markup and inline styles
└── README.md
```

## Prerequisites

- A modern web browser.
- Git, if cloning the repository.
- Internet access for externally hosted fonts and icons (optional; the pages can still be opened without them).

No Node.js, package installation, database, or environment variables are required.

## Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/LohithKumar15/Booksy.git
   cd Booksy
   ```

2. Open one of the HTML files directly in a browser:

   - `BOOKSY/booksy.html` — book-list interface.
   - `Quizz_app/quizz.html` — quiz prototype.
   - `TODO_app/new.html` — to-do interface markup (its JavaScript reference currently does not resolve).

The Booksy and quiz pages load their CSS and JavaScript from files in their own folders. No build or start command is defined.

## Environment variables and data

The project does not read environment variables or connect to a database. Book cards and to-do items are held in the page only and are not persisted after a reload.

## Testing

No automated tests or test scripts are included in the repository.

## Project status and items to confirm

- The to-do page references a local `app.js` that is absent from `TODO_app`; its interaction script needs to be wired up before the page works as a to-do app.
- The quiz has incomplete answer validation and end-of-quiz handling.
- The repository does not include a license file. Add or confirm a license before distributing the project under specific reuse terms.

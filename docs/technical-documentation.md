# Technical Documentation

## Overview

<<<<<<< HEAD
This repository contains a responsive portfolio and two small web projects. The portfolio itself is static. The gym project can be hosted by ASP.NET Core, and the to-do project can be served by Java’s built-in HTTP server. Both project interfaces also work as static demos.
=======
This is a static one-page portfolio with no framework, package installation, or backend.
>>>>>>> 82543bf11abac31a189fe7293062303ce8a0126e

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Page content and semantic structure |
| `css/styles.css` | Colors, layout, responsiveness, and dark theme |
| `js/script.js` | Theme-toggle interaction and saved preference |
<<<<<<< HEAD
| `assets/images/` | Profile photo, SVG favicon, and project previews |
| `projects/gym-tracker-csharp/` | C# server, gym interface, and project documentation |
| `projects/todo-list-java/` | Java server, to-do interface, and project documentation |

## Responsive design

CSS Grid creates multi-column layouts on larger screens. One media query at `720px` changes the hero, skills, projects, and contact areas to a single column. The navigation remains simple enough to fit on mobile without extra JavaScript.

The two mini-projects have their own responsive stylesheets and breakpoints. IronLog uses a dark red-and-black fitness theme; FocusList uses a light cream-and-blue productivity theme.
=======
| `assets/images/` | Local SVG favicon and project placeholder |

## Responsive design

CSS Grid creates two-column layouts on larger screens. One media query at `720px` changes the hero, projects, and contact areas to a single column. The navigation remains simple enough to fit on mobile without extra JavaScript.
>>>>>>> 82543bf11abac31a189fe7293062303ce8a0126e

## JavaScript feature

The theme button switches the `data-theme` value on the `<html>` element. CSS uses that value to select light or dark colors. The choice is saved in `localStorage`, so it remains after reloading the page.

<<<<<<< HEAD
The gym tracker and to-do application use separate JavaScript modules to manage user input, update the interface, calculate summaries, filter entries, and save data in `localStorage`.

## Language-specific servers

- `Program.cs` uses ASP.NET Core to serve the IronLog static interface and provide a random coaching-tip endpoint.
- `TodoServer.java` uses `HttpServer` to serve the FocusList files and provide a status endpoint.
- The portfolio links directly to each static interface so both demos remain viewable without starting a backend.

=======
>>>>>>> 82543bf11abac31a189fe7293062303ce8a0126e
## Accessibility

- Semantic sections and navigation
- Form labels connected to their fields
<<<<<<< HEAD
- Alternative text for the profile and project images
=======
- Alternative text for project images
>>>>>>> 82543bf11abac31a189fe7293062303ce8a0126e
- Visible keyboard focus on form controls
- Accessible label that changes with the theme state
- Responsive text using `clamp()`

## Limitations

<<<<<<< HEAD
The portfolio contact form is a demonstration and does not send data. The static project demos cannot use their C# or Java endpoints on GitHub Pages, so both provide browser-based fallback behavior.
=======
The contact form is a demonstration and does not send data because the assignment requires no backend.
>>>>>>> 82543bf11abac31a189fe7293062303ce8a0126e

## Testing checklist

- [ ] Open the page with no console errors.
- [ ] Check desktop, tablet, and mobile widths.
- [ ] Test every navigation link.
- [ ] Toggle the theme and reload the page.
- [ ] Test the form’s required fields.
- [ ] Navigate using the keyboard.
<<<<<<< HEAD
- [ ] Add and delete a gym workout; reload and confirm it remains.
- [ ] Add, filter, and complete a task; reload and confirm it remains.
- [ ] Run the C# and Java servers using the commands in the main README.
=======
>>>>>>> 82543bf11abac31a189fe7293062303ce8a0126e

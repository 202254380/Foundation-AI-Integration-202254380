<<<<<<< HEAD
# Foundation & AI Integration — Personal Portfolio

A responsive personal portfolio created for **SWE 333 Assignment 1**. It introduces me, presents my skills, and includes two working mini-projects with distinct visual themes.

## Portfolio features

- Personal introduction and profile image
- Skills section covering HTML, CSS, JavaScript, C#, Java, and SQL
- Two clickable project cards that open working applications
- Responsive layouts for desktop, tablet, and mobile
- Light/dark portfolio theme saved with `localStorage`
- Contact form with native browser validation
- AI-use and technical documentation

## Included projects

### IronLog Gym Tracker — C#

A dark, high-energy workout tracker hosted with ASP.NET Core.

- Add and delete exercises
- Record sets, repetitions, and weight
- Calculate total sets and training volume
- Save workout data in the browser
- Request random coaching tips from a C# API endpoint
- Continue working as a static demo when the C# server is unavailable

Source: [`projects/gym-tracker-csharp`](projects/gym-tracker-csharp)

### FocusList To-Do App — Java

A light, calm productivity application served by Java’s built-in HTTP server.

- Add, complete, and delete tasks
- Organize tasks by category
- Filter all, open, and completed tasks
- Display completion progress
- Save task data in the browser
- Report whether the Java server or static demo is active

Source: [`projects/todo-list-java`](projects/todo-list-java)

## Main project structure
=======
# Personal Portfolio — Assignment 1

A simple responsive portfolio built with HTML, CSS, and JavaScript. It is the first version of my professional portfolio and can be expanded in future assignments.

## Requirements covered

- About Me section with an introduction and tagline
- Projects section with two project cards and placeholder images
- Contact section with Name, Email, and Message fields
- Responsive desktop, tablet, and mobile layout
- JavaScript dark/light theme toggle
- Clear file structure and documentation

## Run the project

No installation is required. Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Files
>>>>>>> 82543bf11abac31a189fe7293062303ce8a0126e

```text
├── index.html
├── css/styles.css
├── js/script.js
├── assets/images/
<<<<<<< HEAD
│   ├── profile.jpg
│   ├── gym-project.svg
│   └── todo-project.svg
├── projects/
│   ├── gym-tracker-csharp/
│   │   ├── GymTracker.csproj
│   │   ├── Program.cs
│   │   └── wwwroot/
│   └── todo-list-java/
│       ├── src/TodoServer.java
│       └── public/
=======
>>>>>>> 82543bf11abac31a189fe7293062303ce8a0126e
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── README.md
```

<<<<<<< HEAD
## View the portfolio and static demos

No installation is required for the portfolio or static project demos. Open `index.html`, or run:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000> and select either project card.

## Run the C# project

Requirements: .NET 8 SDK.

```bash
cd projects/gym-tracker-csharp
dotnet run
```

Open <http://localhost:5051>.

## Run the Java project

Requirements: JDK 17 or later.

```bash
cd projects/todo-list-java
java --add-modules jdk.httpserver src/TodoServer.java
```

Open <http://localhost:5052>.

## Data and deployment

Both applications store entries in the visitor’s browser using `localStorage`; they do not send personal data to an external service. The static versions can be published with the main portfolio on GitHub Pages. C# and Java server endpoints require their respective local runtimes or a compatible server host, so each interface includes a static fallback.

## AI usage

ChatGPT assisted with planning, initial code generation, debugging, UI suggestions, and documentation. The generated work was reviewed and adapted for this portfolio. See [`docs/ai-usage-report.md`](docs/ai-usage-report.md) for the detailed record and the student reflection that must be completed honestly.

## Author

**Mhammed Aboalsaud**  
Student ID: **202254380**  
GitHub: [@202254380](https://github.com/202254380)
=======
## Before submission

1. Replace `your.email@example.com` with your real email.
2. Rewrite the introduction in your own words.
3. Replace the second project with one of your real projects when possible.
4. Complete the personal reflection in `docs/ai-usage-report.md`.
5. Test the site on phone, tablet, and desktop sizes.
6. Name the public repository `YOUR_ID-mhammedaboalsaud-assignment1`.

## AI use

ChatGPT helped create the initial structure, styling, theme toggle, and documentation. Details are recorded in `docs/ai-usage-report.md`.

## Author

<<<<<<< HEAD
Mohammed Aboalsaud

20254380
=======
Mhammed Aboalsaud
>>>>>>> 285d9e3064ef41f110b830bd89e53fc39f01a3ca
>>>>>>> 82543bf11abac31a189fe7293062303ce8a0126e

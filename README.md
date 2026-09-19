# Foundation & AI Integration — Personal Portfolio

A responsive personal portfolio created for **SWE 333 Assignment 1**. It introduces me, presents my skills, and includes two working mini-projects with distinct visual themes.

## Portfolio Features

* Personal introduction and profile image
* Skills section covering HTML, CSS, JavaScript, C#, Java, and SQL
* Two clickable project cards that open working applications
* Responsive layouts for desktop, tablet, and mobile
* Light and dark portfolio themes saved with `localStorage`
* Contact form with native browser validation
* AI-usage and technical documentation

## Included Projects

### IronLog Gym Tracker — C#

A dark, high-energy workout tracker hosted with ASP.NET Core.

Features:

* Add and delete exercises
* Record sets, repetitions, and weight
* Calculate total sets and training volume
* Save workout data in the browser
* Request random coaching tips from a C# API endpoint
* Work as a static demo when the C# server is unavailable

Source: [`projects/gym-tracker-csharp`](projects/gym-tracker-csharp)

### FocusList To-Do App — Java

A light productivity application served by Java’s built-in HTTP server.

Features:

* Add, complete, and delete tasks
* Organize tasks by category
* Filter all, open, and completed tasks
* Display completion progress
* Save tasks in the browser
* Report whether the Java server or static demo is active

Source: [`projects/todo-list-java`](projects/todo-list-java)

## Project Structure

```text
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       ├── favicon.svg
│       ├── profile.jpg
│       ├── gym-project.svg
│       └── todo-project.svg
├── projects/
│   ├── gym-tracker-csharp/
│   │   ├── GymTracker.csproj
│   │   ├── Program.cs
│   │   ├── README.md
│   │   └── wwwroot/
│   │       ├── index.html
│   │       ├── styles.css
│   │       └── app.js
│   └── todo-list-java/
│       ├── README.md
│       ├── src/
│       │   └── TodoServer.java
│       └── public/
│           ├── index.html
│           ├── styles.css
│           └── app.js
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── .gitignore
└── README.md
```

## View the Portfolio and Static Demos

No installation is required to view the portfolio or static project demos.

Open `index.html` directly, or start a local server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

Select either project card to open its application.

## Run the C# Gym Project

Requirements:

* .NET 8 SDK

Commands:

```bash
cd projects/gym-tracker-csharp
dotnet run
```

Open:

```text
http://localhost:5051
```

## Run the Java To-Do Project

Requirements:

* JDK 17 or later

Commands:

```bash
cd projects/todo-list-java
java --add-modules jdk.httpserver src/TodoServer.java
```

Open:

```text
http://localhost:5052
```

## Data and Deployment

Both applications store entries in the visitor’s browser using `localStorage`. They do not send personal information to an external service.

The static versions can be published with the main portfolio using GitHub Pages. The C# and Java server endpoints require their respective runtimes or a compatible hosting service, so both applications include static fallback behavior.

## AI Usage

ChatGPT assisted with:

* Organizing the assignment requirements
* Creating the initial HTML, CSS, and JavaScript structure
* Developing the C# gym tracker and Java to-do application
* Debugging code and Git merge conflicts
* Suggesting UI and responsive-design improvements
* Improving the project documentation

More information is available in [`docs/ai-usage-report.md`](docs/ai-usage-report.md).

## Author

**Mhammed Aboalsaud**
Student ID: **202254380**
GitHub: [@202254380](https://github.com/202254380)

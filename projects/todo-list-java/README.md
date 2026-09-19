# FocusList Java To-Do App

A small task-management website served by Java’s built-in HTTP server. It supports task creation, categories, completion tracking, filters, deletion, and persistent browser storage.

## Run with Java

From this project directory, use JDK 17 or later:

```bash
java --add-modules jdk.httpserver src/TodoServer.java
```

Open <http://localhost:5052>.

## Static demo

The interface also works by opening `public/index.html` directly. Tasks are saved with `localStorage`. The server badge reports static-demo mode when the Java server is not running.

# IronLog Gym Tracker

A small gym-tracking website hosted by ASP.NET Core. It records exercises in the browser, calculates total training volume, and includes a C# endpoint that returns a random training tip.

## Run with C#

Install the .NET 8 SDK, then run:

```bash
dotnet run
```

Open <http://localhost:5051>.

## Static demo

The interface also works by opening `wwwroot/index.html` directly. Workout data is saved in the browser with `localStorage`. When the C# server is unavailable, the coaching-tip button uses a local fallback.

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

string[] trainingTips =
[
    "Control every repetition and prioritize good form over heavier weight.",
    "Record your workouts so you can improve one small detail next time.",
    "Recovery matters: sleep, hydration, and nutrition support your training.",
    "Warm up gradually before your hardest working sets."
];

app.UseDefaultFiles();
app.UseStaticFiles();

app.MapGet("/api/tip", () => Results.Ok(new
{
    tip = trainingTips[Random.Shared.Next(trainingTips.Length)]
}));

app.MapFallbackToFile("index.html");
app.Run("http://localhost:5051");


using NSwag;

namespace PortfolioApi;

public class Program
{
    public static void Main(string[] args)
    {

        // DB Connection
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddControllers();
        // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
        builder.Services.AddOpenApiDocument(options =>
        {
            options.PostProcess = document =>
            {
                document.Info = new OpenApiInfo
                {
                    Version = "v1",
                    Title = "Portfolio API",
                    Description = "An ASP.NET Core Web API for managing projects and blogs."
                };
            };
        });

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            // http:localhost:5251/swagger/v1/swagger.json
            app.UseOpenApi();

            // http:localhost:5251/swagger
            app.UseSwaggerUi();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();


        app.MapControllers();

        app.Run();
    }
}
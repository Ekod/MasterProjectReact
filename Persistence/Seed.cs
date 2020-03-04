using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
  public class Seed
  {
    public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
    {
      if (!userManager.Users.Any())
      {
        var users = new List<AppUser>
                {
                    new AppUser
                    {
                        DisplayName = "Bob",
                        UserName = "bob",
                        Email = "bob@text.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Tom",
                        UserName = "tom",
                        Email = "tom@text.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Jane",
                        UserName = "jane",
                        Email = "jane@text.com"
                    },
                };
        foreach (var user in users)
        {
          await userManager.CreateAsync(user, "Pa$$w0rd");
        }
      }
      if (!context.Activities.Any())
      {
        var activities = new List<Activity>
                {
                    new Activity
                    {
                        Title = "Прошлая активность 1",
                        Date = DateTime.Now.AddMonths(-2),
                        Description = "Активность 2 месяца назад",
                        Category = "drinks",
                        City = "London",
                        Venue = "Pub",
                    },
                    new Activity
                    {
                        Title = "Прошлая активность 2",
                        Date = DateTime.Now.AddMonths(-1),
                        Description = "Активность 1 месяц назад",
                        Category = "culture",
                        City = "Paris",
                        Venue = "Louvre",
                    },
                    new Activity
                    {
                        Title = "Будущая активность 1",
                        Date = DateTime.Now.AddMonths(1),
                        Description = "Активность через месяц",
                        Category = "culture",
                        City = "London",
                        Venue = "Natural History Museum",
                    },
                    new Activity
                    {
                        Title = "Будущая активность 2",
                        Date = DateTime.Now.AddMonths(2),
                        Description = "Активность через 2 месяца",
                        Category = "music",
                        City = "London",
                        Venue = "O2 Arena",
                    },
                    new Activity
                    {
                        Title = "Будущая активность 3",
                        Date = DateTime.Now.AddMonths(3),
                        Description = "Активность через 3 месяца",
                        Category = "drinks",
                        City = "London",
                        Venue = "Another pub",
                    },
                    new Activity
                    {
                        Title = "Будущая активность 4",
                        Date = DateTime.Now.AddMonths(4),
                        Description = "Активность через 4 месяца",
                        Category = "drinks",
                        City = "London",
                        Venue = "Yet another pub",
                    },
                    new Activity
                    {
                        Title = "Будущая активность 5",
                        Date = DateTime.Now.AddMonths(5),
                        Description = "Активность через 5 месяцев",
                        Category = "drinks",
                        City = "London",
                        Venue = "Just another pub",
                    },
                    new Activity
                    {
                        Title = "Будущая активность 6",
                        Date = DateTime.Now.AddMonths(6),
                        Description = "Активность через 6 месяцев",
                        Category = "music",
                        City = "London",
                        Venue = "Roundhouse Camden",
                    },
                    new Activity
                    {
                        Title = "Будущая активность 8",
                        Date = DateTime.Now.AddMonths(8),
                        Description = "Активность через 7 месяцев",
                        Category = "film",
                        City = "London",
                        Venue = "Cinema",
                    }
                };
        context.Activities.AddRange(activities);
        context.SaveChanges();
      }
    }
  }
}
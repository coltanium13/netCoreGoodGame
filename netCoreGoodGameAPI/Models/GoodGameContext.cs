using Microsoft.EntityFrameworkCore;

namespace netCoreGoodGameAPI.Models
{
    public class GoodGameContext : DbContext
    {
        public GoodGameContext(DbContextOptions<GoodGameContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }

        //TODO: create a Game model and Games DbSet<Game>
        //https://docs.microsoft.com/en-us/ef/core/modeling/relationships?tabs=fluent-api%2Cfluent-api-simple-key%2Csimple-key
    }
}
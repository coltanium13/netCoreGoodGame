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
    }
}
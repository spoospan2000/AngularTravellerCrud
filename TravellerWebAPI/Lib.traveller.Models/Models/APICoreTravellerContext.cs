using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Lib.traveller.Models.Models;

namespace Lib.traveller.Models.Models
{
    public partial class APICoreTravellerContext : DbContext
    {
        public APICoreTravellerContext()
        {
        }

        public APICoreTravellerContext(DbContextOptions<APICoreTravellerContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Traveller> Traveller { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=LAPTOP-HDHO2R7F\\MSSQLSERVER01;Database=APICoreTraveller;Integrated security=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Traveller>(entity =>
            {
                entity.Property(e => e.Address).HasMaxLength(50);

                entity.Property(e => e.Country).HasMaxLength(50);

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Firstname).HasMaxLength(50);

                entity.Property(e => e.Lastname).HasMaxLength(50);

                entity.Property(e => e.Mobile).HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

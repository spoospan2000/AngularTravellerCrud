using Lib.traveller.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Lib.traveller.Service.Serives
{
    public class TravellerService:ITravellerService
    {
        APICoreTravellerContext dbContext;

        public TravellerService(APICoreTravellerContext db)
        {
            dbContext = db;
        }
        public Traveller AddTraveller(Traveller traveller)
        {
            dbContext.Traveller.Add(traveller);
            dbContext.SaveChanges();
            return traveller;
        }

        public Traveller DeleteTraveller(int id)
        {
            var travel = dbContext.Traveller.Find(id);
            dbContext.Traveller.Remove(travel);
            dbContext.SaveChanges();
            return travel;
        }

        public IEnumerable<Traveller> GetTraveller()
        {
            return dbContext.Traveller.ToList();
        }

        public Traveller UpdateTraveller(Traveller traveller)
        {
            dbContext.Entry(traveller).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            dbContext.SaveChanges();
            return traveller;
        }
    }
}

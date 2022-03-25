using Lib.traveller.Models.Models;
using Lib.traveller.Service.Serives;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TravellerWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TravellerController : Controller
    {
        private readonly ITravellerService travellerservice;
        public TravellerController(ITravellerService traveller)
        {
            travellerservice = traveller;
        }

        [HttpGet]
        public IEnumerable<Traveller> GetTraveller()
        {
            return travellerservice.GetTraveller();
        }

        [HttpPost]
        public Traveller AddTraveller(Traveller travel)
        {
            return travellerservice.AddTraveller(travel);
        }

        [HttpPut]
        public Traveller EditTraveller(Traveller travel)
        {
            return travellerservice.UpdateTraveller(travel);
        }

        [HttpDelete]
        public Traveller DeleteTraveller(int id)
        {
            return travellerservice.DeleteTraveller(id);
        }
    }
}

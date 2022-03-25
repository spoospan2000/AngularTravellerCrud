using Lib.traveller.Models.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Lib.traveller.Service.Serives
{
    public interface ITravellerService
    {
        IEnumerable<Traveller> GetTraveller();
        Traveller AddTraveller(Traveller traveller);
        Traveller UpdateTraveller(Traveller traveller);
        Traveller DeleteTraveller(int id);
    }
}

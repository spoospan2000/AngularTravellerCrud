﻿using System;
using System.Collections.Generic;

namespace Lib.traveller.Models.Models
{
    public partial class Traveller
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public string Country { get; set; }
    }
}

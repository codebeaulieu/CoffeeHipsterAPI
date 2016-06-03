using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoffeeHipster.Models
{
    public class Admin: User
    {
        public int AdminId { get; set; }
        public int Level { get; set; }
    }
}

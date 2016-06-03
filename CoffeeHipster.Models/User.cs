using CoffeeHipster.Contracts;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace CoffeeHipster.Models
{
    public class User : ApplicationUser
    {
        [Required, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int HipsterId { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime DateJoined { get; set; }
        public int HipsterPoints { get; set; } = 0;
        public bool StackAssociated { get; set; }
        public int StackExchangeId { get; set; }
        public string StackUserName { get; set; }
    }
}

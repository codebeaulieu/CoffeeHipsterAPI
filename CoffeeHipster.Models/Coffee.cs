using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CoffeeHipster.Contracts;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoffeeHipster.Models
{
    /*
        I'll expand this as I go to add taste, aroma and more 
    */
    public class Coffee : IEntity
    {
        [Key, Required, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Type { get; set; }
        public string Roast { get; set; }
        public string Color { get; set; }
        [Range(0.00, 100.00, ErrorMessage = "Range must be between 0.00 and 100.00")]
        public decimal OilAmount { get; set; }
        public bool FairTrade { get; set; }
        public string History { get; set; } 
        public string ImageBagURL { get; set; } 
        public string ImageBeanURL { get; set; }
        public string CountryOfOrigin { get; set; }
        public string DateOfOrigin { get; set; }
        public double EstimatedPrice { get; set; }
        [Required]
        public int InsertedBy { get; set; }
        [Required, DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime InsertedDate { get; set; }
        public int RatingUpVotes { get; set; }
        public int RatingDownVotes { get; set; }
        [NotMapped]
        public int Rating => RatingUpVotes - RatingDownVotes;
    }
}

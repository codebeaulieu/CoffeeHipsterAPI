using CoffeeHipster.Contracts;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace CoffeeHipster.Models
{
    public class ImageUpload : IEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Url { get; set; }
        public string FileName { get; set; }
        public string FileType { get; set; }
        [Required]
        [StringLength(45, MinimumLength = 5, ErrorMessage = "Filename must be between 5 and 45 characters")]
        public string Alias { get; set; }
        public int Size { get; set; }
        [NotMapped]
        public string AlbumName { get; set; }
        public string Album { get; set; } = "CoffeeHipster";
        public IPrincipal User { get; set; }

        private DateTime? createdDate;
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime CreatedDate
        {
            get { return createdDate ?? DateTime.UtcNow; }
            set { createdDate = value; }
        }

    }
}

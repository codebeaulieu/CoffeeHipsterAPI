"use strict";

angular.module("chCreate", ['ngMaterial', 'ngMessages']).controller("chCreateController",
    ['$scope', 'createCRUDService', 
        function ($scope, createCRUDService) {

            var self = this;
            self.coffee = {
                Name: "",
                Type: "",
                Roast: "",
                Color: "",
                OilAmount: null,
                FairTrade: false,
                History: "",
                ImageBagURL: "",
                ImageBeanURL: "",
                CountryOfOrigin: "",
                DateOfOrigin: "",
                EstimatedPrice: "",
                InsertedBy: "",  
                Accepted: true
            };

            self.handleSubmitButtonClicked = function () {

                createCRUDService.post(self.coffee).then(function (obj) {
                    console.log("obj: ", obj);
                });
            };

            $scope.$watch("vm.coffee.EstimatedPrice", function () {
                console.log(self.coffee);
            });

            var init = function () {
    
            };


            init();
        }
    ]);

/*
    
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
        public bool Accepted { get; set; } = false;
*/
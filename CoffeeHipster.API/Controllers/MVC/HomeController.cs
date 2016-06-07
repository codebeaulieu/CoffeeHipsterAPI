using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Dynamic;

namespace CoffeeHipster.API.Controllers
{
    
    public class HomeController : Controller
    {
        [AuthorizeOrRedirect]
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public ActionResult Login()
        {
 

            return View();
        }
    }
}

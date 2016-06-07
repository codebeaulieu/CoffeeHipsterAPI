using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace CoffeeHipster.API
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method,
  Inherited = true, AllowMultiple = true)]
    public class AuthorizeOrRedirectAttribute : System.Web.Mvc.AuthorizeAttribute
    {
 
        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
           
                filterContext.Result = new RedirectToRouteResult(new RouteValueDictionary(new { controller = "Home", action = "Login" }));
            
        }
    }
}

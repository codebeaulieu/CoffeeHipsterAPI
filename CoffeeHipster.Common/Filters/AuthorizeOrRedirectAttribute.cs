using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace CoffeeHipster.Common.Filters
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method,
  Inherited = true, AllowMultiple = true)]
    public class AuthorizeOrRedirectAttribute : System.Web.Mvc.AuthorizeAttribute
    {
        protected override bool AuthorizeCore(System.Web.HttpContextBase httpContext)
        {
            return false; // breakpoint here, and this should force an authorization failure
        }
        public override void OnAuthorization(System.Web.Mvc.AuthorizationContext filterContext)
        {
            base.OnAuthorization(filterContext); // breakpoint here
        }
    }
}

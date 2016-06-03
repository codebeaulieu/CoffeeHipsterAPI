using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace CoffeeHipster.Common
{
    public class ExceptionManager
    {
        public T ExecuteFaultHandledOperation<T>(Func<T> codeToExecute)
        {
            try
            {
                return codeToExecute.Invoke();
            }
            catch (TimeZoneNotFoundException ex)
            {
                //going to install Log4Net
                return default(T);
            }
            catch (InvalidTimeZoneException ex)
            {
                //going to install Log4Net
                return default(T);
            }
            catch (TargetInvocationException ex)
            {
                //going to install Log4Net
                return default(T);
            }
            catch (Exception ex)
            {
                //going to install Log4Net
                return default(T);
            }
        }
    }
}

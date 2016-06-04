using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using CoffeeHipster.Common;
using CoffeeHipster.Contracts;

namespace CoffeeHipster.Data
{
    public class Repository<T> : IRepository<T> where T : class
    {
        protected DbSet<T> DbSet;
        protected DbContext _Context;
        ExceptionManager x = new ExceptionManager();

        public Repository(DbContext dataContext)
        {
            DbSet = dataContext.Set<T>();
            _Context = dataContext;
        }

        public void Insert(T entity)
        {

            x.ExecuteFaultHandledOperation(() =>
            {
                return DbSet.Add(entity);
            });

        }
        public void Delete(T entity)
        {
            DbSet.Remove(entity);
        }
        public IQueryable<T> GetAll()
        {
            return DbSet;
        }
        public T GetById(int id)
        {
            return DbSet.Find(id);
        }

        public IQueryable<T> SearchFor(Expression<Func<T, bool>> predicate)
        {
            return DbSet.Where(predicate);

        }
    }
}

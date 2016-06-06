using CoffeeHipster.Contracts;
using CoffeeHipster.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoffeeHipster.Data
{
    public class UnitOfWork : IDisposable
    {

        private ApplicationDbContext _context;

        public UnitOfWork() : this(new ApplicationDbContext()) { }

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
        }

        private IRepository<User> _userRepository;
        public IRepository<User> UserRepository
        {
            get
            {
                if (_userRepository == null)
                {
                    _userRepository = new Repository<User>(_context);
                }
                return _userRepository;
            }
            private set { _userRepository = value; }
        }

        private IRepository<Coffee> _coffeeRepository;
        public IRepository<Coffee> CoffeeRepository
        {
            get
            {
                if (_coffeeRepository == null)
                {
                    _coffeeRepository = new Repository<Coffee>(_context);
                }
                return _coffeeRepository;
            }
            private set { _coffeeRepository = value; }
        }

        private IRepository<Admin> _adminRepository;
        public IRepository<Admin> AdminRepository
        {
            get
            {
                if (_adminRepository == null)
                {
                    _adminRepository = new Repository<Admin>(_context);
                }
                return _adminRepository;
            }
            private set { _adminRepository = value; }
        }

        public void Dispose()
        {

        }

        public void Commit()
        {
            _context.SaveChanges();
        }
    }
}

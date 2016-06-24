using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using CoffeeHipster.Models;
using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Auth;
using Microsoft.WindowsAzure.Storage.Blob;
using Microsoft.WindowsAzure.Storage.Queue;
using Microsoft.WindowsAzure.Storage.Table;
using Microsoft.WindowsAzure.Storage.RetryPolicies;
using CoffeeHipster.Data;
using System.Web;

namespace CoffeeHipster.API.Controllers
{
    public class ImageUploadController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        private string name = "beaulieu";
        private string key = "hidden";

        // GET: api/ImageUpload
        public IQueryable<ImageUpload> GetImageUploads()
        {
            return db.ImageUploads;
        }

        // GET: api/ImageUpload/5
        [ResponseType(typeof(ImageUpload))]
        public IHttpActionResult GetImageUpload(int id)
        {
            ImageUpload imageUpload = db.ImageUploads.Find(id);
            if (imageUpload == null)
            {
                return NotFound();
            }

            return Ok(imageUpload);
        }

        // PUT: api/ImageUpload/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutImageUpload(int id, ImageUpload imageUpload)
        {
            TimeSpan backOffPeriod = TimeSpan.FromSeconds(2);
            int retryCount = 1;
            BlobRequestOptions bro = new BlobRequestOptions()
            {
                SingleBlobUploadThresholdInBytes = 1024 * 1024, //1MB, the minimum
                ParallelOperationThreadCount = 1,
                RetryPolicy = new ExponentialRetry(backOffPeriod, retryCount),
            };


            return StatusCode(HttpStatusCode.NoContent);
        }

        private static CloudStorageAccount CreateAccount(string name, string key)
        {
            // Create a storage account class using the credentials.
            StorageCredentials creds = new StorageCredentials(name, key);
            CloudStorageAccount account = new CloudStorageAccount(creds, false);
            return account;
        }
        // POST: api/ImageUpload
        [ResponseType(typeof(ImageUpload))]
        public HttpResponseMessage PostImageUpload(ImageUpload imageUpload)
        {
            TimeSpan backOffPeriod = TimeSpan.FromSeconds(2);
            int retryCount = 1;
            BlobRequestOptions bro = new BlobRequestOptions()
            {
                SingleBlobUploadThresholdInBytes = 1024 * 1024, //1MB, the minimum
                ParallelOperationThreadCount = 1,
                RetryPolicy = new ExponentialRetry(backOffPeriod, retryCount),
            };

            if (ModelState.IsValid)
            {
                CloudStorageAccount account = CreateAccount(name, key);
                CloudBlobClient blobClient = account.CreateCloudBlobClient();
                blobClient.DefaultRequestOptions = bro;
                CloudBlobContainer defaultContainer = blobClient.GetContainerReference("images");
                defaultContainer.CreateIfNotExists();

                using (UnitOfWork uwork = new UnitOfWork())
                {

                   

                    HttpPostedFileBase file = Request.Files["userUploadedFile"];

                    var userName = User.Identity.Name;
                    string date = DateTime.Now.ToString("yyyyMMddHHmmss");

                    date = date.Replace(" ", "");

                    var newFileName = imageUpload.AlbumName + "/" + date + file.FileName;

                    if (file.FileName != "")
                    {
                        // Create a blob and upload a file.
                        CloudBlockBlob blob = defaultContainer.GetBlockBlobReference(newFileName);

                        blob.StreamWriteSizeInBytes = 256 * 1024; //256 k
                        blob.UploadFromStream(file.InputStream);

                        var azureUrl = blob.Uri.ToString();
                        var img = new ImageUpload
                        {
                            FileName = newFileName, // maybe use a guid
                            Alias = imageUpload.Alias,
                            FileType = file.ContentType,
                            Size = file.ContentLength,
                            Url = azureUrl,
                            User = User,
                            Album = "CoffeeHipster"
                        };

                        uwork.ImageRepository.Insert(img); // just stores our reference to the file
                        uwork.Commit();
                    }
                    else
                    {
                        return StatusCode(HttpStatusCode.Created);
                    }

                }
                return StatusCode(HttpStatusCode.BadRequest);
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // DELETE: api/ImageUpload/5
        [ResponseType(typeof(ImageUpload))]
        public IHttpActionResult DeleteImageUpload(int id)
        {
            ImageUpload imageUpload = db.ImageUploads.Find(id);
            if (imageUpload == null)
            {
                return NotFound();
            }

            db.ImageUploads.Remove(imageUpload);
            db.SaveChanges();

            return Ok(imageUpload);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ImageUploadExists(int id)
        {
            return db.ImageUploads.Count(e => e.Id == id) > 0;
        }
    }
}
const fs = require('fs');
const readDir = require('recursive-readdir');
const path = require('path');
const AWS = require('aws-sdk');
const mime = require('mime-types');

/*

You will run this script from your CI/Pipeline after build has completed.

It will read the content of the build directory and upload to S3 (live assets bucket)

Every deployment is immutable. Cache will be invalidated every time you deploy.

*/

AWS.config.update({
  region: 'eu-central-1',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  maxRetries: 3
});

const directoryPath = path.resolve(__dirname, './.next');

// Retrive al the files path in the build directory
const getDirectoryFilesRecursive = (dir, ignores = []) => {
  return new Promise((resolve, reject) => {
    readDir(dir, ignores, (err, files) => (err ? reject(err) : resolve(files)));
  });
};

// The Key will look like this: _next/static/<buildid>/pages/index.js
// the <buildid> is exposed by nextJS and it's unique per deployment.
// See: https://nextjs.org/blog/next-7/#static-cdn-support
const generateFileKey = fileName => {
  // I'm interested in only the last part of the file: '/some/path/.next/build-manifest.json',
  const S3objectPath = fileName.split('/.next/')[1];
  return `next-assets/_next/${S3objectPath}`;
};

const s3 = new AWS.S3();

const uploadToS3 = async () => {
  try {
    const fileArray = await getDirectoryFilesRecursive(directoryPath, [
      'BUILD_ID'
    ]);
    fileArray.map(file => {
      // Configuring parameters for S3 Object
      const S3params = {
        Bucket: 'platute-website-s3-staging-cache',
        Body: fs.createReadStream(file),
        Key: generateFileKey(file),
        ACL: 'public-read',
        ContentType: mime.lookup(file),
        ContentEncoding: 'utf-8',
        CacheControl: 'immutable,max-age=31536000,public'
      };
      s3.upload(S3params, function(err, data) {
        if (err) {
          // Set the exit code while letting
          // the process exit gracefully.
          console.error(err);
          process.exitCode = 1;
        } else {
          console.log(`Assets uploaded to S3: `, data);
        }
      });
    });
  } catch (error) {
    console.error(error);
  }
};

uploadToS3();
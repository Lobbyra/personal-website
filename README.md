# Personnal website

This is my personnal website available at jecaudal.fr.

## Summary

- [Personnal website](#personnal-website)
  - [Summary](#summary)
  - [Usage](#usage)
    - [DEV](#dev)
    - [TEST](#test)
    - [BUILD](#build)
    - [CLEAN](#clean)
  - [Technical details](#technical-details)
    - [Technologies](#technologies)
    - [How it is hosted](#how-it-is-hosted)
    - [Pipe CI/CD](#pipe-cicd)
  - [License](#license)

## Usage

You can use only the Makefile for common usages.

### DEV

Run the hot-reload server of Bun.

`make dev`

### TEST

Run tests files.

`make test`

### BUILD

Build the dist directory to deploy it statically.

`make build`

### CLEAN

Remove the dist directory :

`make clean`

Remove the node-modules directory :

`make fclean`

## Technical details

### Technologies

<p>
I used
<a href="https://vuejs.org/">
    <img src="https://cdn.iconscout.com/icon/free/png-512/vue-282497.png" width="15px" height="15px">
    VueJS
</a>
with
<a href="https://bun.sh">
    <img src="https://bun.sh/logo_avatar.svg" width="20px" height="20px"> Bun
</a>
as *engine* to work on it.
</p>

### How it is hosted

<p>
It is hosted on
<a href="https://aws.amazon.com/">
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" width="20px" height="20px"> AWS
</a>
cloud in a
<a href="https://aws.amazon.com/s3/">
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Amazon-S3-Logo.svg" width="20px" height="20px"> S3
</a>
bucket with a
<a href="https://aws.amazon.com/cloudfront/">Cloudfront
</a>
service on the top of it to get https with my personnal domain name.<br>Cloudfront add a cache layer for performance and optimize the free tier usage.<br>So I don't pay anything else than my domain name (I bought it on
<a href="https://www.scaleway.com/en/">
    <img src="https://avatars.githubusercontent.com/u/5185491?s=200&v=4" width="15px" height="15px"> Scaleway
</a>
).
</p>

### Pipe CI/CD

<p>
With the help of&nbsp;
<a href="https://circleci.com/">
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Circleci-icon-logo.svg" width="15px" height="15px">&nbsp;CircleCI
</a>
, when I push on my main branch, it builds the production package and sync it with my S3 bucket.
</p>

## License

Refer to the ./LICENSE file

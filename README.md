# Cloudinary Image Function

Lambda for generating a predetermined Cloudinary image transform by ID. Particularly useful for being able to control an image dynamically with a static link.

## Setup

To begin setup, with a newly cloned repo:
```
yarn install
```

To test this locally, run:
```
yarn serve
```
Which will start the function available at `localhost:9000/tweet`

### Config


### Env
Create a local `.env` file with the shared secret. This is used to store your cloud name within the deployment.

```
CLOUDINARY_CLOUD_NAME="[cloud name]"
```

Wherever this is getting deployed, you'll need to set up an environment variable with that name that will populate the `process.env` when the function is ran. With Netlify, you can set this up as a Build Environment Variable.

## Requesting the Endpoint

require('dotenv').config();

const { respondOk, respondNotFound, respondError, getImageBuffer } = require('../lib/request');
const { contructCloudinaryUrl } = require('../lib/cloudinary');
const images = require('./images');

/**
 * handler
 * @description Lambda handler
 */

export async function handler({ path } = {}) {
  const pathParts = path.split('/');
  const findImagePrefix = pathParts.find(part => part === 'image');
  const imageIdIndex = pathParts.indexOf(findImagePrefix);
  const pathImageId = pathParts[imageIdIndex + 1];
  const imageConfig = images.find(({ imageId } = {}) => imageId === pathImageId);

  if ( !imageConfig ) {
    return respondNotFound({
      message: `Not Found: Can not find imageId ${pathImageId}`
    });
  }

  let imageUrl;

  try {
    imageUrl = contructCloudinaryUrl({
      ...imageConfig,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME
    });
  } catch(e) {
    return respondError({
      message: e.message
    });
  }

  return respondOk({
    statusCode: 302,
    headers: {
      Location: imageUrl
    }
  });
}
/**
 * respondOk
 * @description Handles any logging and response when successful
 */

export function respondOk({ message = 'Ok', statusCode = 200, headers } = {}) {
  const body = {
    message: `${message}`,
  }

  console.log(body.message);

  return {
    statusCode,
    body: JSON.stringify(body),
    headers
  };
}

/**
 * respondNotFound
 * @description Handles any logging and response when not found
 */

export function respondNotFound({ message = 'Not Found', statusCode = 404, headers } = {}) {
  const body = {
    message: `${message}`,
  }

  console.log(body.message);

  return {
    statusCode,
    body: JSON.stringify(body),
    headers
  };
}


/**
 * respondError
 * @description Handles any logging response on error
 */

export function respondError({ message = 'Unknown error', statusCode = 500, headers } = {}) {
  const body = {
    error: `Error: ${message}`,
  }

  console.log(body.error);

  return {
    statusCode,
    body: JSON.stringify(body),
    headers
  };
}
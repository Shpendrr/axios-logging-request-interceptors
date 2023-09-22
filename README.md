# Api.ts

`Api.ts` is a TypeScript file containing utility functions for making API requests using the Axios library. It provides a set of functions that handle various aspects of making HTTP requests, including handling request and response logging, error handling, and request cancellation.

## Usage

### Import the functions:

```typescript
import { loggingRequest } from './path-to-file/Api.ts';
```


**Make API Requests:**

```typescript
async function fetchData() {
  try {
    const response = await loggingRequest({
      method: 'GET',
      path: '/api/data',
      logRequest: true,
      logResponse: true,
    });

    console.log('Data:', response);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
```

**Functions**

This function handles making API requests with advanced features such as customizable logging, error handling, and request cancellation support.

**Parameters**

- `method`: The HTTP method for the request (e.g., 'GET', 'POST', etc.).
- `path`: The endpoint or URL path for the API request.
- `data`: Optional request data (e.g., JSON payload for POST requests).
- `headers`: Optional request headers.
- `params`: Optional query parameters.
- `cancelTokenSource`: Optional cancellation token source for cancelling requests.
- `logRequest`: Optional flag to log the request (default: true).
- `logResponse`: Optional flag to log the response (default: true).

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Code Coverage](https://img.shields.io/badge/coverage-95%25-brightgreen)
![License](https://img.shields.io/badge/license-MIT-green)




import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, CancelTokenSource } from 'axios';

interface LoggingRequestParams<D = {}, R = unknown> {
    method: AxiosRequestConfig['method'];
    path: string;
    data?: D;
    headers?: AxiosRequestConfig['headers'];
    params?: AxiosRequestConfig['params'];
    cancelTokenSource?: CancelTokenSource;
    logRequest?: boolean;
    logResponse?: boolean;
}

export async function loggingRequest<D = {}, R = unknown>({
    method,
    path,
    data,
    headers,
    params,
    cancelTokenSource,
    logRequest = true,
    logResponse = true,
}: LoggingRequestParams<D, R>): Promise<R> {
    const url = ``;
    //   ${process.env.REACT_APP_API}${path}

    const config: AxiosRequestConfig = {
        method,
        url,
        data,
        headers,
        params,
        cancelToken: cancelTokenSource?.token,
    };

    if (logRequest) {
        console.log(`Sending ${method} request to ${url}`);
    }

    try {
        const response = await axios(config);

        if (logResponse) {
            console.log(`Received response: ${response.status} ${response.statusText}`);
        }

        return response.data as R;
    } catch (error) {
        if (axios.isCancel(error)) {
            if (logRequest) {
                console.log(`Request cancelled for ${method} request to ${url}`);
            }
            throw new Error('Request cancelled');
        }

        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error(`Request failed with status ${error.response.status}`);
            throw error;
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received');
            throw error;
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error(`Error setting up request: ${error.message}`);
            throw error;
        }
    }
}

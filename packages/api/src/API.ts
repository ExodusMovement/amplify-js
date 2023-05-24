// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { Auth } from '@aws-amplify/auth';
import { Cache } from '@aws-amplify/cache';
import { RestAPIClass } from '@aws-amplify/api-rest';
import {
	Amplify,
	ConsoleLogger as Logger,
	Credentials,
} from '@aws-amplify/core';

const logger = new Logger('API');
/**
 * @deprecated
 * Use RestApi to reduce your application bundle size
 * Export Cloud Logic APIs
 */
export class APIClass {
	/**
	 * Initialize API with AWS configuration
	 * @param {Object} options - Configuration object for API
	 */
	private _options;
	private _restApi: RestAPIClass;

	Auth = Auth;
	Cache = Cache;
	Credentials = Credentials;

	/**
	 * Initialize API with AWS configuration
	 * @param {Object} options - Configuration object for API
	 */
	constructor(options) {
		this._options = options;
		this._restApi = new RestAPIClass(options);
		logger.debug('API Options', this._options);
	}

	public getModuleName() {
		return 'API';
	}

	/**
	 * Configure API part with aws configurations
	 * @param {Object} config - Configuration of the API
	 * @return {Object} - The current configuration
	 */
	configure(options) {
		this._options = Object.assign({}, this._options, options);

		// Share Amplify instance with client for SSR
		this._restApi.Credentials = this.Credentials;

		const restAPIConfig = this._restApi.configure(this._options);

		return { ...restAPIConfig };
	}

	/**
	 * Make a GET request
	 * @param apiName - The api name of the request
	 * @param path - The path of the request
	 * @param [init] - Request extra params
	 * @return A promise that resolves to an object with response status and JSON data, if successful.
	 */
	get(
		apiName: string,
		path: string,
		init: { [key: string]: any }
	): Promise<any> {
		return this._restApi.get(apiName, path, init);
	}

	/**
	 * Make a POST request
	 * @param apiName - The api name of the request
	 * @param path - The path of the request
	 * @param [init] - Request extra params
	 * @return A promise that resolves to an object with response status and JSON data, if successful.
	 */
	post(
		apiName: string,
		path: string,
		init: { [key: string]: any }
	): Promise<any> {
		return this._restApi.post(apiName, path, init);
	}

	/**
	 * Make a PUT request
	 * @param apiName - The api name of the request
	 * @param path - The path of the request
	 * @param [init] - Request extra params
	 * @return A promise that resolves to an object with response status and JSON data, if successful.
	 */
	put(
		apiName: string,
		path: string,
		init: { [key: string]: any }
	): Promise<any> {
		return this._restApi.put(apiName, path, init);
	}

	/**
	 * Make a PATCH request
	 * @param apiName - The api name of the request
	 * @param path - The path of the request
	 * @param [init] - Request extra params
	 * @return A promise that resolves to an object with response status and JSON data, if successful.
	 */
	patch(
		apiName: string,
		path: string,
		init: { [key: string]: any }
	): Promise<any> {
		return this._restApi.patch(apiName, path, init);
	}

	/**
	 * Make a DEL request
	 * @param apiName - The api name of the request
	 * @param path - The path of the request
	 * @param [init] - Request extra params
	 * @return A promise that resolves to an object with response status and JSON data, if successful.
	 */
	del(
		apiName: string,
		path: string,
		init: { [key: string]: any }
	): Promise<any> {
		return this._restApi.del(apiName, path, init);
	}

	/**
	 * Make a HEAD request
	 * @param apiName - The api name of the request
	 * @param path - The path of the request
	 * @param [init] - Request extra params
	 * @return A promise that resolves to an object with response status and JSON data, if successful.
	 */
	head(
		apiName: string,
		path: string,
		init: { [key: string]: any }
	): Promise<any> {
		return this._restApi.head(apiName, path, init);
	}

	/**
	 * Checks to see if an error thrown is from an api request cancellation
	 * @param error - Any error
	 * @return If the error was from an api request cancellation
	 */
	isCancel(error: any): boolean {
		return this._restApi.isCancel(error);
	}
	/**
	 * Cancels an inflight request for a Rest API request.
	 * @param request - request to cancel
	 * @param [message] - custom error message
	 * @return If the request was cancelled
	 */
	cancel(request: Promise<any>, message?: string): boolean {
		if (this._restApi.hasCancelToken(request)) {
			return this._restApi.cancel(request, message);
		}
		return false;
	}

	/**
	 * Getting endpoint for API
	 * @param apiName - The name of the api
	 * @return The endpoint of the api
	 */
	async endpoint(apiName: string): Promise<string> {
		return this._restApi.endpoint(apiName);
	}
}

export const API = new APIClass(null);
Amplify.register(API);

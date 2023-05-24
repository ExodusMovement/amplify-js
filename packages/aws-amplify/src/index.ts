// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export { Amplify } from '@aws-amplify/core';
export {
	Analytics,
	AnalyticsProvider,
	AWSPinpointProvider,
	AWSKinesisProvider,
	AWSKinesisFirehoseProvider,
	AmazonPersonalizeProvider,
} from '@aws-amplify/analytics';
export { Auth } from '@aws-amplify/auth';
export { API, APIClass } from '@aws-amplify/api';
export { Cache } from '@aws-amplify/cache';
export { Notifications } from '@aws-amplify/notifications';
export {
	ConsoleLogger as Logger,
	Hub,
	ClientDevice,
	Signer,
	I18n,
	ServiceWorker,
	AWSCloudWatchProvider,
} from '@aws-amplify/core';
export { withSSRContext } from './withSSRContext';

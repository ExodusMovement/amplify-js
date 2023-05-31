// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export { Amplify } from '@exodus/aws-amplify_core';
export {
	Analytics,
	AnalyticsProvider,
	AWSPinpointProvider,
	AWSKinesisProvider,
	AWSKinesisFirehoseProvider,
	AmazonPersonalizeProvider,
} from '@exodus/aws-amplify_analytics';
export { Auth } from '@exodus/aws-amplify_auth';
export { API, APIClass } from '@exodus/aws-amplify_api';
export { Cache } from '@exodus/aws-amplify_cache';
export { Notifications } from '@exodus/aws-amplify_notifications';
export {
	ConsoleLogger as Logger,
	Hub,
	ClientDevice,
	Signer,
	I18n,
	ServiceWorker,
	AWSCloudWatchProvider,
} from '@exodus/aws-amplify_core';
export { withSSRContext } from './withSSRContext';

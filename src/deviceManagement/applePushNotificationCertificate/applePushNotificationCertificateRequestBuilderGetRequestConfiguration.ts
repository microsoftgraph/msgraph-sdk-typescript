import { type ApplePushNotificationCertificateRequestBuilderGetQueryParameters } from './applePushNotificationCertificateRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ApplePushNotificationCertificateRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
    /**
     * Request query parameters
     */
    queryParameters?: ApplePushNotificationCertificateRequestBuilderGetQueryParameters | undefined;
}

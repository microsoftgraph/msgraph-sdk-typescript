import { type NotificationMessageTemplatesRequestBuilderGetQueryParameters } from './notificationMessageTemplatesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface NotificationMessageTemplatesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: NotificationMessageTemplatesRequestBuilderGetQueryParameters | undefined;
}

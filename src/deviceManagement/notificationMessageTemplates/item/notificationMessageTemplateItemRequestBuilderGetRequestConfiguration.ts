import { type NotificationMessageTemplateItemRequestBuilderGetQueryParameters } from './notificationMessageTemplateItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface NotificationMessageTemplateItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: NotificationMessageTemplateItemRequestBuilderGetQueryParameters | undefined;
}

import {NotificationMessageTemplateItemRequestBuilderGetQueryParameters} from './notificationMessageTemplateItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface NotificationMessageTemplateItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: NotificationMessageTemplateItemRequestBuilderGetQueryParameters | undefined;
}

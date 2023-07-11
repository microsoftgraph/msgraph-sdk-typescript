import {LocalizedNotificationMessageItemRequestBuilderGetQueryParameters} from './localizedNotificationMessageItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface LocalizedNotificationMessageItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: LocalizedNotificationMessageItemRequestBuilderGetQueryParameters | undefined;
}

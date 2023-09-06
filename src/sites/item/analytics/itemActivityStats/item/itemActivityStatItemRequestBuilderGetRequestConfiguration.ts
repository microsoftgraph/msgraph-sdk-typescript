import { type ItemActivityStatItemRequestBuilderGetQueryParameters } from './itemActivityStatItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ItemActivityStatItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ItemActivityStatItemRequestBuilderGetQueryParameters | undefined;
}

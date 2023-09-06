import { type OutlookCategoryItemRequestBuilderGetQueryParameters } from './outlookCategoryItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface OutlookCategoryItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: OutlookCategoryItemRequestBuilderGetQueryParameters | undefined;
}

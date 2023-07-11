import {ColumnLinkItemRequestBuilderGetQueryParameters} from './columnLinkItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ColumnLinkItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ColumnLinkItemRequestBuilderGetQueryParameters | undefined;
}

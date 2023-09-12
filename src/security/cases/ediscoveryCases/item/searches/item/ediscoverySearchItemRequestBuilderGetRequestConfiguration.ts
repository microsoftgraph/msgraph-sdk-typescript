import { type EdiscoverySearchItemRequestBuilderGetQueryParameters } from './ediscoverySearchItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface EdiscoverySearchItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: EdiscoverySearchItemRequestBuilderGetQueryParameters | undefined;
}

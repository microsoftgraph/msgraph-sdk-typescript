import {EdiscoveryCaseItemRequestBuilderGetQueryParameters} from './ediscoveryCaseItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EdiscoveryCaseItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: EdiscoveryCaseItemRequestBuilderGetQueryParameters | undefined;
}

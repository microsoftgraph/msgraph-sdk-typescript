import { type EdiscoveryCustodianItemRequestBuilderGetQueryParameters } from './ediscoveryCustodianItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface EdiscoveryCustodianItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: EdiscoveryCustodianItemRequestBuilderGetQueryParameters | undefined;
}

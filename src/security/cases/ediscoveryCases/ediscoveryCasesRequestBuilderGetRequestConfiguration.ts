import {EdiscoveryCasesRequestBuilderGetQueryParameters} from './ediscoveryCasesRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface EdiscoveryCasesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: EdiscoveryCasesRequestBuilderGetQueryParameters | undefined;
}

import {VppTokenItemRequestBuilderGetQueryParameters} from './vppTokenItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface VppTokenItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: VppTokenItemRequestBuilderGetQueryParameters | undefined;
}

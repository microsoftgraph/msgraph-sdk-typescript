import {GraphEndpointRequestBuilderGetQueryParameters} from './graphEndpointRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface GraphEndpointRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GraphEndpointRequestBuilderGetQueryParameters | undefined;
}

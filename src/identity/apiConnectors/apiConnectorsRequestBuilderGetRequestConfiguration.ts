import {ApiConnectorsRequestBuilderGetQueryParameters} from './apiConnectorsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface ApiConnectorsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ApiConnectorsRequestBuilderGetQueryParameters | undefined;
}

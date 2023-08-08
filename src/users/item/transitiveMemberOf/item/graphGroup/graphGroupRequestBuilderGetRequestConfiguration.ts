import {GraphGroupRequestBuilderGetQueryParameters} from './graphGroupRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface GraphGroupRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GraphGroupRequestBuilderGetQueryParameters | undefined;
}

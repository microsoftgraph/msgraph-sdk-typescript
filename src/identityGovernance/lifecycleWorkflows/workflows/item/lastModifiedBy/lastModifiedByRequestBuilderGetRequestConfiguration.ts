import {LastModifiedByRequestBuilderGetQueryParameters} from './lastModifiedByRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface LastModifiedByRequestBuilderGetRequestConfiguration {
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
    queryParameters?: LastModifiedByRequestBuilderGetQueryParameters | undefined;
}

import {NoncustodialSourcesRequestBuilderGetQueryParameters} from './noncustodialSourcesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface NoncustodialSourcesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: NoncustodialSourcesRequestBuilderGetQueryParameters | undefined;
}

import {TemporaryAccessPassMethodsRequestBuilderGetQueryParameters} from './temporaryAccessPassMethodsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TemporaryAccessPassMethodsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TemporaryAccessPassMethodsRequestBuilderGetQueryParameters | undefined;
}

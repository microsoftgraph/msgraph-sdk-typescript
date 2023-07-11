import {RiskyUserItemRequestBuilderGetQueryParameters} from './riskyUserItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RiskyUserItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: RiskyUserItemRequestBuilderGetQueryParameters | undefined;
}

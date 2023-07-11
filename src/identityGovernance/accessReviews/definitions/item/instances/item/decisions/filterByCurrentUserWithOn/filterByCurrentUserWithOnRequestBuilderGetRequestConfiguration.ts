import {FilterByCurrentUserWithOnRequestBuilderGetQueryParameters} from './filterByCurrentUserWithOnRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface FilterByCurrentUserWithOnRequestBuilderGetRequestConfiguration {
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
    queryParameters?: FilterByCurrentUserWithOnRequestBuilderGetQueryParameters | undefined;
}

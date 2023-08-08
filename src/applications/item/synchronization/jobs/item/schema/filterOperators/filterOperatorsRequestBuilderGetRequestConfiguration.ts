import {FilterOperatorsRequestBuilderGetQueryParameters} from './filterOperatorsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface FilterOperatorsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: FilterOperatorsRequestBuilderGetQueryParameters | undefined;
}

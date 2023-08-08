import {EmailMethodsRequestBuilderGetQueryParameters} from './emailMethodsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface EmailMethodsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: EmailMethodsRequestBuilderGetQueryParameters | undefined;
}

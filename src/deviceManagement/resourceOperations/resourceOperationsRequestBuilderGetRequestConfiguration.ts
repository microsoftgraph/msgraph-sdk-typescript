import {ResourceOperationsRequestBuilderGetQueryParameters} from './resourceOperationsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface ResourceOperationsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ResourceOperationsRequestBuilderGetQueryParameters | undefined;
}

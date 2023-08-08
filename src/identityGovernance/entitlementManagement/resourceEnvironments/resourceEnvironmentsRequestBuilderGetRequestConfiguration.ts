import {ResourceEnvironmentsRequestBuilderGetQueryParameters} from './resourceEnvironmentsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface ResourceEnvironmentsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ResourceEnvironmentsRequestBuilderGetQueryParameters | undefined;
}

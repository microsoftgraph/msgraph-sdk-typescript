import {WorkforceIntegrationItemRequestBuilderGetQueryParameters} from './workforceIntegrationItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface WorkforceIntegrationItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WorkforceIntegrationItemRequestBuilderGetQueryParameters | undefined;
}

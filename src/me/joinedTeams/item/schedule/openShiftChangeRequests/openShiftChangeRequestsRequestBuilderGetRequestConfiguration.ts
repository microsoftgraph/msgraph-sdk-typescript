import {OpenShiftChangeRequestsRequestBuilderGetQueryParameters} from './openShiftChangeRequestsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface OpenShiftChangeRequestsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: OpenShiftChangeRequestsRequestBuilderGetQueryParameters | undefined;
}

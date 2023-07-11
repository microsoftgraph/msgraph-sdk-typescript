import {OpenShiftsRequestBuilderGetQueryParameters} from './openShiftsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OpenShiftsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: OpenShiftsRequestBuilderGetQueryParameters | undefined;
}

import {DeviceCompliancePolicyItemRequestBuilderGetQueryParameters} from './deviceCompliancePolicyItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicyItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceCompliancePolicyItemRequestBuilderGetQueryParameters | undefined;
}

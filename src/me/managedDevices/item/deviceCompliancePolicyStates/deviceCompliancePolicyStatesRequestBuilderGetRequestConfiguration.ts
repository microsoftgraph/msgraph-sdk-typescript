import {DeviceCompliancePolicyStatesRequestBuilderGetQueryParameters} from './deviceCompliancePolicyStatesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicyStatesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceCompliancePolicyStatesRequestBuilderGetQueryParameters | undefined;
}

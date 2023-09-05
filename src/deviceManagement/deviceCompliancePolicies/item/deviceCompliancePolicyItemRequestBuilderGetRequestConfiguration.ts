import { type DeviceCompliancePolicyItemRequestBuilderGetQueryParameters } from './deviceCompliancePolicyItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

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

import { type DeviceCompliancePolicyAssignmentItemRequestBuilderGetQueryParameters } from './deviceCompliancePolicyAssignmentItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicyAssignmentItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceCompliancePolicyAssignmentItemRequestBuilderGetQueryParameters | undefined;
}

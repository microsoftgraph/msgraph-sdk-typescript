import {DeviceCompliancePolicyAssignmentItemRequestBuilderGetQueryParameters} from './deviceCompliancePolicyAssignmentItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicyAssignmentItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:DeviceCompliancePolicyAssignmentItemRequestBuilderGetQueryParameters | undefined;
}

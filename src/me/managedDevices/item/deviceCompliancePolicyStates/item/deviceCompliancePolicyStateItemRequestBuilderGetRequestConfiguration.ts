import {DeviceCompliancePolicyStateItemRequestBuilderGetQueryParameters} from './deviceCompliancePolicyStateItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicyStateItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:DeviceCompliancePolicyStateItemRequestBuilderGetQueryParameters | undefined;
}

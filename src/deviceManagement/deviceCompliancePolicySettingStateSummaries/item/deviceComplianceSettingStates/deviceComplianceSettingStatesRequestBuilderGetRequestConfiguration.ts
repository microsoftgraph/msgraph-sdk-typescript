import {DeviceComplianceSettingStatesRequestBuilderGetQueryParameters} from './deviceComplianceSettingStatesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceComplianceSettingStatesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: DeviceComplianceSettingStatesRequestBuilderGetQueryParameters | undefined;
}

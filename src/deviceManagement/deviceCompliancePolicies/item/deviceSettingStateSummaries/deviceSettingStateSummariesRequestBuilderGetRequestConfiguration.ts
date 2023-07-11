import {DeviceSettingStateSummariesRequestBuilderGetQueryParameters} from './deviceSettingStateSummariesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceSettingStateSummariesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceSettingStateSummariesRequestBuilderGetQueryParameters | undefined;
}

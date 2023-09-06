import { type DeviceSettingStateSummariesRequestBuilderGetQueryParameters } from './deviceSettingStateSummariesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

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

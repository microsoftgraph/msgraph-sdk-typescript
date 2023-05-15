import {DeviceConfigurationDeviceStatusItemRequestBuilderGetQueryParameters} from './deviceConfigurationDeviceStatusItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationDeviceStatusItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: DeviceConfigurationDeviceStatusItemRequestBuilderGetQueryParameters | undefined;
}

import {DeviceConfigurationStatesRequestBuilderGetQueryParameters} from './deviceConfigurationStatesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationStatesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: DeviceConfigurationStatesRequestBuilderGetQueryParameters | undefined;
}

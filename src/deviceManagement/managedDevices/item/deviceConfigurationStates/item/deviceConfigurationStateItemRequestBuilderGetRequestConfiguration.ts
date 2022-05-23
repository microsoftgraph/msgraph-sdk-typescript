import {DeviceConfigurationStateItemRequestBuilderGetQueryParameters} from './deviceConfigurationStateItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationStateItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:DeviceConfigurationStateItemRequestBuilderGetQueryParameters | undefined;
}

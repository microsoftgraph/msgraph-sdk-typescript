import {DeviceConfigurationItemRequestBuilderGetQueryParameters} from './deviceConfigurationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:DeviceConfigurationItemRequestBuilderGetQueryParameters | undefined;
}

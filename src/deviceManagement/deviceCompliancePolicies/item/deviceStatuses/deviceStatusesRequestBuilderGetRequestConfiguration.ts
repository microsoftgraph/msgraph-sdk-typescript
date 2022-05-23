import {DeviceStatusesRequestBuilderGetQueryParameters} from './deviceStatusesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceStatusesRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:DeviceStatusesRequestBuilderGetQueryParameters | undefined;
}

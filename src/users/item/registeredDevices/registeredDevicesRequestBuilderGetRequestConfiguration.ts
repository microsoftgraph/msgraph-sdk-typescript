import {RegisteredDevicesRequestBuilderGetQueryParameters} from './registeredDevicesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RegisteredDevicesRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:RegisteredDevicesRequestBuilderGetQueryParameters | undefined;
}

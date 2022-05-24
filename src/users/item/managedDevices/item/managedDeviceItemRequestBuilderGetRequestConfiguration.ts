import {ManagedDeviceItemRequestBuilderGetQueryParameters} from './managedDeviceItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedDeviceItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ManagedDeviceItemRequestBuilderGetQueryParameters | undefined;
}

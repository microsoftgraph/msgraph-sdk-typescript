import {ManagedDeviceOverviewRequestBuilderGetQueryParameters} from './managedDeviceOverviewRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedDeviceOverviewRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ManagedDeviceOverviewRequestBuilderGetQueryParameters | undefined;
}

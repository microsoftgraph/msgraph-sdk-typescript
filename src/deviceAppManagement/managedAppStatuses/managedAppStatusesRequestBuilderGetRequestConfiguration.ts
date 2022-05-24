import {ManagedAppStatusesRequestBuilderGetQueryParameters} from './managedAppStatusesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedAppStatusesRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ManagedAppStatusesRequestBuilderGetQueryParameters | undefined;
}

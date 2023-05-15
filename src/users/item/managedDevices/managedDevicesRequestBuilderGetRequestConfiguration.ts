import {ManagedDevicesRequestBuilderGetQueryParameters} from './managedDevicesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedDevicesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: ManagedDevicesRequestBuilderGetQueryParameters | undefined;
}

import {OwnedDevicesRequestBuilderGetQueryParameters} from './ownedDevicesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OwnedDevicesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: OwnedDevicesRequestBuilderGetQueryParameters | undefined;
}

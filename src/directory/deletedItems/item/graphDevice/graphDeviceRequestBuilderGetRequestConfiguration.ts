import {GraphDeviceRequestBuilderGetQueryParameters} from './graphDeviceRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface GraphDeviceRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: GraphDeviceRequestBuilderGetQueryParameters | undefined;
}

import {DevicesWithDeviceIdRequestBuilderGetQueryParameters} from './devicesWithDeviceIdRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface DevicesWithDeviceIdRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
    /**
     * Request query parameters
     */
    queryParameters?: DevicesWithDeviceIdRequestBuilderGetQueryParameters | undefined;
}

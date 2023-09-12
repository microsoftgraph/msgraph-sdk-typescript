import { type DeviceStatusesRequestBuilderGetQueryParameters } from './deviceStatusesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DeviceStatusesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceStatusesRequestBuilderGetQueryParameters | undefined;
}

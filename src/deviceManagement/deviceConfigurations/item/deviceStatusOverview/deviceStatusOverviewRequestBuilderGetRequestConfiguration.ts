import {DeviceStatusOverviewRequestBuilderGetQueryParameters} from './deviceStatusOverviewRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceStatusOverviewRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceStatusOverviewRequestBuilderGetQueryParameters | undefined;
}

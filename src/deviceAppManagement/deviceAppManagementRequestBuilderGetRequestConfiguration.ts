import { type DeviceAppManagementRequestBuilderGetQueryParameters } from './deviceAppManagementRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DeviceAppManagementRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceAppManagementRequestBuilderGetQueryParameters | undefined;
}

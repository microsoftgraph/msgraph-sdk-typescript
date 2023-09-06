import { type DeviceInstallStateItemRequestBuilderGetQueryParameters } from './deviceInstallStateItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DeviceInstallStateItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceInstallStateItemRequestBuilderGetQueryParameters | undefined;
}

import {DeviceInstallStateItemRequestBuilderGetQueryParameters} from './deviceInstallStateItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

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

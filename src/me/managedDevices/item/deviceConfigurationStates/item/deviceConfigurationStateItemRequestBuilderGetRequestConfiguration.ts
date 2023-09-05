import { type DeviceConfigurationStateItemRequestBuilderGetQueryParameters } from './deviceConfigurationStateItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationStateItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceConfigurationStateItemRequestBuilderGetQueryParameters | undefined;
}

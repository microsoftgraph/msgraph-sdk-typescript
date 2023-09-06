import { type DeviceConfigurationsRequestBuilderGetQueryParameters } from './deviceConfigurationsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceConfigurationsRequestBuilderGetQueryParameters | undefined;
}

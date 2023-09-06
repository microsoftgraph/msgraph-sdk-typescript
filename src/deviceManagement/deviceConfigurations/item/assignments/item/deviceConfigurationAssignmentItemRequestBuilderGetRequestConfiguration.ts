import { type DeviceConfigurationAssignmentItemRequestBuilderGetQueryParameters } from './deviceConfigurationAssignmentItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationAssignmentItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceConfigurationAssignmentItemRequestBuilderGetQueryParameters | undefined;
}

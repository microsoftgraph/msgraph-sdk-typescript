import { type DeviceEnrollmentConfigurationsRequestBuilderGetQueryParameters } from './deviceEnrollmentConfigurationsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DeviceEnrollmentConfigurationsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceEnrollmentConfigurationsRequestBuilderGetQueryParameters | undefined;
}

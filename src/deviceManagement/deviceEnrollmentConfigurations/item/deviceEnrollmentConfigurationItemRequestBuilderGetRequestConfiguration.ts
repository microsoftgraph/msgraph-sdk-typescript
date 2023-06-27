import {DeviceEnrollmentConfigurationItemRequestBuilderGetQueryParameters} from './deviceEnrollmentConfigurationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceEnrollmentConfigurationItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceEnrollmentConfigurationItemRequestBuilderGetQueryParameters | undefined;
}

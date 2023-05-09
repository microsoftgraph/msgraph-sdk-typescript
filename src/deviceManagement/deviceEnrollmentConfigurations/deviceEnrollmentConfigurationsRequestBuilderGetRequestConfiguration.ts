import {DeviceEnrollmentConfigurationsRequestBuilderGetQueryParameters} from './deviceEnrollmentConfigurationsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceEnrollmentConfigurationsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: DeviceEnrollmentConfigurationsRequestBuilderGetQueryParameters | undefined;
}

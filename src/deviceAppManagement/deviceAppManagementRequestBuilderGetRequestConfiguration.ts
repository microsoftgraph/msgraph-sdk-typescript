import {DeviceAppManagementRequestBuilderGetQueryParameters} from './deviceAppManagementRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceAppManagementRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: DeviceAppManagementRequestBuilderGetQueryParameters | undefined;
}

import {DeviceManagementPartnersRequestBuilderGetQueryParameters} from './deviceManagementPartnersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceManagementPartnersRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceManagementPartnersRequestBuilderGetQueryParameters | undefined;
}

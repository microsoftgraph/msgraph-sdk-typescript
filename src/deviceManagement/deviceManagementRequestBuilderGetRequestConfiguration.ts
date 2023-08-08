import {DeviceManagementRequestBuilderGetQueryParameters} from './deviceManagementRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceManagementRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceManagementRequestBuilderGetQueryParameters | undefined;
}

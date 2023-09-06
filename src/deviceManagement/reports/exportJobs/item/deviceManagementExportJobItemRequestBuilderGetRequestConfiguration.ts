import { type DeviceManagementExportJobItemRequestBuilderGetQueryParameters } from './deviceManagementExportJobItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DeviceManagementExportJobItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceManagementExportJobItemRequestBuilderGetQueryParameters | undefined;
}

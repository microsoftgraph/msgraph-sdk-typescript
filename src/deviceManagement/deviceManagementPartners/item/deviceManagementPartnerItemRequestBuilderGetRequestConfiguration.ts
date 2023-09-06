import { type DeviceManagementPartnerItemRequestBuilderGetQueryParameters } from './deviceManagementPartnerItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DeviceManagementPartnerItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceManagementPartnerItemRequestBuilderGetQueryParameters | undefined;
}

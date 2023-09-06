import { type DeviceComplianceDeviceStatusItemRequestBuilderGetQueryParameters } from './deviceComplianceDeviceStatusItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DeviceComplianceDeviceStatusItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceComplianceDeviceStatusItemRequestBuilderGetQueryParameters | undefined;
}

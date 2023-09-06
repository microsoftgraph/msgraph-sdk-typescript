import { type DeviceStatusSummaryRequestBuilderGetQueryParameters } from './deviceStatusSummaryRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DeviceStatusSummaryRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceStatusSummaryRequestBuilderGetQueryParameters | undefined;
}

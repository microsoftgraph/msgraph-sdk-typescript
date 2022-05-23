import {DeviceStatusSummaryRequestBuilderGetQueryParameters} from './deviceStatusSummaryRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceStatusSummaryRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:DeviceStatusSummaryRequestBuilderGetQueryParameters | undefined;
}

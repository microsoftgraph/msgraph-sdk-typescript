import { type MobileThreatDefenseConnectorsRequestBuilderGetQueryParameters } from './mobileThreatDefenseConnectorsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface MobileThreatDefenseConnectorsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: MobileThreatDefenseConnectorsRequestBuilderGetQueryParameters | undefined;
}

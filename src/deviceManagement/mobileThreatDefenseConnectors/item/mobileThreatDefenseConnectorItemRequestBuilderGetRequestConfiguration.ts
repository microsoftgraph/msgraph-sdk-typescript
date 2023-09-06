import { type MobileThreatDefenseConnectorItemRequestBuilderGetQueryParameters } from './mobileThreatDefenseConnectorItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface MobileThreatDefenseConnectorItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: MobileThreatDefenseConnectorItemRequestBuilderGetQueryParameters | undefined;
}

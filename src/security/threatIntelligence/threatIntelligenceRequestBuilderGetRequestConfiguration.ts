import { type ThreatIntelligenceRequestBuilderGetQueryParameters } from './threatIntelligenceRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ThreatIntelligenceRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ThreatIntelligenceRequestBuilderGetQueryParameters | undefined;
}

import { type ThreatAssessmentResultItemRequestBuilderGetQueryParameters } from './threatAssessmentResultItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ThreatAssessmentResultItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ThreatAssessmentResultItemRequestBuilderGetQueryParameters | undefined;
}

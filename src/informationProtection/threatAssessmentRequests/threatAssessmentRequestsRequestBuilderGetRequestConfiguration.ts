import {ThreatAssessmentRequestsRequestBuilderGetQueryParameters} from './threatAssessmentRequestsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ThreatAssessmentRequestsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: ThreatAssessmentRequestsRequestBuilderGetQueryParameters | undefined;
}

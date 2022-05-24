import {ThreatAssessmentRequestItemRequestBuilderGetQueryParameters} from './threatAssessmentRequestItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ThreatAssessmentRequestItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ThreatAssessmentRequestItemRequestBuilderGetQueryParameters | undefined;
}

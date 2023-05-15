import {RiskDetectionsRequestBuilderGetQueryParameters} from './riskDetectionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RiskDetectionsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: RiskDetectionsRequestBuilderGetQueryParameters | undefined;
}

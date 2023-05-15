import {TimeOffReasonsRequestBuilderGetQueryParameters} from './timeOffReasonsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TimeOffReasonsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: TimeOffReasonsRequestBuilderGetQueryParameters | undefined;
}

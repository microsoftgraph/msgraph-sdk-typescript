import {TimeOffReasonItemRequestBuilderGetQueryParameters} from './timeOffReasonItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TimeOffReasonItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: TimeOffReasonItemRequestBuilderGetQueryParameters | undefined;
}

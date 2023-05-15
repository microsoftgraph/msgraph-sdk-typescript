import {TimeOffRequestItemRequestBuilderGetQueryParameters} from './timeOffRequestItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TimeOffRequestItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: TimeOffRequestItemRequestBuilderGetQueryParameters | undefined;
}

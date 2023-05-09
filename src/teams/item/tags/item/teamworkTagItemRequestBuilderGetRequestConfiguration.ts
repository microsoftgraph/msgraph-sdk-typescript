import {TeamworkTagItemRequestBuilderGetQueryParameters} from './teamworkTagItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TeamworkTagItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: TeamworkTagItemRequestBuilderGetQueryParameters | undefined;
}

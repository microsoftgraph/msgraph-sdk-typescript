import {InReplyToRequestBuilderGetQueryParameters} from './inReplyToRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface InReplyToRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: InReplyToRequestBuilderGetQueryParameters | undefined;
}

import {AdditionalAccessRequestBuilderGetQueryParameters} from './additionalAccessRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AdditionalAccessRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AdditionalAccessRequestBuilderGetQueryParameters | undefined;
}

import {SubjectRightsRequestsRequestBuilderGetQueryParameters} from './subjectRightsRequestsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SubjectRightsRequestsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: SubjectRightsRequestsRequestBuilderGetQueryParameters | undefined;
}

import {SubjectRightsRequestItemRequestBuilderGetQueryParameters} from './subjectRightsRequestItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SubjectRightsRequestItemRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
    /**
     * Request query parameters
     */
    queryParameters?: SubjectRightsRequestItemRequestBuilderGetQueryParameters | undefined;
}

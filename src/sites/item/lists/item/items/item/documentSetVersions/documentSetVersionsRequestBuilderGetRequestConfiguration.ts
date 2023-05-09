import {DocumentSetVersionsRequestBuilderGetQueryParameters} from './documentSetVersionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DocumentSetVersionsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: DocumentSetVersionsRequestBuilderGetQueryParameters | undefined;
}

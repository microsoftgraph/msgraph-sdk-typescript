import {DocumentSetVersionItemRequestBuilderGetQueryParameters} from './documentSetVersionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DocumentSetVersionItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: DocumentSetVersionItemRequestBuilderGetQueryParameters | undefined;
}

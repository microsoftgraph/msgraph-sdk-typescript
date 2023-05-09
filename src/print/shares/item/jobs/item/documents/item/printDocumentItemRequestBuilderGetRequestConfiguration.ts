import {PrintDocumentItemRequestBuilderGetQueryParameters} from './printDocumentItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PrintDocumentItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: PrintDocumentItemRequestBuilderGetQueryParameters | undefined;
}

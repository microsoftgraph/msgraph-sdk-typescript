import {OnenoteResourceItemRequestBuilderGetQueryParameters} from './onenoteResourceItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface OnenoteResourceItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: OnenoteResourceItemRequestBuilderGetQueryParameters | undefined;
}

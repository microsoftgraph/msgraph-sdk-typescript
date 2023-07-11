import {OnenoteSectionItemRequestBuilderGetQueryParameters} from './onenoteSectionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OnenoteSectionItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: OnenoteSectionItemRequestBuilderGetQueryParameters | undefined;
}

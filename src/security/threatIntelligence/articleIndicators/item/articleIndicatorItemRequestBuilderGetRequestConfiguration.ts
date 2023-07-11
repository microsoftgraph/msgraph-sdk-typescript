import {ArticleIndicatorItemRequestBuilderGetQueryParameters} from './articleIndicatorItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ArticleIndicatorItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ArticleIndicatorItemRequestBuilderGetQueryParameters | undefined;
}

import {ArticleIndicatorsRequestBuilderGetQueryParameters} from './articleIndicatorsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ArticleIndicatorsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ArticleIndicatorsRequestBuilderGetQueryParameters | undefined;
}

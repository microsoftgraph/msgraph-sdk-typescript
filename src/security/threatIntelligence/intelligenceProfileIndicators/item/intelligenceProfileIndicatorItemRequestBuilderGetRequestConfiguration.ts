import {IntelligenceProfileIndicatorItemRequestBuilderGetQueryParameters} from './intelligenceProfileIndicatorItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface IntelligenceProfileIndicatorItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: IntelligenceProfileIndicatorItemRequestBuilderGetQueryParameters | undefined;
}

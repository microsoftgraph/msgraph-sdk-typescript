import {IntelligenceProfileItemRequestBuilderGetQueryParameters} from './intelligenceProfileItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface IntelligenceProfileItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: IntelligenceProfileItemRequestBuilderGetQueryParameters | undefined;
}

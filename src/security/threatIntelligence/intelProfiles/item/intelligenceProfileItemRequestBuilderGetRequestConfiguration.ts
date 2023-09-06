import { type IntelligenceProfileItemRequestBuilderGetQueryParameters } from './intelligenceProfileItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

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

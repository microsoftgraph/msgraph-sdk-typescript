import { type RiskyUserHistoryItemItemRequestBuilderGetQueryParameters } from './riskyUserHistoryItemItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface RiskyUserHistoryItemItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: RiskyUserHistoryItemItemRequestBuilderGetQueryParameters | undefined;
}

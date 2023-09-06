import { type HistoryItemsRequestBuilderGetQueryParameters } from './historyItemsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface HistoryItemsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: HistoryItemsRequestBuilderGetQueryParameters | undefined;
}

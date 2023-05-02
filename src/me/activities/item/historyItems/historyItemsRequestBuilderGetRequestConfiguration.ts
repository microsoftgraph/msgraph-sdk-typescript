import {HistoryItemsRequestBuilderGetQueryParameters} from './historyItemsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface HistoryItemsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: HistoryItemsRequestBuilderGetQueryParameters | undefined;
}

import { type HistoryDefinitionsRequestBuilderGetQueryParameters } from './historyDefinitionsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface HistoryDefinitionsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: HistoryDefinitionsRequestBuilderGetQueryParameters | undefined;
}

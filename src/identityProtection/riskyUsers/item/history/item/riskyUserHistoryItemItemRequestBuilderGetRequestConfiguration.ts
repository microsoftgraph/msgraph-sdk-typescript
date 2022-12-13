import {RiskyUserHistoryItemItemRequestBuilderGetQueryParameters} from './riskyUserHistoryItemItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Configuration for the request such as headers, query parameters, and middleware options.
 */
export class RiskyUserHistoryItemItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    public headers?: Record<string, string[]> | undefined;
    /** Request options */
    public options?: RequestOption[] | undefined;
    /** Request query parameters */
    public queryParameters?: RiskyUserHistoryItemItemRequestBuilderGetQueryParameters | undefined;
}

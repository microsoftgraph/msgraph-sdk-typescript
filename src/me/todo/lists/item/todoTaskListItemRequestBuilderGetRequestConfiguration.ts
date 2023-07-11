import {TodoTaskListItemRequestBuilderGetQueryParameters} from './todoTaskListItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TodoTaskListItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TodoTaskListItemRequestBuilderGetQueryParameters | undefined;
}

import {ListItemVersionItemRequestBuilderGetQueryParameters} from './listItemVersionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ListItemVersionItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ListItemVersionItemRequestBuilderGetQueryParameters | undefined;
}

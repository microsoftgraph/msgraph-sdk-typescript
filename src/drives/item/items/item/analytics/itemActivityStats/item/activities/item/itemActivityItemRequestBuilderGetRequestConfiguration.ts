import {ItemActivityItemRequestBuilderGetQueryParameters} from './itemActivityItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface ItemActivityItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ItemActivityItemRequestBuilderGetQueryParameters | undefined;
}

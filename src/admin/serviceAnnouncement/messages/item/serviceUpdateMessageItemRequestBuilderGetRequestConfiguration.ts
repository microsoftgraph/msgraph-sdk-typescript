import {ServiceUpdateMessageItemRequestBuilderGetQueryParameters} from './serviceUpdateMessageItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ServiceUpdateMessageItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ServiceUpdateMessageItemRequestBuilderGetQueryParameters | undefined;
}

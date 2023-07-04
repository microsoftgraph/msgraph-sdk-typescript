import {CustomTaskExtensionItemRequestBuilderGetQueryParameters} from './customTaskExtensionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CustomTaskExtensionItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CustomTaskExtensionItemRequestBuilderGetQueryParameters | undefined;
}

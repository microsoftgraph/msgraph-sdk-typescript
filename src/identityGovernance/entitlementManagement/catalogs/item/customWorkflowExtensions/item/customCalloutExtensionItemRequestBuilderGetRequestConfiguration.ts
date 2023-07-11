import {CustomCalloutExtensionItemRequestBuilderGetQueryParameters} from './customCalloutExtensionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CustomCalloutExtensionItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CustomCalloutExtensionItemRequestBuilderGetQueryParameters | undefined;
}

import { type CustomCalloutExtensionItemRequestBuilderGetQueryParameters } from './customCalloutExtensionItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

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

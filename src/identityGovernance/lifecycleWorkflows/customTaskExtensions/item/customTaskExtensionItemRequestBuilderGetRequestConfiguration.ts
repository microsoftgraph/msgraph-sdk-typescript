import { type CustomTaskExtensionItemRequestBuilderGetQueryParameters } from './customTaskExtensionItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

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

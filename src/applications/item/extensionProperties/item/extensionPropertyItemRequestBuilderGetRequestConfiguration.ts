import {ExtensionPropertyItemRequestBuilderGetQueryParameters} from './extensionPropertyItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ExtensionPropertyItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ExtensionPropertyItemRequestBuilderGetQueryParameters | undefined;
}

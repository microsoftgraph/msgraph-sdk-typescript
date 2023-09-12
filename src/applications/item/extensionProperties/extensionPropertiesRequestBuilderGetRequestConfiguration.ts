import { type ExtensionPropertiesRequestBuilderGetQueryParameters } from './extensionPropertiesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ExtensionPropertiesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ExtensionPropertiesRequestBuilderGetQueryParameters | undefined;
}

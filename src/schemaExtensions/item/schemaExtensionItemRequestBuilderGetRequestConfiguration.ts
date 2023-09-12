import { type SchemaExtensionItemRequestBuilderGetQueryParameters } from './schemaExtensionItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface SchemaExtensionItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SchemaExtensionItemRequestBuilderGetQueryParameters | undefined;
}

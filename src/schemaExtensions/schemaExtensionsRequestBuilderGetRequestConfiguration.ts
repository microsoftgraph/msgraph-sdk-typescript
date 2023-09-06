import { type SchemaExtensionsRequestBuilderGetQueryParameters } from './schemaExtensionsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface SchemaExtensionsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SchemaExtensionsRequestBuilderGetQueryParameters | undefined;
}

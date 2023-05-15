import {SchemaExtensionsRequestBuilderGetQueryParameters} from './schemaExtensionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SchemaExtensionsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: SchemaExtensionsRequestBuilderGetQueryParameters | undefined;
}

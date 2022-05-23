import {SchemaExtensionItemRequestBuilderGetQueryParameters} from './schemaExtensionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SchemaExtensionItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:SchemaExtensionItemRequestBuilderGetQueryParameters | undefined;
}

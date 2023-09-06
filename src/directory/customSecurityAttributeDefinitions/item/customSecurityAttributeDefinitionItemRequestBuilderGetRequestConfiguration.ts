import { type CustomSecurityAttributeDefinitionItemRequestBuilderGetQueryParameters } from './customSecurityAttributeDefinitionItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface CustomSecurityAttributeDefinitionItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CustomSecurityAttributeDefinitionItemRequestBuilderGetQueryParameters | undefined;
}

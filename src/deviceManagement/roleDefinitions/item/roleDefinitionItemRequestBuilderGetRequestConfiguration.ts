import {RoleDefinitionItemRequestBuilderGetQueryParameters} from './roleDefinitionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RoleDefinitionItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: RoleDefinitionItemRequestBuilderGetQueryParameters | undefined;
}

import {DelegatedAdminRelationshipOperationItemRequestBuilderGetQueryParameters} from './delegatedAdminRelationshipOperationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminRelationshipOperationItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DelegatedAdminRelationshipOperationItemRequestBuilderGetQueryParameters | undefined;
}

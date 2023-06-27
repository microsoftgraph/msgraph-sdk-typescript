import {DelegatedAdminRelationshipItemRequestBuilderGetQueryParameters} from './delegatedAdminRelationshipItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminRelationshipItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DelegatedAdminRelationshipItemRequestBuilderGetQueryParameters | undefined;
}

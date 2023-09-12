import { type DelegatedAdminRelationshipRequestItemRequestBuilderGetQueryParameters } from './delegatedAdminRelationshipRequestItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DelegatedAdminRelationshipRequestItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DelegatedAdminRelationshipRequestItemRequestBuilderGetQueryParameters | undefined;
}

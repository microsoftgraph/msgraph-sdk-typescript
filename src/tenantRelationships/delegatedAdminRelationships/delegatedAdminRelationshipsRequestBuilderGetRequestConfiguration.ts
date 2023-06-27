import {DelegatedAdminRelationshipsRequestBuilderGetQueryParameters} from './delegatedAdminRelationshipsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminRelationshipsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DelegatedAdminRelationshipsRequestBuilderGetQueryParameters | undefined;
}

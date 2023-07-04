import {TenantRelationshipsRequestBuilderGetQueryParameters} from './tenantRelationshipsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TenantRelationshipsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TenantRelationshipsRequestBuilderGetQueryParameters | undefined;
}

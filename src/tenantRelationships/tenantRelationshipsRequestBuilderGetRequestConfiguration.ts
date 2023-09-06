import { type TenantRelationshipsRequestBuilderGetQueryParameters } from './tenantRelationshipsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

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

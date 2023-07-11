import {AccessPackageResourceScopeItemRequestBuilderGetQueryParameters} from './accessPackageResourceScopeItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AccessPackageResourceScopeItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AccessPackageResourceScopeItemRequestBuilderGetQueryParameters | undefined;
}

import {AccessPackageResourceRequestItemRequestBuilderGetQueryParameters} from './accessPackageResourceRequestItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AccessPackageResourceRequestItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AccessPackageResourceRequestItemRequestBuilderGetQueryParameters | undefined;
}

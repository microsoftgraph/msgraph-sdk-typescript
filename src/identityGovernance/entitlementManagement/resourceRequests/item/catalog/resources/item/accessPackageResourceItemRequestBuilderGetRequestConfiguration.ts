import { type AccessPackageResourceItemRequestBuilderGetQueryParameters } from './accessPackageResourceItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AccessPackageResourceItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AccessPackageResourceItemRequestBuilderGetQueryParameters | undefined;
}

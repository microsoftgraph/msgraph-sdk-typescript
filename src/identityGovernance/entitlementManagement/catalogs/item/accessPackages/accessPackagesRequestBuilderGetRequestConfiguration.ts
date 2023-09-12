import { type AccessPackagesRequestBuilderGetQueryParameters } from './accessPackagesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AccessPackagesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AccessPackagesRequestBuilderGetQueryParameters | undefined;
}

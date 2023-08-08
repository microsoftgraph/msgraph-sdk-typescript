import {AccessPackageCatalogItemRequestBuilderGetQueryParameters} from './accessPackageCatalogItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface AccessPackageCatalogItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AccessPackageCatalogItemRequestBuilderGetQueryParameters | undefined;
}

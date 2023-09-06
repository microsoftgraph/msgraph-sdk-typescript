import { type DelegatedAdminCustomerItemRequestBuilderGetQueryParameters } from './delegatedAdminCustomerItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DelegatedAdminCustomerItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DelegatedAdminCustomerItemRequestBuilderGetQueryParameters | undefined;
}

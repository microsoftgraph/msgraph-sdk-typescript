import {DelegatedAdminCustomerItemRequestBuilderGetQueryParameters} from './delegatedAdminCustomerItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminCustomerItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: DelegatedAdminCustomerItemRequestBuilderGetQueryParameters | undefined;
}

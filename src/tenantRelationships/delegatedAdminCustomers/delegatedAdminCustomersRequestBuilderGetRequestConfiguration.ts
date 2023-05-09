import {DelegatedAdminCustomersRequestBuilderGetQueryParameters} from './delegatedAdminCustomersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminCustomersRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: DelegatedAdminCustomersRequestBuilderGetQueryParameters | undefined;
}

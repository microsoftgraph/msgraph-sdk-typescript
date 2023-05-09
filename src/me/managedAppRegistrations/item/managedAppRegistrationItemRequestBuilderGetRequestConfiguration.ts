import {ManagedAppRegistrationItemRequestBuilderGetQueryParameters} from './managedAppRegistrationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedAppRegistrationItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: ManagedAppRegistrationItemRequestBuilderGetQueryParameters | undefined;
}

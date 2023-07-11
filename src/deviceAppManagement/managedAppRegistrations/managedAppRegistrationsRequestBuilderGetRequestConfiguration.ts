import {ManagedAppRegistrationsRequestBuilderGetQueryParameters} from './managedAppRegistrationsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedAppRegistrationsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ManagedAppRegistrationsRequestBuilderGetQueryParameters | undefined;
}

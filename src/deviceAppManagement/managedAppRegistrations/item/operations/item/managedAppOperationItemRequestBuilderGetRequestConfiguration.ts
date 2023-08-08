import {ManagedAppOperationItemRequestBuilderGetQueryParameters} from './managedAppOperationItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedAppOperationItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ManagedAppOperationItemRequestBuilderGetQueryParameters | undefined;
}

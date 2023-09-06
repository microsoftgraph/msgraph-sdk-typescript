import { type FederatedIdentityCredentialsRequestBuilderGetQueryParameters } from './federatedIdentityCredentialsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface FederatedIdentityCredentialsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: FederatedIdentityCredentialsRequestBuilderGetQueryParameters | undefined;
}

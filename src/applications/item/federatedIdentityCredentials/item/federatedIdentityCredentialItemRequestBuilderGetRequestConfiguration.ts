import { type FederatedIdentityCredentialItemRequestBuilderGetQueryParameters } from './federatedIdentityCredentialItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface FederatedIdentityCredentialItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: FederatedIdentityCredentialItemRequestBuilderGetQueryParameters | undefined;
}

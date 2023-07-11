import {IdentityProviderBaseItemRequestBuilderGetQueryParameters} from './identityProviderBaseItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface IdentityProviderBaseItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: IdentityProviderBaseItemRequestBuilderGetQueryParameters | undefined;
}

import {IdentityProtectionRequestBuilderGetQueryParameters} from './identityProtectionRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface IdentityProtectionRequestBuilderGetRequestConfiguration {
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
    queryParameters?: IdentityProtectionRequestBuilderGetQueryParameters | undefined;
}

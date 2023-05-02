import {IdentityGovernanceRequestBuilderGetQueryParameters} from './identityGovernanceRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface IdentityGovernanceRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: IdentityGovernanceRequestBuilderGetQueryParameters | undefined;
}

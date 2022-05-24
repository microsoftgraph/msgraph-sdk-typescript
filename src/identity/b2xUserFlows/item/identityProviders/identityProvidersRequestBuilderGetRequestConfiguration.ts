import {IdentityProvidersRequestBuilderGetQueryParameters} from './identityProvidersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface IdentityProvidersRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:IdentityProvidersRequestBuilderGetQueryParameters | undefined;
}

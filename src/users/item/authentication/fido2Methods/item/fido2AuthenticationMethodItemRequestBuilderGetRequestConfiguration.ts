import {Fido2AuthenticationMethodItemRequestBuilderGetQueryParameters} from './fido2AuthenticationMethodItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface Fido2AuthenticationMethodItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: Fido2AuthenticationMethodItemRequestBuilderGetQueryParameters | undefined;
}

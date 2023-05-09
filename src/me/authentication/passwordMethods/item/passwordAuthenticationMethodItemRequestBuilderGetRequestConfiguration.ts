import {PasswordAuthenticationMethodItemRequestBuilderGetQueryParameters} from './passwordAuthenticationMethodItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PasswordAuthenticationMethodItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: PasswordAuthenticationMethodItemRequestBuilderGetQueryParameters | undefined;
}

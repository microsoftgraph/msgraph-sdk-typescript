import { type PasswordAuthenticationMethodItemRequestBuilderGetQueryParameters } from './passwordAuthenticationMethodItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface PasswordAuthenticationMethodItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: PasswordAuthenticationMethodItemRequestBuilderGetQueryParameters | undefined;
}

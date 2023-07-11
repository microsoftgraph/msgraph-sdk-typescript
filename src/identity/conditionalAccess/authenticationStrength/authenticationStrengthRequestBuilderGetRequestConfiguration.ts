import {AuthenticationStrengthRequestBuilderGetQueryParameters} from './authenticationStrengthRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuthenticationStrengthRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AuthenticationStrengthRequestBuilderGetQueryParameters | undefined;
}

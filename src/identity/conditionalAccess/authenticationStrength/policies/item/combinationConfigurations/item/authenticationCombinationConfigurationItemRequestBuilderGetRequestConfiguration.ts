import {AuthenticationCombinationConfigurationItemRequestBuilderGetQueryParameters} from './authenticationCombinationConfigurationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuthenticationCombinationConfigurationItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AuthenticationCombinationConfigurationItemRequestBuilderGetQueryParameters | undefined;
}

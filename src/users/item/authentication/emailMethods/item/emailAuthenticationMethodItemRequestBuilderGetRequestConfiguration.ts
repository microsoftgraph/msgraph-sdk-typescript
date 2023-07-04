import {EmailAuthenticationMethodItemRequestBuilderGetQueryParameters} from './emailAuthenticationMethodItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EmailAuthenticationMethodItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: EmailAuthenticationMethodItemRequestBuilderGetQueryParameters | undefined;
}

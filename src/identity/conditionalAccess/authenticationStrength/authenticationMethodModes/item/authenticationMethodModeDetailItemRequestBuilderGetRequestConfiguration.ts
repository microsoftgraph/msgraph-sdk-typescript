import {AuthenticationMethodModeDetailItemRequestBuilderGetQueryParameters} from './authenticationMethodModeDetailItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodModeDetailItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AuthenticationMethodModeDetailItemRequestBuilderGetQueryParameters | undefined;
}

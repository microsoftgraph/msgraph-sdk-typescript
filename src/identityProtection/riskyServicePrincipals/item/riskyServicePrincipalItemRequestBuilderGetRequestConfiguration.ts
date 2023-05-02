import {RiskyServicePrincipalItemRequestBuilderGetQueryParameters} from './riskyServicePrincipalItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RiskyServicePrincipalItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: RiskyServicePrincipalItemRequestBuilderGetQueryParameters | undefined;
}

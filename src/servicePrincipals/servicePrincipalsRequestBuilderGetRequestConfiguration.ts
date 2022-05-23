import {ServicePrincipalsRequestBuilderGetQueryParameters} from './servicePrincipalsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ServicePrincipalsRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ServicePrincipalsRequestBuilderGetQueryParameters | undefined;
}

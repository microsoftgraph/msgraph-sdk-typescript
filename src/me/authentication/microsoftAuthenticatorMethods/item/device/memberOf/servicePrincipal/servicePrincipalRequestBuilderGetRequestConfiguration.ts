import {ServicePrincipalRequestBuilderGetQueryParameters} from './servicePrincipalRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ServicePrincipalRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ServicePrincipalRequestBuilderGetQueryParameters | undefined;
}

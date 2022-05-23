import {EndpointsRequestBuilderGetQueryParameters} from './endpointsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EndpointsRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:EndpointsRequestBuilderGetQueryParameters | undefined;
}

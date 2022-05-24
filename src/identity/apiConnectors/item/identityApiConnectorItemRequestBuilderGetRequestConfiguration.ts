import {IdentityApiConnectorItemRequestBuilderGetQueryParameters} from './identityApiConnectorItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface IdentityApiConnectorItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:IdentityApiConnectorItemRequestBuilderGetQueryParameters | undefined;
}

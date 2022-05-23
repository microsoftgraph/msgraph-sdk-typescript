import {RestrictedSignInItemRequestBuilderGetQueryParameters} from './restrictedSignInItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RestrictedSignInItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:RestrictedSignInItemRequestBuilderGetQueryParameters | undefined;
}

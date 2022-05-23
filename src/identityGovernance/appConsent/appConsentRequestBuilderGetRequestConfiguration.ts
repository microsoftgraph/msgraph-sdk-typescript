import {AppConsentRequestBuilderGetQueryParameters} from './appConsentRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppConsentRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:AppConsentRequestBuilderGetQueryParameters | undefined;
}

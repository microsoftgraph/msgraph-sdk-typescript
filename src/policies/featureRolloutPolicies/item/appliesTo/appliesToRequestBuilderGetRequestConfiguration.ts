import {AppliesToRequestBuilderGetQueryParameters} from './appliesToRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppliesToRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:AppliesToRequestBuilderGetQueryParameters | undefined;
}

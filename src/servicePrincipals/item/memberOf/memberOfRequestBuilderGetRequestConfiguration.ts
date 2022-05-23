import {MemberOfRequestBuilderGetQueryParameters} from './memberOfRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MemberOfRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:MemberOfRequestBuilderGetQueryParameters | undefined;
}

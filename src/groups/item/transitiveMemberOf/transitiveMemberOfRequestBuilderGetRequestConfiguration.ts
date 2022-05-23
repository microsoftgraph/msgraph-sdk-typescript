import {TransitiveMemberOfRequestBuilderGetQueryParameters} from './transitiveMemberOfRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TransitiveMemberOfRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:TransitiveMemberOfRequestBuilderGetQueryParameters | undefined;
}

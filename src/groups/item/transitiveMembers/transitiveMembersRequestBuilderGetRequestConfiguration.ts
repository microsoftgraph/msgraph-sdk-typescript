import {TransitiveMembersRequestBuilderGetQueryParameters} from './transitiveMembersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TransitiveMembersRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:TransitiveMembersRequestBuilderGetQueryParameters | undefined;
}

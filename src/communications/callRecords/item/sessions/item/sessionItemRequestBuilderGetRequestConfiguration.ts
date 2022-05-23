import {SessionItemRequestBuilderGetQueryParameters} from './sessionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SessionItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:SessionItemRequestBuilderGetQueryParameters | undefined;
}

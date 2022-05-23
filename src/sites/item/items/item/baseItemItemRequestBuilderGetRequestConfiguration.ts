import {BaseItemItemRequestBuilderGetQueryParameters} from './baseItemItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BaseItemItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:BaseItemItemRequestBuilderGetQueryParameters | undefined;
}

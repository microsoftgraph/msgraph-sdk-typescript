import {AudioRoutingGroupItemRequestBuilderGetQueryParameters} from './audioRoutingGroupItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AudioRoutingGroupItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:AudioRoutingGroupItemRequestBuilderGetQueryParameters | undefined;
}

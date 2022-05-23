import {PresenceItemRequestBuilderGetQueryParameters} from './presenceItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PresenceItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:PresenceItemRequestBuilderGetQueryParameters | undefined;
}

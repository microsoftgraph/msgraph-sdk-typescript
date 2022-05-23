import {ChatMessageItemRequestBuilderGetQueryParameters} from './chatMessageItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ChatMessageItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ChatMessageItemRequestBuilderGetQueryParameters | undefined;
}

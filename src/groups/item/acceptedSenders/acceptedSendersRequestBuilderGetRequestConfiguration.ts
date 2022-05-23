import {AcceptedSendersRequestBuilderGetQueryParameters} from './acceptedSendersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AcceptedSendersRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:AcceptedSendersRequestBuilderGetQueryParameters | undefined;
}

import {ParticipantItemRequestBuilderGetQueryParameters} from './participantItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ParticipantItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ParticipantItemRequestBuilderGetQueryParameters | undefined;
}

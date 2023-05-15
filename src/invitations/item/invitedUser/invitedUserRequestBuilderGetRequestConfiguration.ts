import {InvitedUserRequestBuilderGetQueryParameters} from './invitedUserRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface InvitedUserRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: InvitedUserRequestBuilderGetQueryParameters | undefined;
}

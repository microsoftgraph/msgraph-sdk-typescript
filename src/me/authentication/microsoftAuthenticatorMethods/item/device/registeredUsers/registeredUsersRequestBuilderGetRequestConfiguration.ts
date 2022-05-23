import {RegisteredUsersRequestBuilderGetQueryParameters} from './registeredUsersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RegisteredUsersRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:RegisteredUsersRequestBuilderGetQueryParameters | undefined;
}

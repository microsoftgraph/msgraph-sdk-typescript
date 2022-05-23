import {TeamsRequestBuilderGetQueryParameters} from './teamsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TeamsRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:TeamsRequestBuilderGetQueryParameters | undefined;
}

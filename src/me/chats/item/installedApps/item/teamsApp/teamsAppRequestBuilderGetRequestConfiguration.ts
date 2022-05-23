import {TeamsAppRequestBuilderGetQueryParameters} from './teamsAppRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TeamsAppRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:TeamsAppRequestBuilderGetQueryParameters | undefined;
}

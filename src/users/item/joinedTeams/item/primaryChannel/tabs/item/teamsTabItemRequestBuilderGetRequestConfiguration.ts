import {TeamsTabItemRequestBuilderGetQueryParameters} from './teamsTabItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TeamsTabItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:TeamsTabItemRequestBuilderGetQueryParameters | undefined;
}

import {TeamsAppInstallationItemRequestBuilderGetQueryParameters} from './teamsAppInstallationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TeamsAppInstallationItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:TeamsAppInstallationItemRequestBuilderGetQueryParameters | undefined;
}

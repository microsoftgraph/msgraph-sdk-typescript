import {TeamsAppSettingsRequestBuilderGetQueryParameters} from './teamsAppSettingsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TeamsAppSettingsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
    /**
     * Request query parameters
     */
    queryParameters?: TeamsAppSettingsRequestBuilderGetQueryParameters | undefined;
}

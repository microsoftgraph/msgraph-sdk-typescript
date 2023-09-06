import { type TeamsAppSettingsRequestBuilderGetQueryParameters } from './teamsAppSettingsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

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

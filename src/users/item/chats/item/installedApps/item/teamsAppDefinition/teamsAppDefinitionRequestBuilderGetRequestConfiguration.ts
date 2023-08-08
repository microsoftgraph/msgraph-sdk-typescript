import {TeamsAppDefinitionRequestBuilderGetQueryParameters} from './teamsAppDefinitionRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface TeamsAppDefinitionRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TeamsAppDefinitionRequestBuilderGetQueryParameters | undefined;
}

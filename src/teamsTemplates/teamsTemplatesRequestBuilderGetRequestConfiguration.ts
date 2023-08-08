import {TeamsTemplatesRequestBuilderGetQueryParameters} from './teamsTemplatesRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface TeamsTemplatesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TeamsTemplatesRequestBuilderGetQueryParameters | undefined;
}

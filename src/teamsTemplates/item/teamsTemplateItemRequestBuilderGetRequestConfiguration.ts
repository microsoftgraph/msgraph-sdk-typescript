import {TeamsTemplateItemRequestBuilderGetQueryParameters} from './teamsTemplateItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface TeamsTemplateItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TeamsTemplateItemRequestBuilderGetQueryParameters | undefined;
}

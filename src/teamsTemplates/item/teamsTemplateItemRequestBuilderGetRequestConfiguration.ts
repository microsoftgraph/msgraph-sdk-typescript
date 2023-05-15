import {TeamsTemplateItemRequestBuilderGetQueryParameters} from './teamsTemplateItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TeamsTemplateItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: TeamsTemplateItemRequestBuilderGetQueryParameters | undefined;
}

import {IncidentItemRequestBuilderGetQueryParameters} from './incidentItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface IncidentItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: IncidentItemRequestBuilderGetQueryParameters | undefined;
}

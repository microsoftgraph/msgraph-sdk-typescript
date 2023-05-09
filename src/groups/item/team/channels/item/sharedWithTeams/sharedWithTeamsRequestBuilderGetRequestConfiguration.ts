import {SharedWithTeamsRequestBuilderGetQueryParameters} from './sharedWithTeamsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SharedWithTeamsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: SharedWithTeamsRequestBuilderGetQueryParameters | undefined;
}

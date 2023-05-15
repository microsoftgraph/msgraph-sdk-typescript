import {AssociatedTeamInfoItemRequestBuilderGetQueryParameters} from './associatedTeamInfoItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AssociatedTeamInfoItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AssociatedTeamInfoItemRequestBuilderGetQueryParameters | undefined;
}

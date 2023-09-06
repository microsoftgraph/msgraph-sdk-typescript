import { type AssociatedTeamsRequestBuilderGetQueryParameters } from './associatedTeamsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AssociatedTeamsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AssociatedTeamsRequestBuilderGetQueryParameters | undefined;
}

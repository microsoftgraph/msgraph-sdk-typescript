import {JoinedTeamsRequestBuilderGetQueryParameters} from './joinedTeamsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface JoinedTeamsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: JoinedTeamsRequestBuilderGetQueryParameters | undefined;
}

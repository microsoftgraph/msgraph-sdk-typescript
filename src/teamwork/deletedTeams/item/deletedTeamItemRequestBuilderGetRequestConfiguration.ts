import { type DeletedTeamItemRequestBuilderGetQueryParameters } from './deletedTeamItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DeletedTeamItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeletedTeamItemRequestBuilderGetQueryParameters | undefined;
}

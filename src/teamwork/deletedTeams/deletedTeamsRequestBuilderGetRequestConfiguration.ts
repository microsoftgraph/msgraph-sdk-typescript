import { type DeletedTeamsRequestBuilderGetQueryParameters } from './deletedTeamsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DeletedTeamsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeletedTeamsRequestBuilderGetQueryParameters | undefined;
}

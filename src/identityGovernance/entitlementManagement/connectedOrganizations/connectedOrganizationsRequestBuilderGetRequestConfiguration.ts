import { type ConnectedOrganizationsRequestBuilderGetQueryParameters } from './connectedOrganizationsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ConnectedOrganizationsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ConnectedOrganizationsRequestBuilderGetQueryParameters | undefined;
}

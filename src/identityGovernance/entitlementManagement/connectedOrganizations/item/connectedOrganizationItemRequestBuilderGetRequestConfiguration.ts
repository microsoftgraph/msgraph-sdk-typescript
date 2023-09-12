import { type ConnectedOrganizationItemRequestBuilderGetQueryParameters } from './connectedOrganizationItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ConnectedOrganizationItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ConnectedOrganizationItemRequestBuilderGetQueryParameters | undefined;
}

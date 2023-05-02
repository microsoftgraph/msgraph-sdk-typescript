import {ConnectedOrganizationItemRequestBuilderGetQueryParameters} from './connectedOrganizationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ConnectedOrganizationItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: ConnectedOrganizationItemRequestBuilderGetQueryParameters | undefined;
}

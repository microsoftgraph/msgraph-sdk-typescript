import {AppRoleAssignedToRequestBuilderGetQueryParameters} from './appRoleAssignedToRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppRoleAssignedToRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AppRoleAssignedToRequestBuilderGetQueryParameters | undefined;
}

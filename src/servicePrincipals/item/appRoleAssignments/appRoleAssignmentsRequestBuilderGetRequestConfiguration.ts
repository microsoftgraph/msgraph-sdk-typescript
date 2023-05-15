import {AppRoleAssignmentsRequestBuilderGetQueryParameters} from './appRoleAssignmentsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppRoleAssignmentsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AppRoleAssignmentsRequestBuilderGetQueryParameters | undefined;
}

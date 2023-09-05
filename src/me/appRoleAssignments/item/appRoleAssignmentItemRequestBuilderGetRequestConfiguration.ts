import { type AppRoleAssignmentItemRequestBuilderGetQueryParameters } from './appRoleAssignmentItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AppRoleAssignmentItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AppRoleAssignmentItemRequestBuilderGetQueryParameters | undefined;
}

import {RoleAssignmentSchedulesRequestBuilderGetQueryParameters} from './roleAssignmentSchedulesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RoleAssignmentSchedulesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: RoleAssignmentSchedulesRequestBuilderGetQueryParameters | undefined;
}

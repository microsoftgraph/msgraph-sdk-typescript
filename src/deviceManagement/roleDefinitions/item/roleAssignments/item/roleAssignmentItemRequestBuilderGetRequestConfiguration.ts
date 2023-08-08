import {RoleAssignmentItemRequestBuilderGetQueryParameters} from './roleAssignmentItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface RoleAssignmentItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: RoleAssignmentItemRequestBuilderGetQueryParameters | undefined;
}

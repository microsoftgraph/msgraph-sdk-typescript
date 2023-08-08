import {GraphAppRoleAssignmentRequestBuilderGetQueryParameters} from './graphAppRoleAssignmentRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface GraphAppRoleAssignmentRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GraphAppRoleAssignmentRequestBuilderGetQueryParameters | undefined;
}

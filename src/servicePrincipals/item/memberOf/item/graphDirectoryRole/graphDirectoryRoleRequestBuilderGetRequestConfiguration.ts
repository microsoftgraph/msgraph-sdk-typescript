import {GraphDirectoryRoleRequestBuilderGetQueryParameters} from './graphDirectoryRoleRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface GraphDirectoryRoleRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GraphDirectoryRoleRequestBuilderGetQueryParameters | undefined;
}

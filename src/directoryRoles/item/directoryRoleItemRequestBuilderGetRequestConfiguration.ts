import {DirectoryRoleItemRequestBuilderGetQueryParameters} from './directoryRoleItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DirectoryRoleItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DirectoryRoleItemRequestBuilderGetQueryParameters | undefined;
}

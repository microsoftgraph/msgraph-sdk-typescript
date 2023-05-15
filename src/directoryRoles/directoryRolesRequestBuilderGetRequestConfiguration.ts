import {DirectoryRolesRequestBuilderGetQueryParameters} from './directoryRolesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DirectoryRolesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: DirectoryRolesRequestBuilderGetQueryParameters | undefined;
}

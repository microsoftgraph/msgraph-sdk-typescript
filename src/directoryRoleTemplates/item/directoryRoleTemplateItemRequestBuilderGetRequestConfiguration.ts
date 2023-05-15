import {DirectoryRoleTemplateItemRequestBuilderGetQueryParameters} from './directoryRoleTemplateItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DirectoryRoleTemplateItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: DirectoryRoleTemplateItemRequestBuilderGetQueryParameters | undefined;
}

import {DirectoryRoleTemplatesRequestBuilderGetQueryParameters} from './directoryRoleTemplatesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DirectoryRoleTemplatesRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:DirectoryRoleTemplatesRequestBuilderGetQueryParameters | undefined;
}

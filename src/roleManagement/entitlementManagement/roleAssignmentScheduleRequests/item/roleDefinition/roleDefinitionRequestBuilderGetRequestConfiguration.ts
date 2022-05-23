import {RoleDefinitionRequestBuilderGetQueryParameters} from './roleDefinitionRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RoleDefinitionRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:RoleDefinitionRequestBuilderGetQueryParameters | undefined;
}

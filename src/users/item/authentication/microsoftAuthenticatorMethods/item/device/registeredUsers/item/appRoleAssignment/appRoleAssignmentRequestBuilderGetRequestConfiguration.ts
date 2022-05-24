import {AppRoleAssignmentRequestBuilderGetQueryParameters} from './appRoleAssignmentRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppRoleAssignmentRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:AppRoleAssignmentRequestBuilderGetQueryParameters | undefined;
}

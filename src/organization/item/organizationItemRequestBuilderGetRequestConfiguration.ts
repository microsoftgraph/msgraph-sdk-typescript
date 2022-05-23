import {OrganizationItemRequestBuilderGetQueryParameters} from './organizationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OrganizationItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:OrganizationItemRequestBuilderGetQueryParameters | undefined;
}

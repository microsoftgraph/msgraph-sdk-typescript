import {OrgContactRequestBuilderGetQueryParameters} from './orgContactRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OrgContactRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:OrgContactRequestBuilderGetQueryParameters | undefined;
}

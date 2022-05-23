import {UserFlowAttributesRequestBuilderGetQueryParameters} from './userFlowAttributesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UserFlowAttributesRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:UserFlowAttributesRequestBuilderGetQueryParameters | undefined;
}

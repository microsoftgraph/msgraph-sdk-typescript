import {ProvisioningObjectSummaryItemRequestBuilderGetQueryParameters} from './provisioningObjectSummaryItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ProvisioningObjectSummaryItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ProvisioningObjectSummaryItemRequestBuilderGetQueryParameters | undefined;
}

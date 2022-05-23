import {ProvisioningRequestBuilderGetQueryParameters} from './provisioningRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ProvisioningRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ProvisioningRequestBuilderGetQueryParameters | undefined;
}

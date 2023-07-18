import {ServicePrincipalsWithAppIdRequestBuilderGetQueryParameters} from './servicePrincipalsWithAppIdRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ServicePrincipalsWithAppIdRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
    /**
     * Request query parameters
     */
    queryParameters?: ServicePrincipalsWithAppIdRequestBuilderGetQueryParameters | undefined;
}

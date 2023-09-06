import { type ServicePrincipalsWithAppIdRequestBuilderGetQueryParameters } from './servicePrincipalsWithAppIdRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

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

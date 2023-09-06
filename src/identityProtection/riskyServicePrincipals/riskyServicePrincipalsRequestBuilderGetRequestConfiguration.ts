import { type RiskyServicePrincipalsRequestBuilderGetQueryParameters } from './riskyServicePrincipalsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface RiskyServicePrincipalsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: RiskyServicePrincipalsRequestBuilderGetQueryParameters | undefined;
}

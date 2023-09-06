import { type AdministrativeUnitsRequestBuilderGetQueryParameters } from './administrativeUnitsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AdministrativeUnitsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AdministrativeUnitsRequestBuilderGetQueryParameters | undefined;
}

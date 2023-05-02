import {AdministrativeUnitsRequestBuilderGetQueryParameters} from './administrativeUnitsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AdministrativeUnitsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AdministrativeUnitsRequestBuilderGetQueryParameters | undefined;
}

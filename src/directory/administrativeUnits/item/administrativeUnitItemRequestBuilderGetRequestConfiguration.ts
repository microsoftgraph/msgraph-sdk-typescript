import {AdministrativeUnitItemRequestBuilderGetQueryParameters} from './administrativeUnitItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AdministrativeUnitItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AdministrativeUnitItemRequestBuilderGetQueryParameters | undefined;
}

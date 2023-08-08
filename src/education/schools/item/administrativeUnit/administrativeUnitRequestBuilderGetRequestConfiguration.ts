import {AdministrativeUnitRequestBuilderGetQueryParameters} from './administrativeUnitRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface AdministrativeUnitRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AdministrativeUnitRequestBuilderGetQueryParameters | undefined;
}

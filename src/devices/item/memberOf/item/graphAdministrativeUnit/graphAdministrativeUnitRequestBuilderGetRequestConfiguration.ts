import {GraphAdministrativeUnitRequestBuilderGetQueryParameters} from './graphAdministrativeUnitRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface GraphAdministrativeUnitRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GraphAdministrativeUnitRequestBuilderGetQueryParameters | undefined;
}

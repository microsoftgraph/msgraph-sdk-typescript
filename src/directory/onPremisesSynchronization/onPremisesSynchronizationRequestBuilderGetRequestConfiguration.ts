import {OnPremisesSynchronizationRequestBuilderGetQueryParameters} from './onPremisesSynchronizationRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface OnPremisesSynchronizationRequestBuilderGetRequestConfiguration {
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
    queryParameters?: OnPremisesSynchronizationRequestBuilderGetQueryParameters | undefined;
}

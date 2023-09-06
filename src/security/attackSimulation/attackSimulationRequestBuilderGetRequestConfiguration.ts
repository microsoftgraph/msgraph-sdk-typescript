import { type AttackSimulationRequestBuilderGetQueryParameters } from './attackSimulationRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AttackSimulationRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AttackSimulationRequestBuilderGetQueryParameters | undefined;
}

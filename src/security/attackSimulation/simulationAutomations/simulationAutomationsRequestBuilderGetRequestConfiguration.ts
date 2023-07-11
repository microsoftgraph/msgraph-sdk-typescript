import {SimulationAutomationsRequestBuilderGetQueryParameters} from './simulationAutomationsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SimulationAutomationsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SimulationAutomationsRequestBuilderGetQueryParameters | undefined;
}

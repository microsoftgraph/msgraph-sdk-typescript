import { type SimulationAutomationRunItemRequestBuilderGetQueryParameters } from './simulationAutomationRunItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface SimulationAutomationRunItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SimulationAutomationRunItemRequestBuilderGetQueryParameters | undefined;
}

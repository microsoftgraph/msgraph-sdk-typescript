import { type SimulationAutomationItemRequestBuilderGetQueryParameters } from './simulationAutomationItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface SimulationAutomationItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SimulationAutomationItemRequestBuilderGetQueryParameters | undefined;
}

import { createSimulationAutomationRunFromDiscriminatorValue } from './createSimulationAutomationRunFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeSimulationAutomationRun } from './serializeSimulationAutomationRun';
import { type SimulationAutomationRun } from './simulationAutomationRun';
import { type SimulationAutomationRunCollectionResponse } from './simulationAutomationRunCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationAutomationRunCollectionResponse(simulationAutomationRunCollectionResponse: SimulationAutomationRunCollectionResponse | undefined = {} as SimulationAutomationRunCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(simulationAutomationRunCollectionResponse),
        "value": n => { simulationAutomationRunCollectionResponse.value = n.getCollectionOfObjectValues<SimulationAutomationRun>(createSimulationAutomationRunFromDiscriminatorValue); },
    }
}
